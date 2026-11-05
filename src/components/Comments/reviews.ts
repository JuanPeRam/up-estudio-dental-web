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

// Kept in sync by .github/workflows/update-google-reviews.yml, which
// re-fetches Google Reviews once a day and commits src/data/reviews.json.
// The site never calls the Google API at request time.
const MIN_RATING = 3.5;

const getReviews = async (): Promise<Review[]> => {
    return (cachedReviews as Review[])
        .filter((review) => review.rating >= MIN_RATING)
        .sort((a, b) => b.time - a.time);
};

export type { Review };
export { getReviews };
