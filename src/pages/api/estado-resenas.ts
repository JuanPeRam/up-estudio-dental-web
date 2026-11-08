import type { APIRoute } from "astro";
import { fetchPlace, placesConfig } from "@/lib/googleReviews";

export const prerender = false;

/**
 * Diagnóstico de la conexión con Google: dice si la clave está configurada y qué responde
 * Places API, sin mostrar nunca la clave. Pide solo la nota media (consulta barata) y se cachea
 * 5 minutos en la CDN.
 */
export const GET: APIRoute = async () => {
  const { apiKey, placeId, placeIdFromEnv } = placesConfig();
  const result = await fetchPlace("displayName,rating,userRatingCount");
  const body = {
    claveConfigurada: Boolean(apiKey),
    placeId,
    placeIdDesde: placeIdFromEnv ? "variable GOOGLE_PLACE_ID" : "src/constants/personal.ts",
    google: result.ok
      ? { ok: true, ficha: (result.place as { displayName?: { text?: string } }).displayName?.text, nota: result.place.rating, resenas: result.place.userRatingCount }
      : { ok: false, codigo: result.status, error: result.error },
  };
  return new Response(JSON.stringify(body, null, 2), {
    status: 200,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=300",
      "X-Robots-Tag": "noindex",
    },
  });
};
