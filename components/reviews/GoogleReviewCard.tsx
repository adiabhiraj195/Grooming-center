"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, ExternalLink } from "lucide-react";
import type { GoogleReviewItem } from "@/lib/googleReviews";

export interface GoogleReviewCardProps {
  review: GoogleReviewItem;
  index: number;
}

export const GoogleReviewCard: React.FC<GoogleReviewCardProps> = ({ review, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Avatar initials fallback
  const initials = review.authorName
    .split(" ")
    .map((n) => n[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase() || "🐾";

  const avatarColors = ["#0F766E", "#FFB524", "#FF6B4A", "#1F2A44", "#E8940C"];
  const bgColor = avatarColors[index % avatarColors.length];

  const hasLongText = review.text.length > 200;

  return (
    <article
      className="sticker-card p-5 md:p-6 bg-white flex flex-col justify-between transition-all duration-300 hover:-rotate-1 hover:shadow-sticker-lg speech-bubble group"
      aria-label={`Review by ${review.authorName}`}
    >
      <div>
        {/* TOP ROW: AUTHOR & STARS */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            {/* AVATAR WITH NEXT/IMAGE OR INITIALS FALLBACK */}
            <div
              className="relative w-12 h-12 rounded-full border-2 border-ink overflow-hidden shrink-0 flex items-center justify-center font-extrabold text-sm text-white shadow-sticker-sm"
              style={{ backgroundColor: bgColor }}
            >
              {review.authorPhotoUri && !imageError ? (
                <Image
                  src={review.authorPhotoUri}
                  alt={review.authorName}
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                  onError={() => setImageError(true)}
                  unoptimized={false}
                />
              ) : (
                <span>{initials}</span>
              )}
            </div>

            {/* AUTHOR DETAILS */}
            <div className="flex flex-col">
              {review.authorUri ? (
                <a
                  href={review.authorUri}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display font-bold text-base text-ink hover:text-peacock inline-flex items-center gap-1 group/link"
                >
                  <span className="line-clamp-1">{review.authorName}</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover/link:opacity-100 transition-opacity text-peacock shrink-0" />
                </a>
              ) : (
                <span className="font-display font-bold text-base text-ink line-clamp-1">
                  {review.authorName}
                </span>
              )}
              <span className="text-xs text-ink-soft font-medium">
                {review.relativeTime}
              </span>
            </div>
          </div>

          {/* STAR ROW */}
          <div className="flex items-center gap-0.5 text-marigold shrink-0" aria-label={`${review.rating} out of 5 stars`}>
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < review.rating
                    ? "fill-marigold stroke-ink stroke-[1.5]"
                    : "fill-gray-200 stroke-ink/30 stroke-[1.5]"
                }`}
              />
            ))}
          </div>
        </div>

        {/* REVIEW TEXT - UNEDITED AND PARAPHRASE-FREE */}
        <div className="relative mt-2">
          <p
            className={`text-sm text-ink leading-relaxed font-normal ${
              !isExpanded ? "line-clamp-4" : ""
            }`}
          >
            &ldquo;{review.text}&rdquo;
          </p>

          {hasLongText && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-2 text-xs font-bold text-peacock hover:text-marigold-deep transition-colors focus:outline-none underline underline-offset-2 cursor-pointer"
            >
              {isExpanded ? "Show less" : "Read full review"}
            </button>
          )}
        </div>
      </div>

      {/* FOOTER BADGE: GOOGLE ATTRIBUTION */}
      <div className="mt-4 pt-3 border-t border-ink/10 flex items-center justify-between text-[11px] font-bold text-ink-soft">
        <span className="inline-flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          Verified Visit
        </span>
        <span className="opacity-75">Google Review</span>
      </div>
    </article>
  );
};

