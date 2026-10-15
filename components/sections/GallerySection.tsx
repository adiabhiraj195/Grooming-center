"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useI18n } from "@/lib/i18n";
import { Scissors, Sparkles, CheckCircle2 } from "lucide-react";

interface TransformationItem {
  id: string;
  petName: string;
  breed: string;
  service: string;
  serviceHi: string;
  quote: string;
  parentName: string;
  beforeImg: string;
  afterImg: string;
}

const TRANSFORMATIONS: TransformationItem[] = [
  {
    id: "trans-bruno",
    petName: "Bruno",
    breed: "Shih Tzu (3 yrs)",
    service: "Full Royal Scissor & Blueberry Facial",
    serviceHi: "रॉयल सिज़र कट व ब्लूबेरी फेशियल",
    quote: "He entered looking like an adorable mop and bounced out like a runway superstar! 🐶✨",
    parentName: "Sneha & Rohan, Radha Swami Colony, Rewari",
    beforeImg: "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&w=600&q=80",
    afterImg: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "trans-simba",
    petName: "Simba",
    breed: "Golden Retriever (4 yrs)",
    service: "Furminator De-Shedding & Lavender Soak",
    serviceHi: "डी-शेडिंग ट्रीटमेंट व लैवेंडर सोक",
    quote: "Saved my sofa from mountains of shedding fur! He smells like a fresh bouquet.",
    parentName: "Arjun M., Sector 3, Rewari",
    beforeImg: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=600&q=80",
    afterImg: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "trans-mishti",
    petName: "Mishti",
    breed: "Persian Cat (2 yrs)",
    service: "Feline Whisperer Mat Removal & Lion Tail",
    serviceHi: "कैट मैट रिमूवल व लायन टेल कट",
    quote: "Zero hissing, zero trauma. Priyanka is genuinely a cat whisperer!",
    parentName: "Ananya Iyer, Bhakti Nagar, Rewari",
    beforeImg: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=600&q=80",
    afterImg: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "trans-sheru",
    petName: "Sheru",
    breed: "Indie Rescue (5 yrs)",
    service: "Ayurvedic Neem Wash & Tick Shield",
    serviceHi: "आयुर्वेदिक नीम वॉश व एंटी-टिक शील्ड",
    quote: "His itchy coat calmed down immediately. The warm coconut oil did wonders.",
    parentName: "Vikram K., Pilot Chowk, Rewari",
    beforeImg: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&w=600&q=80",
    afterImg: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "trans-bella",
    petName: "Bella",
    breed: "Cocker Spaniel (1.5 yrs)",
    service: "Ear Feathering & Pawdi-Cure Grinding",
    serviceHi: "ईयर फेदरिंग व पॉडी-क्योर बफरिंग",
    quote: "Her velvet ears are untangled and silky. She proudly held out her paws for the treats!",
    parentName: "Nisha & Karthik, Model Town, Rewari",
    beforeImg: "https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&w=600&q=80",
    afterImg: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "trans-milo",
    petName: "Milo",
    breed: "Beagle (3 yrs)",
    service: "Bath, Blow-Dry & Organic Paw Balm",
    serviceHi: "बाथ, ब्लो-ड्राई व पॉ-पैड कंडीशनिंग",
    quote: "Came back shiny, squeaky clean and completely relaxed. He snoozed the whole ride home.",
    parentName: "Deepak S., Brass Market, Rewari",
    beforeImg: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=600&q=80",
    afterImg: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=600&q=80",
  },
];

