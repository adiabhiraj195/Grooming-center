import { REVIEWS_DATA } from "@/data/reviews";
import { SHOP_DATA } from "@/data/shop";

export interface GoogleReviewItem {
  authorName: string;
  authorUri?: string;
  authorPhotoUri?: string;
  rating: number;
  text: string;
  relativeTime: string;
  publishTime?: string;
}

export interface GoogleReviewsData {
  isGoogle: boolean;
  rating: number;
  totalCount: number;
  mapsUri?: string;
  reviews: GoogleReviewItem[];
}

interface PlacesNewReview {
  authorAttribution?: {
    displayName?: string;
    uri?: string;
    photoUri?: string;
  };
  rating?: number;
  text?: {
    text?: string;
    languageCode?: string;
  };
  originalText?: {
    text?: string;
    languageCode?: string;
  };
  relativePublishTimeDescription?: string;
  publishTime?: string;
}

interface PlacesNewResponse {
  id?: string;
  displayName?: {
    text?: string;
  };
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviews?: PlacesNewReview[];
}

/**
 * Returns fallback reviews from curated dataset when Google Places API is unavailable
 */
export function getFallbackReviews(): GoogleReviewsData {
  return {
    isGoogle: false,
    rating: SHOP_DATA.stats.rating || 5.0,
    totalCount: SHOP_DATA.stats.reviewsCount || 42,
    mapsUri: SHOP_DATA.directionsUrl || "https://maps.google.com",
    reviews: REVIEWS_DATA.slice(0, 5).map((item) => ({
      authorName: item.authorName,
      authorUri: undefined,
      authorPhotoUri: undefined,
      rating: item.rating,
      text: item.text,
      relativeTime: item.date,
      publishTime: undefined,
    })),
  };
}

/**
 * Server-only fetcher for Google Places API (New) reviews
 * Revalidates every 6 hours (21600 seconds)
 */
export async function getGoogleReviews(): Promise<GoogleReviewsData> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY?.trim();
  const placeId = (process.env.GOOGLE_PLACE_ID || process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID)?.trim();

  // If credentials are not provided, return graceful fallback
  if (!apiKey || !placeId) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(
        "[GoogleReviews] GOOGLE_PLACES_API_KEY or GOOGLE_PLACE_ID is not configured. Falling back to curated pet parent reviews."
      );
    }
    return getFallbackReviews();
  }

  try {
    const url = `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "id,displayName,rating,userRatingCount,googleMapsUri,reviews",
      },
      next: {
        revalidate: 21600, // 6 hours
      },
    });

    if (!response.ok) {
      console.warn(
        `[GoogleReviews] Google Places API responded with status ${response.status} ${response.statusText}. Using fallback reviews.`
      );
      return getFallbackReviews();
    }

    const data: PlacesNewResponse = await response.json();

    const normalizedReviews: GoogleReviewItem[] = (data.reviews || [])
      .slice(0, 5)
      .map((rev) => ({
        authorName: rev.authorAttribution?.displayName || "Google Reviewer",
        authorUri: rev.authorAttribution?.uri,
        authorPhotoUri: rev.authorAttribution?.photoUri,
        rating: typeof rev.rating === "number" ? Math.max(1, Math.min(5, rev.rating)) : 5,
        text: rev.text?.text || rev.originalText?.text || "",
        relativeTime: rev.relativePublishTimeDescription || "Recently",
        publishTime: rev.publishTime,
      }));

    if (normalizedReviews.length === 0) {
      console.warn("[GoogleReviews] Google Places API returned 0 reviews. Using fallback reviews.");
      return getFallbackReviews();
    }

    return {
      isGoogle: true,
      rating: typeof data.rating === "number" ? data.rating : (SHOP_DATA.stats.rating || 4.9),
      totalCount: typeof data.userRatingCount === "number" ? data.userRatingCount : normalizedReviews.length,
      mapsUri: data.googleMapsUri || SHOP_DATA.directionsUrl || "https://maps.google.com",
      reviews: normalizedReviews,
    };
  } catch (error) {
    console.warn("[GoogleReviews] Failed to fetch Google Places reviews:", error);
    return getFallbackReviews();
  }
}

