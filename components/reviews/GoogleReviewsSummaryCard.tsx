import React from "react";
import { Star, ExternalLink } from "lucide-react";

export const GoogleGIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="#4285F4"
      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3h3.86c2.26-2.09 3.68-5.17 3.68-9.09z"
    />
    <path
      fill="#34A853"
      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09C3.26 21.3 7.34 24 12 24z"
    />
    <path
      fill="#FBBC05"
      d="M5.27 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.98-3.09z"
    />
    <path
      fill="#EA4335"
      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.7 1.29 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z"
    />
  </svg>
);

export interface GoogleReviewsSummaryCardProps {
  rating: number;
  totalCount: number;
  mapsUri?: string;
  isGoogle: boolean;
}

export const GoogleReviewsSummaryCard: React.FC<GoogleReviewsSummaryCardProps> = ({
  rating,
  totalCount,
  mapsUri = "https://maps.google.com",
  isGoogle,
}) => {
  return (
    <div className="sticker-card bg-white p-6 md:p-8 max-w-4xl mx-auto shadow-sticker-lg mb-10 flex flex-col md:flex-row items-center justify-between gap-6">
      {/* LEFT: BIG RATING NUMBER & STARS */}
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
        <div className="flex items-baseline gap-1">
          <span className="font-display font-extrabold text-5xl md:text-6xl text-ink leading-none">
            {rating.toFixed(1)}
          </span>
          <span className="text-xl md:text-2xl font-bold text-ink-soft">/5</span>
        </div>

        <div className="flex flex-col items-center sm:items-start gap-1">
          {/* STAR ROW */}
          <div className="flex items-center gap-1 text-marigold" aria-label={`Rating ${rating} out of 5 stars`}>
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className="w-5 h-5 fill-marigold stroke-ink stroke-[1.5]"
              />
            ))}
          </div>

          <p className="text-sm font-bold text-ink-soft">
            {isGoogle
              ? `Based on ${totalCount.toLocaleString("en-IN")} Google reviews`
              : `Based on ${totalCount.toLocaleString("en-IN")} verified pet parent visits`}
          </p>

          {/* GOOGLE POLICY-COMPLIANT ATTRIBUTION */}
          {isGoogle ? (
            <div className="inline-flex items-center gap-1.5 mt-1 text-xs font-bold text-ink">
              <GoogleGIcon className="w-4 h-4 shrink-0" />
              <span>Reviews from Google</span>
            </div>
          ) : (
            <div className="inline-flex items-center gap-1.5 mt-1 text-xs font-bold text-peacock">
              <span className="w-2 h-2 rounded-full bg-peacock inline-block" />
              <span>Verified Customer Reviews</span>
            </div>
          )}
        </div>
      </div>

      {/* RIGHT: CTA BUTTON */}
      <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
        <a
          href={mapsUri}
          target="_blank"
          rel="noopener noreferrer"
          className="sticker-btn bg-white hover:bg-cream text-ink px-5 py-3 text-sm font-extrabold shadow-sticker flex items-center justify-center gap-2 w-full sm:w-auto"
        >
          {isGoogle && <GoogleGIcon className="w-4 h-4 shrink-0" />}
          <span>See all reviews on Google</span>
          <ExternalLink className="w-4 h-4 text-ink-soft" />
        </a>

        <a
          href="#write-review"
          className="sticker-btn bg-marigold hover:bg-marigold-deep text-ink px-5 py-3 text-sm font-extrabold shadow-sticker flex items-center justify-center gap-1.5 w-full sm:w-auto whitespace-nowrap"
        >
          <span>⭐</span>
          <span>Review Us</span>
        </a>
      </div>
    </div>
  );
};

