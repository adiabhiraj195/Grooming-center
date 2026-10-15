"use client";

import React, { useState, useEffect } from "react";
import { useI18n } from "@/lib/i18n";
import { SHOP_DATA } from "@/data/shop";
import { getWhatsAppLink } from "@/lib/whatsapp";
import {
  MapPin,
  Clock,
  Navigation,
  Phone,
  Car,
} from "lucide-react";

export const LocationSection: React.FC = () => {
  const { lang } = useI18n();
  const [isOpenNow, setIsOpenNow] = useState(true);

  useEffect(() => {
    const checkOpen = () => {
      const now = new Date();
      const utcHours = now.getUTCHours();
      const utcMinutes = now.getUTCMinutes();
      const istHours = (utcHours + 5.5 + utcMinutes / 60) % 24;
      setIsOpenNow(
        istHours >= SHOP_DATA.hours.openHour24 &&
          istHours < SHOP_DATA.hours.closeHour24
      );
    };
    checkOpen();
    const interval = setInterval(checkOpen, 60000);
    return () => clearInterval(interval);
  }, []);

  const scheduleDays = [
    { dayEn: "Monday", dayHi: "सोमवार", hours: "9:30 AM – 8:30 PM", status: "Open" },
    { dayEn: "Tuesday", dayHi: "मंगलवार", hours: "9:30 AM – 8:30 PM", status: "Open" },
    { dayEn: "Wednesday", dayHi: "बुधवार", hours: "9:30 AM – 8:30 PM", status: "Open" },
    { dayEn: "Thursday", dayHi: "गुरुवार", hours: "9:30 AM – 8:30 PM", status: "Open" },
    { dayEn: "Friday", dayHi: "शुक्रवार", hours: "9:30 AM – 8:30 PM", status: "Open" },
    { dayEn: "Saturday", dayHi: "शनिवार", hours: "9:30 AM – 9:00 PM", status: "Busy" },
    { dayEn: "Sunday", dayHi: "रविवार", hours: "9:30 AM – 9:00 PM", status: "Busy" },
  ];

  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-cream relative overflow-hidden"
      aria-label="Location, Hours & Directions"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-peacock-soft border-2 border-ink shadow-sticker-sm text-peacock font-extrabold text-xs uppercase mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>{lang === "hi" ? "हमारा पता व समय" : "Visit Our Indiranagar Studio"}</span>
          </div>

          <h2 className="type-h2 text-ink mb-4">
            {lang === "hi" ? (
              <>
                इंदिरानगर के दिल में, <span className="text-peacock">प्यार से तैयार!</span>
              </>
            ) : (
              <>
                Conveniently Located on{" "}
                <span className="text-peacock">12th Main, Indiranagar</span>
              </>
            )}
          </h2>

          <p className="type-body text-ink-soft">
            {lang === "hi"
              ? "100ft रोड और स्टारबक्स के नजदीक। समर्पित पार्किंग और वातानुकूलित लाउंज।"
              : "Opposite Starbucks & near 100ft Road junction. Dedicated pet drop-off zone, valet parking, and cozy pet-parent lounge."}
          </p>
        </div>

        {/* 2-COLUMN LOCATION CARD */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: HOURS & ADDRESS DETAILS */}
          <div className="lg:col-span-5 space-y-6">
            {/* ADDRESS STICKER CARD */}
            <div className="sticker-card bg-white p-6 md:p-8">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="font-display font-extrabold text-2xl text-ink">
                    {SHOP_DATA.name}
                  </h3>
                  <p className="text-xs font-bold text-peacock">
                    HAL 2nd Stage, {SHOP_DATA.area}, Bengaluru
                  </p>
                </div>

                {/* REAL-TIME OPEN / CLOSED PULSE BADGE */}
                <div
                  className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border-2 border-ink text-xs font-extrabold shadow-sticker-sm ${
                    isOpenNow
                      ? "bg-emerald-100 text-emerald-800"
                      : "bg-amber-100 text-amber-800"
                  }`}
                >
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${
                      isOpenNow ? "bg-emerald-500 animate-pulse" : "bg-amber-500"
                    }`}
                  />
                  <span>{isOpenNow ? "Open Right Now" : "Closed"}</span>
                </div>
              </div>

              {/* ADDRESS TEXT */}
              <div className="text-xs sm:text-sm text-ink-soft leading-relaxed mb-6 space-y-1">
                <p className="font-bold text-ink">{SHOP_DATA.address.line1}</p>
                <p>{SHOP_DATA.address.line2}</p>
                <p>
                  {SHOP_DATA.address.city}, {SHOP_DATA.address.state} - {SHOP_DATA.address.pincode}
                </p>
                <p className="text-xs text-peacock font-extrabold pt-1">
                  Landmark: {SHOP_DATA.address.landmark}
                </p>
              </div>

              {/* ACTION BUTTONS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-ink/10">
                <a
                  href={SHOP_DATA.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sticker-btn bg-marigold hover:bg-marigold-deep text-ink text-xs font-extrabold py-3 shadow-sticker-sm flex items-center justify-center gap-2"
                >
                  <Navigation className="w-4 h-4 fill-ink" />
                  <span>Get Directions</span>
                </a>

                <a
                  href={`tel:${SHOP_DATA.phoneRaw}`}
                  className="sticker-btn bg-white hover:bg-cream text-ink text-xs font-extrabold py-3 shadow-sticker-sm flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-peacock" />
                  <span>Call {SHOP_DATA.phone}</span>
                </a>
              </div>
            </div>

            {/* OPENING HOURS SCHEDULE CARD */}
            <div className="sticker-card bg-white p-6">
              <h4 className="font-display font-extrabold text-base text-ink mb-4 flex items-center gap-2">
                <Clock className="w-4 h-4 text-peacock" />
                <span>Operating Hours (All 7 Days)</span>
              </h4>

              <div className="space-y-2 text-xs">
                {scheduleDays.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between py-1.5 border-b border-ink/5 last:border-none"
                  >
                    <span className="font-bold text-ink">
                      {lang === "hi" ? item.dayHi : item.dayEn}
                    </span>
                    <div className="flex items-center gap-3">
                      <span className="text-ink-soft font-semibold">{item.hours}</span>
                      <span
                        className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${
                          item.status === "Busy"
                            ? "bg-marigold/20 text-marigold-deep"
                            : "bg-emerald-50 text-emerald-700"
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: MAP EMBED & CAB PICKUP BANNER */}
          <div className="lg:col-span-7 space-y-6">
            {/* GOOGLE MAP EMBED CONTAINER */}
            <div className="sticker-card bg-white p-3 overflow-hidden">
              <div className="relative aspect-16/10 w-full rounded-2xl overflow-hidden border-2 border-ink">
                <iframe
                  title="Pawfect Tails Pet Spa Location on Google Maps"
                  src={SHOP_DATA.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              {/* MAP FOOTNOTE */}
              <div className="p-3 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink-soft">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-peacock" />
                  <span className="font-bold text-ink">Opposite Starbucks, 12th Main Indiranagar</span>
                </div>
                <a
                  href={SHOP_DATA.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-peacock hover:underline font-extrabold flex items-center gap-1"
                >
                  <span>Open in Google Maps App</span>
                  <span>↗</span>
                </a>
              </div>
            </div>

            {/* FREE PET-CAB NOTICE CARD */}
            <div className="sticker-card bg-peacock-soft border-2 border-peacock p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-peacock text-white border-2 border-ink shadow-sticker-sm flex items-center justify-center shrink-0">
                  <Car className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-extrabold text-base text-ink">
                    Can&apos;t make the drive? We&apos;ll pick your pet up!
                  </h4>
                  <p className="text-xs text-ink-soft">
                    Complimentary air-conditioned pet transit within 3km of our salon. Sanitised crates & safety belts.
                  </p>
                </div>
              </div>

              <a
                href={getWhatsAppLink("Hi! I would like to book grooming with AC pet-cab pick-up & drop.")}
                target="_blank"
                rel="noopener noreferrer"
                className="sticker-btn bg-white hover:bg-cream text-peacock text-xs font-extrabold px-5 py-2.5 shadow-sticker-sm shrink-0 whitespace-nowrap"
              >
                Book Cab on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
