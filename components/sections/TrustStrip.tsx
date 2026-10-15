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
      id: "clinic",
      titleEn: "Medical Clinic & Hospital",
      titleHi: "मेडिकल क्लिनिक व हॉस्पिटल",
      descEn: "Full pet treatments, health checks & veterinary care on-site",
      descHi: "पशु चिकित्सा, स्वास्थ्य जांच, दवाइयां व सम्पूर्ण इलाज",
      icon: ShieldCheck,
      color: "bg-peacock-soft text-peacock",
      border: "border-peacock",
    },
    {
      id: "grooming",
      titleEn: "Dedicated Grooming Clinic",
      titleHi: "समर्पित ग्रूमिंग क्लिनिक",
      descEn: "Clean, well-maintained pets with tearless gentle care",
      descHi: "पेट्स को साफ, सुंदर और स्वस्थ रखने के लिए पेशेवर ग्रूमिंग",
      icon: Sparkles,
      color: "bg-marigold/20 text-marigold-deep",
      border: "border-marigold-deep",
    },
    {
      id: "supplies",
      titleEn: "Pet Supplies & Accessories",
      titleHi: "पेट सप्लाइज व एक्सेसरीज",
      descEn: "Prominent local dealer for pet food, toys, gear & essentials",
      descHi: "पेट फूड्स, एक्सेसरीज और दैनिक उपयोग के सामान के प्रमुख डीलर",
      icon: Video,
      color: "bg-sky-bubble/60 text-ink",
      border: "border-ink",
    },
    {
      id: "ratings",
      titleEn: "5.0★ Affordable Care",
      titleHi: "5.0★ किफायती व उच्च गुणवत्ता",
      descEn: "Perfect 5.0 rating on Google & Justdial from 40+ reviews",
      descHi: "40+ ग्राहकों द्वारा गूगल व जस्टडायल पर 5.0-स्टार रेटिंग",
      icon: HeartHandshake,
      color: "bg-blush text-chilli",
      border: "border-chilli",
    },
    {
      id: "walkins",
      titleEn: "Walk-Ins & Free Parking",
      titleHi: "वॉक-इन व मुफ्त पार्किंग",
      descEn: "Quick visits welcome, on-site parking & NFC mobile payments",
      descHi: "त्वरित विजिट, ऑन-साइट व स्ट्रीट पार्किंग और एनएफसी पेमेंट्स",
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

