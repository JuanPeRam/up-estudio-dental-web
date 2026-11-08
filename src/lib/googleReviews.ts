import { GOOGLE_PLACE_ID, GOOGLE_PLACES_API_KEY } from "astro:env/server";
import { clinic } from "@/constants/personal";

/**
 * Reseñas de la ficha de Google, leídas de Places API (New) en el servidor.
 * Google solo devuelve hasta 5 reseñas («más relevantes»). Las condiciones de Google Maps Platform
 * no permiten guardarlas de forma permanente, así que se piden en vivo y la respuesta se cachea
 * unas horas (aquí en memoria y en la CDN de Vercel, ver GoogleReviews.astro).
 */

export interface Review {
  authorName: string;
  authorUrl?: string;
  photoUrl?: string;
  rating: number;
  text: string;
  /** Enlace a esta reseña en Google Maps */
  reviewUrl?: string;
  /** Fecha ISO de publicación */
  publishTime: string;
}

export interface PlaceReviews {
  rating?: number;
  total?: number;
  reviews: Review[];
}

interface PlacesResponse {
  rating?: number;
  userRatingCount?: number;
  reviews?: {
    rating?: number;
    publishTime?: string;
    googleMapsUri?: string;
    text?: { text?: string };
    originalText?: { text?: string };
    authorAttribution?: { displayName?: string; uri?: string; photoUri?: string };
  }[];
}

const CACHE_MS = 6 * 60 * 60 * 1000;
let cache: { at: number; data: PlaceReviews } | null = null;

/** Limpia espacios y comillas que se cuelan al pegar valores en el panel de Vercel. */
const clean = (value?: string) => value?.trim().replace(/^["']|["']$/g, "").trim() || undefined;

export const placesConfig = () => ({
  apiKey: clean(GOOGLE_PLACES_API_KEY),
  placeId: clean(GOOGLE_PLACE_ID) ?? clinic.googlePlaceId,
  placeIdFromEnv: Boolean(clean(GOOGLE_PLACE_ID)),
});

type FetchResult = { ok: true; place: PlacesResponse } | { ok: false; status: number; error: string };

/** Llamada a Places API (New). Exportada para el diagnóstico de /api/estado-resenas. */
export async function fetchPlace(fieldMask = "rating,userRatingCount,reviews"): Promise<FetchResult> {
  const { apiKey, placeId } = placesConfig();
  if (!apiKey) return { ok: false, status: 0, error: "Falta la variable de entorno GOOGLE_PLACES_API_KEY" };
  try {
    const res = await fetch(`https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}?languageCode=es&regionCode=ES`, {
      headers: { "X-Goog-Api-Key": apiKey, "X-Goog-FieldMask": fieldMask },
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) {
      const body = (await res.json().catch(() => null)) as { error?: { status?: string; message?: string } } | null;
      const error = [body?.error?.status, body?.error?.message].filter(Boolean).join(": ") || res.statusText;
      return { ok: false, status: res.status, error };
    }
    return { ok: true, place: (await res.json()) as PlacesResponse };
  } catch (error) {
    return { ok: false, status: 0, error: error instanceof Error ? error.message : String(error) };
  }
}

/** Devuelve null si no hay clave configurada o Google no responde. */
export async function getPlaceReviews(): Promise<PlaceReviews | null> {
  if (cache && Date.now() - cache.at < CACHE_MS) return cache.data;

  const result = await fetchPlace();
  if (!result.ok) {
    console.error(`Places API (${result.status}): ${result.error}`);
    return null;
  }
  const { place } = result;
  const data: PlaceReviews = {
    rating: place.rating,
    total: place.userRatingCount,
    reviews: (place.reviews ?? [])
      .map((r) => ({
        authorName: r.authorAttribution?.displayName ?? "Paciente",
        authorUrl: r.authorAttribution?.uri,
        photoUrl: r.authorAttribution?.photoUri,
        rating: r.rating ?? 0,
        reviewUrl: r.googleMapsUri,
        text: (r.originalText?.text ?? r.text?.text ?? "").trim(),
        publishTime: r.publishTime ?? "",
      }))
      .filter((r) => r.text),
  };
  cache = { at: Date.now(), data };
  return data;
}
