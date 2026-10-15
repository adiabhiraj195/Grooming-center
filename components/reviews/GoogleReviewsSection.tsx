import React from "react";
import { getGoogleReviews } from "@/lib/googleReviews";
import { GoogleReviewsSummaryCard } from "./GoogleReviewsSummaryCard";
import { GoogleReviewCard } from "./GoogleReviewCard";
import { WallOfLoveMarquee } from "./WallOfLoveMarquee";
import { BrunoMascot } from "@/components/illustrations/BrunoMascot";
import { SparkleBurst } from "@/components/illustrations/Dividers";

import { WriteReviewStepper } from "./WriteReviewStepper";

export const GoogleReviewsSection: React.FC = async () => {
  const data = await getGoogleReviews();

  return (
    <section id="reviews" className="py-16 md:py-24 bg-cream relative overflow-hidden" aria-label="Customer Reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-peacock-soft border-2 border-ink text-peacock font-extrabold text-xs uppercase tracking-wider shadow-sticker-sm mb-3">
            <SparkleBurst size={16} />
            <span>{data.isGoogle ? "Verified Google Reviews" : "Happy Pet Parents"}</span>
          </div>

          <h2 className="type-h2 text-ink mb-3">
            {data.isGoogle ? "Perfect 5.0★ Rating on Google & Justdial" : "Real Stories from Rewari's Pet Parents"}
          </h2>
          <p className="type-body text-ink-soft">
            High quality services paired with very affordable pricing. Read 40+ verified 5.0-star reviews from pet parents in Rewari.
          </p>
        </div>

        {/* SUMMARY CARD */}
        <GoogleReviewsSummaryCard
          rating={data.rating}
          totalCount={data.totalCount}
          mapsUri={data.mapsUri}
          isGoogle={data.isGoogle}
        />

        {/* LIVE REVIEW CARDS (UP TO 5) */}
        {data.reviews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {data.reviews.map((review, idx) => (
              <GoogleReviewCard key={`${review.authorName}-${idx}`} review={review} index={idx} />
            ))}
          </div>
        ) : (
          /* EMPTY STATE WITH BRUNO HEAD TILTED */
          <div className="sticker-card bg-white p-8 max-w-md mx-auto text-center flex flex-col items-center">
            <BrunoMascot variant="empty" className="w-40 h-40 mb-3" />
            <h3 className="font-display font-bold text-lg text-ink mb-1">
              No reviews fetched yet
            </h3>
            <p className="text-xs text-ink-soft mb-4">
              Be the very first pet parent to share your grooming story on Google!
            </p>
            <a
              href="#write-review"
              className="sticker-btn bg-marigold text-ink px-5 py-2 text-sm font-bold"
            >
              Write First Review 🐾
            </a>
          </div>
        )}

        {/* CURATED PET PARENT MARQUEE ("WALL OF LOVE") */}
        <WallOfLoveMarquee />

        {/* WRITE A REVIEW STEPPER FLOW */}
        <WriteReviewStepper />
      </div>
    </section>
  );
};

