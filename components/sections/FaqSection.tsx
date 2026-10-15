"use client";

import React, { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { FAQS_DATA, FAQItem } from "@/data/faqs";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { SHOP_DATA } from "@/data/shop";

export const FaqSection: React.FC = () => {
  const { lang } = useI18n();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [openFaqIds, setOpenFaqIds] = useState<string[]>([FAQS_DATA[0].id]);

  const categories = [
    { id: "all", labelEn: "All Questions", labelHi: "सभी प्रश्न" },
    { id: "services", labelEn: "Services & Medical", labelHi: "सेवाएं व मेडिकल" },
    { id: "pricing", labelEn: "Affordable Pricing", labelHi: "किफायती दरें" },
    { id: "logistics", labelEn: "Walk-ins & Timings", labelHi: "वॉक-इन व समय" },
    { id: "safety", labelEn: "Safety & Hygiene", labelHi: "सुरक्षा व स्वच्छता" },
  ];

  const filteredFaqs =
    selectedCategory === "all"
      ? FAQS_DATA
      : FAQS_DATA.filter((f) => f.category === selectedCategory);

  const toggleFaq = (id: string) => {
    if (openFaqIds.includes(id)) {
      setOpenFaqIds(openFaqIds.filter((item) => item !== id));
    } else {
      setOpenFaqIds([...openFaqIds, id]);
    }
  };

  return (
    <section
      id="faq"
      className="py-16 md:py-24 bg-cream relative overflow-hidden"
      aria-label="Frequently Asked Questions"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-peacock-soft border-2 border-ink shadow-sticker-sm text-peacock font-extrabold text-xs uppercase mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{lang === "hi" ? "पूछे जाने वाले सवाल" : "Got Questions? We Got Answers"}</span>
          </div>

          <h2 className="type-h2 text-ink mb-4">
            {lang === "hi" ? (
              <>
                पेट पेरेंट्स के मन की बात, <span className="text-peacock">साफ और सीधी</span>
              </>
            ) : (
              <>
                Everything You Need to Know Before <span className="text-peacock">Your Visit</span>
              </>
            )}
          </h2>

          <p className="type-body text-ink-soft">
            {lang === "hi"
              ? "ग्रूमिंग क्लिनिक, मेडिकल ट्रीटमेंट, वॉक-इन और फ्री पार्किंग से जुड़े आपके सभी सवालों के जवाब।"
              : "Clear answers on grooming clinic procedures, medical treatments, pet supplies, walk-ins, and free parking in Rewari."}
          </p>
        </div>

        {/* CATEGORY FILTER PILLS */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full border-2 border-ink text-xs md:text-sm font-extrabold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-marigold text-ink shadow-sticker-sm translate-y-0.5"
                  : "bg-white text-ink hover:bg-peacock-soft shadow-sticker-sm"
              }`}
            >
              {lang === "hi" ? cat.labelHi : cat.labelEn}
            </button>
          ))}
        </div>

        {/* FAQ ACCORDION LIST */}
        <div className="space-y-4">
          {filteredFaqs.map((faq: FAQItem) => {
            const isOpen = openFaqIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className="sticker-card bg-white overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-5 md:p-6 flex items-center justify-between gap-4 font-display font-bold text-base md:text-lg text-ink hover:text-peacock transition-colors cursor-pointer"
                >
                  <span>{lang === "hi" ? faq.questionHi : faq.question}</span>
                  <div
                    className={`w-8 h-8 rounded-full border-2 border-ink flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-marigold" : "bg-cream"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 text-ink" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 md:px-6 md:pb-6 text-sm text-ink-soft leading-relaxed border-t border-ink/10 pt-4 bg-cream/30">
                    <p>{lang === "hi" ? faq.answerHi : faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* STILL HAVE A QUESTION BANNER */}
        <div className="mt-12 text-center p-6 bg-white rounded-2xl border-2 border-ink shadow-sticker-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-display font-extrabold text-base text-ink">
              {lang === "hi" ? "कोई विशेष प्रश्न या एलर्जी है?" : "Have a specific health condition or medical shampoo?"}
            </h4>
            <p className="text-xs text-ink-soft">
              {lang === "hi"
                ? "हमारी टीम व्हाट्सएप पर आपकी मदद के लिए हमेशा तैयार है।"
                : "Our senior stylists will personally guide you on WhatsApp before booking."}
            </p>
          </div>

          <a
            href={getWhatsAppLink(`Hi! I have a question about pet grooming and clinic treatments at ${SHOP_DATA.name}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="sticker-btn bg-[#25D366] text-white px-5 py-2.5 text-xs md:text-sm font-extrabold shadow-sticker-sm flex items-center gap-2 shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Chat with Care Team</span>
          </a>
        </div>
      </div>
    </section>
  );
};

