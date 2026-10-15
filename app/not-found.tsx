"use client";

import React from "react";
import Link from "next/link";
import { BrunoMascot } from "@/components/illustrations/BrunoMascot";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { Home, ArrowLeft } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export default function NotFound() {
  const { lang } = useI18n();

  return (
    <div className="min-h-screen flex flex-col bg-cream text-ink">
      <Navbar hasTopBar={false} />

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-32 text-center max-w-lg mx-auto">
        {/* Bruno tilted head mascot */}
        <div className="relative mb-6">
          <BrunoMascot variant="empty" className="w-56 h-56 mx-auto drop-shadow-md" wagTail={false} />
          <div className="absolute -top-3 right-6 bg-chilli text-white text-xs font-extrabold px-3 py-1 rounded-full border-2 border-ink shadow-sticker-sm rotate-12">
            404: Paw Not Found!
          </div>
        </div>

        <h1 className="font-display font-extrabold text-3xl md:text-4xl text-ink mb-3">
          {lang === "hi" ? "अरे! यह रास्ता तो खो गया" : "Uh-oh! Bruno looks confused..."}
        </h1>

        <p className="text-ink-soft text-base mb-8 max-w-sm">
          {lang === "hi"
            ? "लगता है जिस पेज को आप ढूंढ रहे हैं, उसे कोई शरारती पपी छुपा कर ले गया है।"
            : "The page you're searching for seems to have been chased away like a tennis ball across the playground."}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="sticker-btn bg-marigold hover:bg-marigold-deep text-ink font-bold px-6 py-3 shadow-sticker flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>{lang === "hi" ? "होमपेज पर जाएं" : "Back to Home"}</span>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="sticker-btn bg-white hover:bg-peacock-soft text-ink font-bold px-5 py-3 shadow-sticker flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{lang === "hi" ? "पीछे जाएं" : "Go Back"}</span>
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}

