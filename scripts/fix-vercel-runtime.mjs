// The installed @astrojs/vercel adapter only recognizes Node 18 and 20 as
// valid Vercel runtimes; on any other Node major running the build (e.g.
// Vercel's own build containers, which may run 22+) it silently falls back
// to writing "nodejs18.x" into .vc-config.json — a runtime Vercel has since
// removed entirely, which fails the deploy with "invalid runtime".
//
// This runs after `astro build` (see the "vercel-build" script) and
// rewrites the generated runtime directly, sidestepping the adapter's
// outdated detection logic regardless of what Node version actually built it.
import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const TARGET_RUNTIME = "nodejs22.x";
const configPath = fileURLToPath(
    new URL(
        "../.vercel/output/functions/_render.func/.vc-config.json",
        import.meta.url,
    ),
);

try {
    const raw = await readFile(configPath, "utf-8");
    const config = JSON.parse(raw);

    if (config.runtime === TARGET_RUNTIME) {
        console.log(`.vc-config.json runtime already ${TARGET_RUNTIME}, nothing to patch.`);
    } else {
        const previousRuntime = config.runtime;
        config.runtime = TARGET_RUNTIME;
        await writeFile(configPath, `${JSON.stringify(config, null, "\t")}\n`, "utf-8");
        console.log(`Patched .vc-config.json runtime: ${previousRuntime} -> ${TARGET_RUNTIME}`);
    }
} catch (error) {
    console.error(`Could not patch ${configPath}:`, error.message);
    process.exit(1);
}
