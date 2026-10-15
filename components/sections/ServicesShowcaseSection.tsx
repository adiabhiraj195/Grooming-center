"use client";

import React from "react";
import {
  ScissorsIcon,
  CombIcon,
  BlowDryerIcon,
  BathtubIcon,
  TowelIcon,
  NailClipperIcon,
  ShampooBottleIcon,
} from "@/components/illustrations/GroomingIcons";
import { SparkleBurst } from "@/components/illustrations/Dividers";

export const ServicesShowcaseSection: React.FC = () => {
  return (
    <section id="services" className="bg-peacock-soft py-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border-2 border-ink text-peacock font-bold text-xs uppercase tracking-wider shadow-sticker-sm mb-3">
          <SparkleBurst size={16} />
          <span>Grooming Tool Suite</span>
        </div>
        <h2 className="type-h2 text-ink mb-4">Crafted With Care & Precision</h2>
        <p className="type-body text-ink-soft max-w-xl mx-auto mb-10">
          Every tool in our Indiranagar salon is medical-grade UV-sterilised before every grooming session.
        </p>

        {/* ICONS GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 max-w-5xl mx-auto">
          {[
            { icon: <BathtubIcon size={36} />, label: "Hydro-Bath", color: "bg-sky-bubble" },
            { icon: <BlowDryerIcon size={36} />, label: "Warm Dry", color: "bg-blush" },
            { icon: <ScissorsIcon size={36} />, label: "Scissor Cut", color: "bg-marigold" },
            { icon: <CombIcon size={36} />, label: "De-Shedding", color: "bg-peacock-soft" },
            { icon: <NailClipperIcon size={36} />, label: "Pawdi-Cure", color: "bg-cream" },
            { icon: <TowelIcon size={36} />, label: "Warm Wrap", color: "bg-blush" },
            { icon: <ShampooBottleIcon size={36} />, label: "Herbal Care", color: "bg-peacock-soft" },
          ].map((tool, idx) => (
            <div
              key={idx}
              className="sticker-card bg-white p-4 flex flex-col items-center justify-center gap-2 hover:-translate-y-1 transition-transform"
            >
              <div className={`w-14 h-14 rounded-2xl ${tool.color} border-2 border-ink flex items-center justify-center shadow-sticker-sm`}>
                {tool.icon}
              </div>
              <span className="font-extrabold text-xs text-ink">{tool.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

