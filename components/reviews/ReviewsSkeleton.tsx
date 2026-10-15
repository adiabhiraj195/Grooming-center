import React from "react";

export const ReviewsSkeleton: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-pulse" aria-hidden="true">
      {/* SUMMARY CARD SKELETON */}
      <div className="sticker-card bg-white p-6 md:p-8 max-w-4xl mx-auto shadow-sticker-lg mb-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <div className="w-20 h-14 bg-gray-200 rounded-2xl" />
          <div className="space-y-2">
            <div className="w-28 h-5 bg-gray-200 rounded-full" />
            <div className="w-48 h-4 bg-gray-200 rounded-full" />
          </div>
        </div>
        <div className="w-44 h-11 bg-gray-200 rounded-full" />
      </div>

      {/* REVIEW CARDS SKELETON GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {[1, 2, 3].map((n) => (
          <div key={n} className="sticker-card p-6 bg-white min-h-[220px] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200" />
                <div className="space-y-2 flex-1">
                  <div className="w-28 h-4 bg-gray-200 rounded-full" />
                  <div className="w-16 h-3 bg-gray-200 rounded-full" />
                </div>
                <div className="w-20 h-4 bg-gray-200 rounded-full" />
              </div>
              <div className="space-y-2">
                <div className="w-full h-3 bg-gray-200 rounded" />
                <div className="w-5/6 h-3 bg-gray-200 rounded" />
                <div className="w-4/6 h-3 bg-gray-200 rounded" />
              </div>
            </div>
            <div className="w-24 h-3 bg-gray-200 rounded-full mt-4" />
          </div>
        ))}
      </div>
    </div>
  );
};

