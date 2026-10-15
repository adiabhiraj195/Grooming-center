"use client";

import React from "react";
import { BrunoMascot } from "@/components/illustrations/BrunoMascot";
import { MishtiCat } from "@/components/illustrations/MishtiCat";
import { FloatingBubblesCluster } from "@/components/illustrations/Bubbles";
import { HandDrawnArrow } from "@/components/illustrations/Dividers";
import { useI18n } from "@/lib/i18n";
import { SHOP_DATA } from "@/data/shop";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { MessageCircle, Star, ShieldCheck, Heart, Sparkles } from "lucide-react";

export const HeroSection: React.FC = () => {
  const { t } = useI18n();

  return (
    <section className="relative px-4 sm:px-6 lg:px-8 pb-16 pt-8 max-w-7xl mx-auto flex flex-col items-center text-center">
      {/* FLOATING BUBBLE AMBIENCE */}
      <FloatingBubblesCluster count={12} />

      {/* EYEBROW STICKER BADGE */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-peacock-soft border-2 border-ink shadow-sticker-sm text-peacock font-extrabold text-xs md:text-sm mb-6 animate-bounce-subtle">
        <Sparkles className="w-4 h-4 text-marigold fill-marigold" />
        <span>{t.hero.eyebrow}</span>
      </div>

      {/* HEADLINE */}
      <h1 className="type-h1 max-w-4xl tracking-tight text-ink mb-6">
        {t.hero.titleMain}{" "}
        <span className="relative inline-block text-peacock">
          {t.hero.titleHighlight}
          {/* Highlight accent underline */}
          <span className="absolute -bottom-1 left-0 w-full h-3 bg-marigold/50 -rotate-1 -z-10 rounded-full" />
        </span>
      </h1>

      {/* SUBTITLE */}
      <p className="type-body-lg max-w-2xl text-ink-soft mb-8">
        {t.hero.subtitle}
      </p>

      {/* MASCOT PRESENTATION ROW */}
      <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 my-4 relative w-full max-w-2xl mx-auto">
        {/* Bruno Mascot */}
        <div className="flex flex-col items-center group cursor-pointer">
          <BrunoMascot variant="happy" className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 drop-shadow-md" wagTail={true} />
          <div className="mt-2 bg-white px-3.5 py-1 rounded-full border-2 border-ink shadow-sticker-sm text-xs font-extrabold whitespace-nowrap">
            Meet Bruno 🐶
          </div>
        </div>

        {/* Hand-drawn note */}
        <div className="hidden sm:flex flex-col items-center gap-1 text-peacock font-hand type-hand -rotate-6">
          <span>Warm herbal spa!</span>
          <HandDrawnArrow className="w-16 h-12 text-ink" />
        </div>

        {/* Mishti Cat */}
        <div className="flex flex-col items-center group cursor-pointer">
          <MishtiCat className="w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 drop-shadow-md" />
          <div className="mt-2 bg-white px-3.5 py-1 rounded-full border-2 border-ink shadow-sticker-sm text-xs font-extrabold whitespace-nowrap">
            Meet Mishti 🐱
          </div>
        </div>
      </div>

      {/* ACTION BUTTONS */}
      <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="sticker-btn bg-marigold hover:bg-marigold-deep text-ink text-base md:text-lg px-8 py-3.5 shadow-sticker flex items-center gap-2.5 font-extrabold"
        >
          <MessageCircle className="w-5 h-5 fill-ink" />
          <span>{t.hero.ctaPrimary}</span>
        </a>

        <a
          href="#pricing"
          className="sticker-btn bg-white hover:bg-blush text-ink text-base md:text-lg px-7 py-3.5 shadow-sticker flex items-center gap-2 font-bold"
        >
          <span>View Pricing & Plans</span>
          <span>🐾</span>
        </a>
      </div>

      {/* QUICK TRUST BAR */}
      <div className="mt-12 flex flex-wrap items-center justify-center gap-4 md:gap-8 pt-8 border-t border-ink/10 text-xs md:text-sm font-bold text-ink">
        <div className="flex items-center gap-2">
          <div className="flex text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 stroke-ink" />
            ))}
          </div>
          <span>{SHOP_DATA.stats.rating.toFixed(1)}★ on Google & Justdial ({SHOP_DATA.stats.reviewsCount}+ Reviews)</span>
        </div>
        <div className="flex items-center gap-1.5 text-peacock">
          <ShieldCheck className="w-4 h-4" />
          <span>Grooming Clinic & Animal Hospital</span>
        </div>
        <div className="flex items-center gap-1.5 text-chilli">
          <Heart className="w-4 h-4 fill-chilli" />
          <span>{SHOP_DATA.stats.petsGroomed} Happy Tails in {SHOP_DATA.city}</span>
        </div>
      </div>
    </section>
  );
};

