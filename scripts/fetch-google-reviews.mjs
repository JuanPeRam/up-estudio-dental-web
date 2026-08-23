// Run by .github/workflows/update-google-reviews.yml on a daily schedule.
// Fetches the latest Google reviews and overwrites src/data/reviews.json,
// which the site reads at build time — no live Google API calls happen
// when a visitor loads the page.
import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const apiKey = process.env.GOOGLE_PLACES_API_KEY;
const placeId = process.env.GOOGLE_PLACE_ID;

if (!apiKey || !placeId) {
    console.error(
        "Missing GOOGLE_PLACES_API_KEY or GOOGLE_PLACE_ID environment variables.",
    );
    process.exit(1);
}

const outputPath = fileURLToPath(
    new URL("../src/data/reviews.json", import.meta.url),
);

const url =
    "https://maps.googleapis.com/maps/api/place/details/json" +
    `?place_id=${encodeURIComponent(placeId)}` +
    "&fields=reviews" +
    "&reviews_sort=newest" +
    "&language=es" +
    `&key=${encodeURIComponent(apiKey)}`;

try {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Google API responded with HTTP ${response.status}`);
    }

    const data = await response.json();

    if (data.status !== "OK") {
        throw new Error(
            `Google API returned status "${data.status}": ${data.error_message ?? "no error message"}`,
        );
    }

    const reviews = data.result?.reviews ?? [];

    if (reviews.length === 0) {
        throw new Error("Google API returned zero reviews, refusing to overwrite the cache.");
    }

    await writeFile(outputPath, `${JSON.stringify(reviews, null, 4)}\n`, "utf-8");
    console.log(`Saved ${reviews.length} reviews to ${outputPath}`);
} catch (error) {
    console.error("Failed to refresh Google reviews cache:", error.message);
    process.exit(1);
}
