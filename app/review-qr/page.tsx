"use client";

import React from "react";
import Link from "next/link";
import { QrCodeSvg } from "@/components/ui/QrCodeSvg";
import { BrunoPawStar } from "@/components/illustrations/BrunoPawStar";
import { SinglePawPrint } from "@/components/illustrations/PawTrail";
import { SHOP_DATA } from "@/data/shop";
import { Star, Printer, ArrowLeft, Sparkles, Heart } from "lucide-react";

export default function ReviewQrPage() {
  const placeId = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID || "ChIJPawfectTailsBengaluru";
  const reviewUrl = `https://search.google.com/local/writereview?placeid=${placeId}`;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-cream py-8 px-4 flex flex-col items-center justify-center font-body print:bg-white print:p-0">
      {/* SCREEN-ONLY TOOLBAR */}
      <div className="w-full max-w-lg mb-6 flex items-center justify-between print:hidden">
        <Link
          href="/"
          className="sticker-btn bg-white hover:bg-cream text-ink text-sm px-4 py-2 font-bold shadow-sticker-sm flex items-center gap-1.5"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <button
          onClick={handlePrint}
          className="sticker-btn bg-marigold hover:bg-marigold-deep text-ink text-sm px-5 py-2.5 font-extrabold shadow-sticker flex items-center gap-2 cursor-pointer"
        >
          <Printer className="w-4 h-4" />
          <span>Print Counter Display</span>
        </button>
      </div>

      {/* PRINT-FRIENDLY COUNTER DISPLAY STAND CARD */}
      <main className="w-full max-w-lg bg-white border-4 border-ink rounded-[32px] p-8 md:p-10 shadow-sticker-lg text-center relative overflow-hidden print:border-2 print:shadow-none print:max-w-full print:rounded-none">
        {/* TOP ACCENT STRIP */}
        <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-marigold via-chilli to-peacock" />

        {/* LOGO & BRAND */}
        <div className="flex items-center justify-center gap-3 mb-4 mt-2">
          <div className="w-12 h-12 rounded-full bg-marigold border-2 border-ink flex items-center justify-center shadow-sticker-sm">
            <SinglePawPrint size={24} color="#1F2A44" />
          </div>
          <div className="text-left">
            <h1 className="font-display font-extrabold text-2xl text-ink leading-none">
              {SHOP_DATA.name.split(" ")[0]}
              <span className="text-peacock"> {SHOP_DATA.name.split(" ")[1]}</span>
            </h1>
            <p className="text-xs font-bold text-ink-soft uppercase tracking-wider">
              {SHOP_DATA.city}&apos;s Happiest Pet Spa
            </p>
          </div>
        </div>

        {/* EYEBROW STICKER */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-peacock-soft border-2 border-ink text-peacock font-extrabold text-xs uppercase tracking-wide mb-4">
          <Sparkles className="w-3.5 h-3.5 text-marigold fill-marigold" />
          <span>Loved Your Visit Today?</span>
        </div>

        {/* HEADLINE */}
        <h2 className="font-display font-extrabold text-3xl md:text-4xl text-ink leading-tight mb-2">
          Tell Google in 30 Seconds! 🐾
        </h2>
        <p className="text-sm text-ink-soft max-w-sm mx-auto mb-6">
          Your honest review helps other Bangalore pet parents find fear-free, cage-free styling for their fur babies.
        </p>

        {/* BRUNO HOLDING PAW STAR MASCOT */}
        <div className="flex justify-center -my-2">
          <BrunoPawStar className="w-36 h-36" />
        </div>

        {/* QR CODE BOX */}
        <div className="inline-block p-4 bg-cream rounded-3xl border-3 border-ink shadow-sticker my-4">
          <QrCodeSvg value={reviewUrl} size={210} showCenterPaw={true} />
        </div>

        {/* 3-STEP INSTRUCTIONS */}
        <div className="grid grid-cols-3 gap-2 my-6 pt-4 border-t-2 border-dashed border-ink/20 text-center">
          <div className="flex flex-col items-center">
            <span className="w-7 h-7 rounded-full bg-marigold border-2 border-ink font-extrabold text-xs flex items-center justify-center text-ink mb-1.5 shadow-sticker-sm">
              1
            </span>
            <span className="text-xs font-extrabold text-ink leading-tight">
              Open Phone Camera
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="w-7 h-7 rounded-full bg-peacock-soft border-2 border-ink font-extrabold text-xs flex items-center justify-center text-peacock mb-1.5 shadow-sticker-sm">
              2
            </span>
            <span className="text-xs font-extrabold text-ink leading-tight">
              Scan & Tap Google
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="w-7 h-7 rounded-full bg-blush border-2 border-ink font-extrabold text-xs flex items-center justify-center text-chilli mb-1.5 shadow-sticker-sm">
              3
            </span>
            <span className="text-xs font-extrabold text-ink leading-tight">
              Leave Stars & Love
            </span>
          </div>
        </div>

        {/* STAR FOOTER WITH SHOP DETAILS */}
        <div className="pt-2 text-xs font-bold text-ink-soft flex flex-col items-center gap-1">
          <div className="flex items-center gap-1 text-marigold">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-4 h-4 fill-marigold stroke-ink stroke-[1.2]" />
            ))}
          </div>
          <p className="text-ink mt-1">
            📍 {SHOP_DATA.address.line1}, {SHOP_DATA.area}, {SHOP_DATA.city}
          </p>
          <p className="text-[11px] text-ink-soft flex items-center gap-1">
            <span>Made with</span>
            <Heart className="w-3 h-3 fill-chilli text-chilli inline" />
            <span>for Bangalore&apos;s Furry Tails</span>
          </p>
        </div>
      </main>
    </div>
  );
}

