import { GOOGLE_PLACES_API_KEY } from "astro:env/server";
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
    text?: { text?: string };
    originalText?: { text?: string };
    authorAttribution?: { displayName?: string; uri?: string; photoUri?: string };
  }[];
}

const CACHE_MS = 6 * 60 * 60 * 1000;
let cache: { at: number; data: PlaceReviews } | null = null;

/** Devuelve null si no hay clave configurada o Google no responde. */
export async function getPlaceReviews(): Promise<PlaceReviews | null> {
  if (cache && Date.now() - cache.at < CACHE_MS) return cache.data;
  if (!GOOGLE_PLACES_API_KEY) return null;

  try {
    const res = await fetch(`https://places.googleapis.com/v1/places/${clinic.googlePlaceId}?languageCode=es&regionCode=ES`, {
      headers: {
        "X-Goog-Api-Key": GOOGLE_PLACES_API_KEY,
        "X-Goog-FieldMask": "rating,userRatingCount,reviews",
      },
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) {
      console.error(`Places API: ${res.status} ${await res.text()}`);
      return null;
    }
    const place = (await res.json()) as PlacesResponse;
    const data: PlaceReviews = {
      rating: place.rating,
      total: place.userRatingCount,
      reviews: (place.reviews ?? [])
        .map((r) => ({
          authorName: r.authorAttribution?.displayName ?? "Paciente",
          authorUrl: r.authorAttribution?.uri,
          photoUrl: r.authorAttribution?.photoUri,
          rating: r.rating ?? 0,
          text: (r.originalText?.text ?? r.text?.text ?? "").trim(),
          publishTime: r.publishTime ?? "",
        }))
        .filter((r) => r.text),
    };
    cache = { at: Date.now(), data };
    return data;
  } catch (error) {
    console.error("Places API:", error);
    return null;
  }
}
