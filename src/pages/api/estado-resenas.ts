import type { APIRoute } from "astro";
import { timingSafeEqual } from "node:crypto";
import { DIAGNOSTICO_TOKEN } from "astro:env/server";
import { fetchPlace, placesConfig } from "@/lib/googleReviews";

export const prerender = false;

/** Compara el token sin revelar por el tiempo de respuesta cuántos caracteres coinciden. */
const sameToken = (given: string, expected: string) => {
  const a = Buffer.from(given);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
};

/**
 * Diagnóstico de la conexión con Google: dice si la clave está configurada y qué responde
 * Places API, sin mostrar nunca la clave.
 *
 * Cada llamada consulta a Places, que se factura, así que solo responde con el token de la
 * variable DIAGNOSTICO_TOKEN: /api/estado-resenas?token=… o la cabecera «Authorization: Bearer …».
 * Sin la variable, o con un token que no coincide, responde 404 como si no existiera.
 */
export const GET: APIRoute = async ({ request, url }) => {
  const expected = DIAGNOSTICO_TOKEN?.trim();
  const given = url.searchParams.get("token") ?? request.headers.get("authorization")?.replace(/^Bearer\s+/i, "") ?? "";
  if (!expected || !sameToken(given.trim(), expected)) {
    return new Response("Not found", { status: 404, headers: { "Cache-Control": "no-store", "X-Robots-Tag": "noindex" } });
  }

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
      // Lleva un secreto en la URL: que no lo guarde ninguna caché.
      "Cache-Control": "no-store",
      "X-Robots-Tag": "noindex",
    },
  });
};
