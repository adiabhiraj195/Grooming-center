import React from "react";
import { REVIEWS_DATA } from "@/data/reviews";
import { Star, Heart } from "lucide-react";
import { SinglePawPrint } from "@/components/illustrations/PawTrail";

export const WallOfLoveMarquee: React.FC = () => {
  // Split curated reviews into two rows
  const half = Math.ceil(REVIEWS_DATA.length / 2);
  const row1 = REVIEWS_DATA.slice(0, half);
  const row2 = REVIEWS_DATA.slice(half);

  // Duplicate for seamless infinite marquee loop
  const marqueeRow1 = [...row1, ...row1];
  const marqueeRow2 = [...row2, ...row2];

  return (
    <div className="mt-16 pt-12 border-t-2 border-dashed border-ink/20 overflow-hidden w-full">
      {/* SECTION HEADER */}
      <div className="text-center mb-8 px-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blush border-2 border-ink text-chilli font-bold text-xs uppercase tracking-wider shadow-sticker-sm mb-2">
          <Heart className="w-3.5 h-3.5 fill-chilli" />
          <span>Community Wall of Love</span>
        </div>
        <h3 className="type-h3 text-ink">More Love From Our Pet Parents</h3>
        <p className="type-small text-ink-soft max-w-lg mx-auto mt-1">
          Real stories from dogs and cats pampered at our 100% cage-free Indiranagar salon.
        </p>
      </div>

      {/* MARQUEE ROW 1: SCROLLS LEFT */}
      <div className="relative w-full overflow-hidden py-3">
        <div className="marquee-row-left flex gap-5 items-stretch">
          {marqueeRow1.map((item, idx) => (
            <div
              key={`row1-${item.id}-${idx}`}
              className="w-80 md:w-96 shrink-0 sticker-card p-5 bg-white flex flex-col justify-between hover:scale-[1.02] transition-transform select-none cursor-default"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2.5">
                    <div
                      className="w-10 h-10 rounded-full border-2 border-ink flex items-center justify-center text-white font-extrabold text-xs shadow-sticker-sm"
                      style={{ backgroundColor: item.avatarColor }}
                    >
                      {item.authorName.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-sm text-ink leading-tight">
                        {item.authorName}
                      </h4>
                      <p className="text-[11px] text-ink-soft">{item.authorLocation}</p>
                    </div>
                  </div>

                  <div className="flex text-marigold">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-marigold stroke-ink stroke-[1.2]" />
                    ))}
                  </div>
                </div>

                <div className="my-2.5 px-2.5 py-1 rounded-lg bg-cream border border-ink/20 inline-flex items-center gap-1 text-[11px] font-bold text-peacock">
                  <SinglePawPrint size={12} color="#0F766E" />
                  <span>
                    {item.petName} ({item.petBreed})
                  </span>
                </div>

                <p className="text-xs text-ink/90 italic leading-relaxed font-hand text-base text-ink line-clamp-3">
                  &ldquo;{item.text}&rdquo;
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-ink/10 flex items-center justify-between text-[10px] font-bold text-ink-soft">
                <span className="text-peacock">{item.service}</span>
                <span>{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MARQUEE ROW 2: SCROLLS RIGHT */}
      <div className="relative w-full overflow-hidden py-3 mt-1">
        <div className="marquee-row-right flex gap-5 items-stretch">
          {marqueeRow2.map((item, idx) => (
            <div
              key={`row2-${item.id}-${idx}`}
              className="w-80 md:w-96 shrink-0 sticker-card p-5 bg-white flex flex-col justify-between hover:scale-[1.02] transition-transform select-none cursor-default"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2.5">
                    <div
                      className="w-10 h-10 rounded-full border-2 border-ink flex items-center justify-center text-white font-extrabold text-xs shadow-sticker-sm"
                      style={{ backgroundColor: item.avatarColor }}
                    >
                      {item.authorName.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-sm text-ink leading-tight">
                        {item.authorName}
                      </h4>
                      <p className="text-[11px] text-ink-soft">{item.authorLocation}</p>
                    </div>
                  </div>

                  <div className="flex text-marigold">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-marigold stroke-ink stroke-[1.2]" />
                    ))}
                  </div>
                </div>

                <div className="my-2.5 px-2.5 py-1 rounded-lg bg-cream border border-ink/20 inline-flex items-center gap-1 text-[11px] font-bold text-peacock">
                  <SinglePawPrint size={12} color="#0F766E" />
                  <span>
                    {item.petName} ({item.petBreed})
                  </span>
                </div>

                <p className="text-xs text-ink/90 italic leading-relaxed font-hand text-base text-ink line-clamp-3">
                  &ldquo;{item.text}&rdquo;
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-ink/10 flex items-center justify-between text-[10px] font-bold text-ink-soft">
                <span className="text-peacock">{item.service}</span>
                <span>{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

