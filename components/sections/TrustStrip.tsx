"use client";

import React from "react";
import { useI18n } from "@/lib/i18n";
import {
  Sparkles,
  ShieldCheck,
  Video,
  Car,
  HeartHandshake,
} from "lucide-react";

export const TrustStrip: React.FC = () => {
  const { lang } = useI18n();

  const trustItems = [
    {
      id: "hygiene",
      titleEn: "Medical-Grade Hygiene",
      titleHi: "मेडिकल-ग्रेड स्वच्छता",
      descEn: "UV-sterilised scissors & fresh warm towel for every pet",
      descHi: "हर पेट के लिए सैनिटाइज्ड टूल्स व नया गर्म तौलिया",
      icon: ShieldCheck,
      color: "bg-peacock-soft text-peacock",
      border: "border-peacock",
    },
    {
      id: "natural",
      titleEn: "100% Natural & Tearless",
      titleHi: "100% प्राकृतिक व सौम्य",
      descEn: "Herbal aloe, neem & coconut formulas (Zero parabens)",
      descHi: "हर्बल एलोवेरा, नीम व नारियल शैम्पू (केमिकल-मुक्त)",
      icon: Sparkles,
      color: "bg-marigold/20 text-marigold-deep",
      border: "border-marigold-deep",
    },
    {
      id: "fear-free",
      titleEn: "Fear-Free Certified",
      titleHi: "फियर-फ्री सर्टिफाइड",
      descEn: "Trained in canine body language & calming wraps",
      descHi: "पेट के व्यवहार व शांति तकनीकों में प्रशिक्षित ग्रूमर्स",
      icon: HeartHandshake,
      color: "bg-blush text-chilli",
      border: "border-chilli",
    },
    {
      id: "cctv",
      titleEn: "Live CCTV for Parents",
      titleHi: "लाइव सीसीटीवी व्यू",
      descEn: "Watch your furry darling relax from our cozy lounge",
      descHi: "हमारे लाउंज में बैठकर लाइव स्क्रीन पर ग्रूमिंग देखें",
      icon: Video,
      color: "bg-sky-bubble/60 text-ink",
      border: "border-ink",
    },
    {
      id: "cab",
      titleEn: "AC Pet-Cab Pick & Drop",
      titleHi: "एसी पेट-कैब पिक व ड्रॉप",
      descEn: "Free within 3km in Indiranagar & Domlur. Safe seat-belts",
      descHi: "3 किमी में फ्री पिकअप। सुरक्षा हार्नेस व वातानुकूलित कार",
      icon: Car,
      color: "bg-emerald-50 text-emerald-800",
      border: "border-emerald-700",
    },
  ];

  return (
    <section
      aria-label="Salon Safety and Trust Highlights"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4">
        {trustItems.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="sticker-card bg-white p-4 flex flex-col justify-between hover:-translate-y-1 transition-all duration-200 group"
            >
              <div className="flex items-center gap-3 mb-2">
                <div
                  className={`w-9 h-9 rounded-full border-2 border-ink flex items-center justify-center shrink-0 shadow-sticker-sm ${item.color}`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display font-extrabold text-sm text-ink leading-tight">
                  {lang === "hi" ? item.titleHi : item.titleEn}
                </h3>
              </div>
              <p className="text-xs text-ink-soft leading-relaxed">
                {lang === "hi" ? item.descHi : item.descEn}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

