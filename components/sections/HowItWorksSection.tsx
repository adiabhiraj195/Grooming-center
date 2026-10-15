"use client";

import React from "react";
import { useI18n } from "@/lib/i18n";
import { MessageCircle, Heart, Sparkles, Home, ArrowRight } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { BrunoMascot } from "@/components/illustrations/BrunoMascot";
import { SHOP_DATA } from "@/data/shop";

export const HowItWorksSection: React.FC = () => {
  const { lang } = useI18n();

  const steps = [
    {
      number: "01",
      titleEn: "Book in 30 Seconds",
      titleHi: "30 सेकंड में व्हाट्सएप बुकिंग",
      descEn: "Drop a WhatsApp message with your pet's name, breed, and desired service. Choose a convenient morning or evening slot.",
      descHi: "व्हाट्सएप पर पेट का नाम, ब्रीड और सेवा बताएं। अपनी पसंद का समय चुनें।",
      icon: MessageCircle,
      badge: "Fast & Friendly",
      color: "bg-marigold text-ink",
    },
    {
      number: "02",
      titleEn: "Sniff, Cuddle & Settle",
      titleHi: "दोस्ती, प्यार और पहचान",
      descEn: "We never rush pets into a tub. We spend 10 minutes greeting, offering healthy treats, and letting them explore at their own pace.",
      descHi: "हम सीधे पानी में नहीं डालते! पहले 10 मिनट लाड़-प्यार, ट्रीट्स और नए माहौल से पहचान कराते हैं।",
      icon: Heart,
      badge: "Fear-Free Promise",
      color: "bg-blush text-chilli",
    },
    {
      number: "03",
      titleEn: "Gentle Luxury Groom",
      titleHi: "सौम्य हर्बल स्पा व स्टाइलिंग",
      descEn: "Herbal shampoo wash, warm low-speed dryer with ear hoodies to dampen sound, gentle scissor styling, and paw balm massage.",
      descHi: "प्राकृतिक शैंपू से स्नान, शांत व कम आवाज वाला ब्लो-ड्राई और मनपसंद सुंदर हेयरकट।",
      icon: Sparkles,
      badge: "100% Cage-Free",
      color: "bg-peacock-soft text-peacock",
    },
    {
      number: "04",
      titleEn: "Prance Home Fresh!",
      titleHi: "खुशबूदार व खुशहाल घर वापसी",
      descEn: "Complimentary festive bow-tie, a grooming report card on their coat and skin health, or quick consultation for any medical needs.",
      descHi: "गले में प्यारा बो-टाई, कोट-हेल्थ रिपोर्ट कार्ड और जरूरत पड़ने पर क्लिनिकल परामर्श के साथ विदा।",
      icon: Home,
      badge: "Quick Walk-ins Welcome",
      color: "bg-emerald-100 text-emerald-800",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-16 md:py-24 bg-cream relative overflow-hidden"
      aria-label={`How Grooming Works at ${SHOP_DATA.name}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-peacock-soft border-2 border-ink shadow-sticker-sm text-peacock font-extrabold text-xs uppercase mb-4">
            <span>🐾</span>
            <span>{lang === "hi" ? "आसान प्रक्रिया" : "The Fear-Free Journey"}</span>
          </div>

          <h2 className="type-h2 text-ink mb-4">
            {lang === "hi" ? (
              <>
                बिना किसी डर या तनाव के, <span className="text-peacock">4 आसान चरण!</span>
              </>
            ) : (
              <>
                From Scared to Spoiled in{" "}
                <span className="text-peacock">4 Gentle Steps</span>
              </>
            )}
          </h2>

          <p className="type-body text-ink-soft">
            {lang === "hi"
              ? "हम जानते हैं कि ग्रूमिंग पेट्स के लिए तनावपूर्ण हो सकती है। इसलिए हम हर कदम उनके कम्फर्ट के हिसाब से तय करते हैं।"
              : "We take the anxiety out of pet grooming. No harsh restraints, no loud cold cages, and zero rush."}
          </p>
        </div>

        {/* 4 STEPS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="sticker-card bg-white p-6 flex flex-col justify-between relative group hover:-translate-y-1.5 transition-all duration-300"
              >
                {/* STEP NUMBER PILL */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display font-extrabold text-3xl text-ink/20 group-hover:text-peacock transition-colors">
                    {step.number}
                  </span>
                  <span className="text-[11px] font-extrabold px-2.5 py-0.5 rounded-full border border-ink/20 bg-cream text-ink">
                    {step.badge}
                  </span>
                </div>

                {/* ICON */}
                <div
                  className={`w-12 h-12 rounded-2xl border-2 border-ink flex items-center justify-center mb-4 shadow-sticker-sm ${step.color}`}
                >
                  <Icon className="w-6 h-6" />
                </div>

                {/* TEXT CONTENT */}
                <div className="flex-1">
                  <h3 className="font-display font-extrabold text-lg text-ink mb-2">
                    {lang === "hi" ? step.titleHi : step.titleEn}
                  </h3>
                  <p className="text-xs text-ink-soft leading-relaxed">
                    {lang === "hi" ? step.descHi : step.descEn}
                  </p>
                </div>

                {/* BOTTOM ACCENT */}
                <div className="pt-4 mt-4 border-t border-ink/10 flex items-center text-xs font-extrabold text-peacock gap-1">
                  <span>Step {idx + 1} of 4</span>
                  {idx < 3 && <ArrowRight className="w-3.5 h-3.5 ml-auto text-ink/40 hidden lg:inline" />}
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM HELPFUL BANNER */}
        <div className="mt-12 sticker-card bg-marigold/20 border-2 border-ink p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto shadow-sticker">
          <div className="flex items-center gap-4">
            <BrunoMascot variant="happy" className="w-16 h-16 shrink-0" wagTail={false} />
            <div>
              <h4 className="font-display font-extrabold text-lg text-ink">
                {lang === "hi" ? "क्या आपका पेट पहली बार ग्रूमिंग करा रहा है?" : "First time visiting a grooming salon?"}
              </h4>
              <p className="text-xs text-ink-soft">
                {lang === "hi"
                  ? "आप हमारे फ्री 'Meet & Sniff' सेशन में आ सकते हैं जहां हम बिना नहाए सिर्फ प्यार व ट्रीट्स देते हैं।"
                  : "Book a complimentary 15-minute Meet & Sniff session to let them sniff around before their first actual wash."}
              </p>
            </div>
          </div>

          <a
            href={getWhatsAppLink("Hi! I would like to book a first-time Meet & Sniff session for my pet.")}
            target="_blank"
            rel="noopener noreferrer"
            className="sticker-btn bg-white hover:bg-cream text-ink text-xs md:text-sm font-extrabold px-5 py-2.5 shadow-sticker-sm shrink-0 whitespace-nowrap"
          >
            Ask on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