export const GallerySection: React.FC = () => {
  const { lang } = useI18n();
  // State to toggle between Before and After view for each card
  const [activeViews, setActiveViews] = useState<Record<string, "after" | "before">>({
    "trans-bruno": "after",
    "trans-simba": "after",
    "trans-mishti": "after",
    "trans-sheru": "after",
    "trans-bella": "after",
    "trans-milo": "after",
  });

  const toggleView = (id: string) => {
    setActiveViews((prev) => ({
      ...prev,
      [id]: prev[id] === "after" ? "before" : "after",
    }));
  };

  return (
    <section
      id="gallery"
      className="py-16 md:py-24 bg-white relative overflow-hidden"
      aria-label="Before and After Pet Transformations"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-peacock-soft border-2 border-ink shadow-sticker-sm text-peacock font-extrabold text-xs uppercase mb-4">
            <Scissors className="w-3.5 h-3.5" />
            <span>{lang === "hi" ? "स्पा का जादुई बदलाव" : "Before & After Transformations"}</span>
          </div>

          <h2 className="type-h2 text-ink mb-4">
            {lang === "hi" ? (
              <>
                प्यारे बाल, रेशमी चमक और <span className="text-peacock">खुशियों भरा ठाठ!</span>
              </>
            ) : (
              <>
                Fluffy Makeovers, Squeaky Clean Coats &{" "}
                <span className="text-peacock">Happy Tails</span>
              </>
            )}
          </h2>

          <p className="type-body text-ink-soft">
            {lang === "hi"
              ? "हमारे प्यार और पेशेंस से संवारे गए कुछ खास मेहमान। टैप करके 'Before' और 'After' देखें!"
              : "Every pet is treated with infinite patience, praise, and gentle hands. Tap the card or toggle to switch between Before & After!"}
          </p>
        </div>

        {/* 6 TRANSFORMATION CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {TRANSFORMATIONS.map((item) => {
            const isAfter = (activeViews[item.id] || "after") === "after";
            return (
              <div
                key={item.id}
                className="sticker-card bg-cream flex flex-col justify-between overflow-hidden group hover:-translate-y-1 transition-all duration-300"
              >
                {/* PHOTO CONTAINER */}
                <div className="relative aspect-4/3 w-full bg-gray-100 overflow-hidden border-b-2 border-ink">
                  <Image
                    src={isAfter ? item.afterImg : item.beforeImg}
                    alt={`${item.petName} ${isAfter ? "After Grooming" : "Before Grooming"}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* TOGGLE BADGE */}
                  <div className="absolute top-3 left-3 z-10 flex items-center gap-1 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full border-2 border-ink shadow-sticker-sm">
                    <button
                      type="button"
                      onClick={() =>
                        setActiveViews((prev) => ({ ...prev, [item.id]: "before" }))
                      }
                      className={`text-[11px] font-extrabold px-2 py-0.5 rounded-full transition-colors ${
                        !isAfter
                          ? "bg-chilli text-white"
                          : "text-ink hover:text-chilli"
                      }`}
                    >
                      Before
                    </button>
                    <span className="text-ink/30 text-xs">/</span>
                    <button
                      type="button"
                      onClick={() =>
                        setActiveViews((prev) => ({ ...prev, [item.id]: "after" }))
                      }
                      className={`text-[11px] font-extrabold px-2 py-0.5 rounded-full transition-colors ${
                        isAfter
                          ? "bg-peacock text-white"
                          : "text-ink hover:text-peacock"
                      }`}
                    >
                      After ✨
                    </button>
                  </div>

                  {/* INTERACTIVE TAP TO FLIP HINT */}
                  <button
                    type="button"
                    onClick={() => toggleView(item.id)}
                    className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-[10px] font-extrabold px-2.5 py-1 rounded-full border border-ink text-ink shadow-sm hover:bg-white"
                  >
                    Tap to toggle ↺
                  </button>
                </div>

                {/* DETAILS & PARENT QUOTE */}
                <div className="p-5 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <h3 className="font-display font-extrabold text-xl text-ink">
                        {item.petName}
                      </h3>
                      <span className="text-xs font-bold text-ink-soft bg-white px-2.5 py-0.5 rounded-full border border-ink/20">
                        {item.breed}
                      </span>
                    </div>

                    <div className="inline-flex items-center gap-1 text-xs font-extrabold text-peacock mb-3">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{lang === "hi" ? item.serviceHi : item.service}</span>
                    </div>

                    {/* CAVEAT HANDWRITTEN QUOTE */}
                    <div className="bg-blush/60 p-3 rounded-xl border border-chilli/30 relative mb-3">
                      <p className="font-hand type-hand text-ink text-base md:text-lg leading-snug">
                        &ldquo;{item.quote}&rdquo;
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-ink/10 text-xs text-ink-soft">
                    <span className="font-bold">— {item.parentName}</span>
                    <div className="flex items-center gap-1 text-peacock font-extrabold">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Verified Visit</span>
                    </div>
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
