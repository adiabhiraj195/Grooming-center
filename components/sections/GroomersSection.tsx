"use client";

import React from "react";
import Image from "next/image";
import { useI18n } from "@/lib/i18n";
import { GROOMERS_DATA, GroomerItem } from "@/data/groomers";
import { Sparkles, Award, Heart, Coffee } from "lucide-react";

// Curated avatar images for the 3 master groomers
const GROOMER_PHOTOS: Record<string, string> = {
  "groomer-sreekumar":
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80",
  "groomer-priyanka":
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80",
  "groomer-rohit":
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
};

export const GroomersSection: React.FC = () => {
  const { lang } = useI18n();

  return (
    <section
      id="groomers"
      className="py-16 md:py-24 bg-white relative overflow-hidden"
      aria-label="Meet Our Master Groomers"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-peacock-soft border-2 border-ink shadow-sticker-sm text-peacock font-extrabold text-xs uppercase mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>{lang === "hi" ? "हमारे विशेषज्ञ" : "The Fear-Free Stylists"}</span>
          </div>

          <h2 className="type-h2 text-ink mb-4">
            {lang === "hi" ? (
              <>
                मिलिए हमारे <span className="text-peacock">प्यारे पेट ग्रूमर्स</span> से!
              </>
            ) : (
              <>
                In the Safest, Most <span className="text-peacock">Gentle Hands</span>
              </>
            )}
          </h2>

          <p className="type-body text-ink-soft">
            {lang === "hi"
              ? "हमारे ग्रूमर्स सिर्फ स्टाइलिस्ट नहीं, जानवरों के सच्चे दोस्त हैं। सर्टिफाइड, धैर्यवान और असीम प्यार से भरपूर।"
              : "Our stylists are internationally certified fear-free handlers and dedicated pet parents who treat every four-legged visitor like their own child."}
          </p>
        </div>

        {/* 3 GROOMERS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {GROOMERS_DATA.map((groomer: GroomerItem) => {
            const photoUrl = GROOMER_PHOTOS[groomer.id];
            return (
              <div
                key={groomer.id}
                className="sticker-card bg-cream flex flex-col justify-between overflow-hidden group hover:-translate-y-1.5 transition-all duration-300"
              >
                {/* TOP IMAGE & BADGE */}
                <div className="relative aspect-square w-full bg-gray-100 overflow-hidden border-b-2 border-ink">
                  <Image
                    src={photoUrl}
                    alt={groomer.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />

                  {/* CERTIFICATION BADGE */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm border-2 border-ink shadow-sticker-sm px-3 py-1 rounded-full text-[11px] font-extrabold text-peacock flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 fill-peacock text-peacock" />
                    <span>{groomer.badge}</span>
                  </div>

                  {/* EXPERIENCE BADGE */}
                  <div className="absolute bottom-3 right-3 bg-marigold border-2 border-ink shadow-sticker-sm px-3 py-1 rounded-full text-xs font-extrabold text-ink">
                    {groomer.experienceYears}+ Years Exp
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="font-display font-extrabold text-2xl text-ink">
                      {groomer.name}
                    </h3>
                    <p className="text-xs font-extrabold text-peacock mb-4">
                      {lang === "hi" ? groomer.roleHi : groomer.role}
                    </p>

                    {/* SPECIALITY */}
                    <div className="mb-4">
                      <span className="text-[11px] font-extrabold uppercase text-ink-soft block mb-1">
                        Speciality:
                      </span>
                      <p className="text-xs text-ink font-semibold leading-relaxed">
                        {lang === "hi" ? groomer.specialityHi : groomer.speciality}
                      </p>
                    </div>

                    {/* FUN FACT */}
                    <div className="bg-white p-3.5 rounded-xl border border-ink/20 mb-4">
                      <span className="text-[11px] font-extrabold text-marigold-deep flex items-center gap-1 mb-1">
                        <Coffee className="w-3.5 h-3.5" />
                        <span>Fun Quirks:</span>
                      </span>
                      <p className="text-xs text-ink-soft leading-relaxed">
                        {lang === "hi" ? groomer.funFactHi : groomer.funFact}
                      </p>
                    </div>
                  </div>

                  {/* PET LOVE */}
                  <div className="pt-3 border-t border-ink/10 flex items-center gap-2 text-xs font-bold text-ink">
                    <Heart className="w-4 h-4 text-chilli fill-chilli shrink-0" />
                    <span className="text-[11px]">{groomer.petLove}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

