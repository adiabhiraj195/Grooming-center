"use client";

import React, { useState, useEffect } from "react";
import { useI18n } from "@/lib/i18n";
import { SHOP_DATA } from "@/data/shop";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { MessageCircle, Sparkles } from "lucide-react";
import { useScrollHeader } from "@/lib/useScrollHeader";

export const TopAnnouncementBar: React.FC = () => {
  const { lang, toggleLang } = useI18n();
  const [isOpenNow, setIsOpenNow] = useState(true);
  const isVisible = useScrollHeader();

  useEffect(() => {
    // Check if open in IST (UTC+5:30)
    const checkOpenStatus = () => {
      const now = new Date();
      // UTC time + 5.5 hours = IST
      const utcHours = now.getUTCHours();
      const utcMinutes = now.getUTCMinutes();
      const istHours = (utcHours + 5.5 + utcMinutes / 60) % 24;

      const openHour = SHOP_DATA.hours.openHour24; // 8.0 (8:00 AM)
      const closeHour = SHOP_DATA.hours.closeHour24; // 20.5 (8:30 PM)

      setIsOpenNow(istHours >= openHour && istHours < closeHour);
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <aside
      aria-label="Salon announcements and operating status"
      className={`bg-peacock text-white border-b-2 border-ink py-1.5 px-3 sm:px-6 text-xs font-bold fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        {/* LEFT ANNOUNCEMENT */}
        <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
          <span className="inline-flex items-center gap-1 bg-marigold text-ink px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase shrink-0">
            <Sparkles className="w-3 h-3 fill-ink" />
            {SHOP_DATA.city}
          </span>
          <span className="text-[11px] sm:text-xs tracking-wide">
            {lang === "hi"
              ? "रेवाड़ी का 5.0★ पेट केयर, ग्रूमिंग क्लिनिक व पशु अस्पताल • वॉक-इन स्वागत है"
              : "Rewari's 5.0★ All-in-One Pet Care, Grooming Clinic & Hospital • Walk-ins Welcome"}
          </span>
        </div>

        {/* RIGHT STATUS & UTILITIES */}
        <div className="flex items-center gap-3 shrink-0">
          {/* OPEN / CLOSED PULSE BADGE */}
          <div className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/10 text-[11px]">
            <span
              className={`w-2 h-2 rounded-full ${
                isOpenNow ? "bg-emerald-400 animate-pulse" : "bg-amber-400"
              }`}
            />
            <span>
              {isOpenNow
                ? lang === "hi"
                  ? "अभी खुला है (शाम 8:30 तक)"
                  : "Open Right Now (till 8:30 PM)"
                : lang === "hi"
                ? "कल सुबह 8:00 बजे खुलेगा"
                : "Opens at 8:00 AM"}
            </span>
          </div>

          {/* LANGUAGE QUICK TOGGLE */}
          <button
            onClick={toggleLang}
            className="px-2 py-0.5 rounded bg-white/20 hover:bg-marigold hover:text-ink text-[11px] font-extrabold transition-colors cursor-pointer"
            title="Switch Language"
            aria-label={`Switch language to ${lang === "en" ? "Hindi" : "English"}`}
          >
            {lang === "en" ? "हिन्दी" : "EN"}
          </button>

          {/* WHATSAPP ICON QUICK CTA */}
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-6 h-6 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:scale-110 transition-transform"
            aria-label="Direct WhatsApp inquiry"
            title="Chat on WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-white" />
          </a>
        </div>
      </div>
    </aside>
  );
};
