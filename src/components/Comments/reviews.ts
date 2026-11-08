import cachedReviews from "@/data/reviews.json";

interface Review {
    author_name: string;
    author_url: string;
    language: string;
    original_language: string;
    profile_photo_url: string;
    rating: number;
    relative_time_description: string;
    text: string;
    time: number;
    translated: boolean;
}

// src/data/reviews.json se actualiza a mano con scripts/fetch-google-reviews.mjs
// (necesita GOOGLE_PLACES_API_KEY y GOOGLE_PLACE_ID). La web nunca llama a la API
// de Google al cargar una página; las fechas se muestran en absoluto («marzo de 2026»).
const MIN_RATING = 3.5;

const getReviews = async (): Promise<Review[]> => {
    return (cachedReviews as Review[])
        .filter((review) => review.rating >= MIN_RATING)
        .sort((a, b) => b.time - a.time);
};

export type { Review };
export { getReviews };
