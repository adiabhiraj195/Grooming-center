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
  CheckCircle2,
  Car,
  Smartphone,
  Info,
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
    { dayEn: "Monday", dayHi: "सोमवार", hours: "8:00 AM – 8:30 PM", status: "Open" },
    { dayEn: "Tuesday", dayHi: "मंगलवार", hours: "8:00 AM – 8:30 PM", status: "Open" },
    { dayEn: "Wednesday", dayHi: "बुधवार", hours: "8:00 AM – 8:30 PM", status: "Open" },
    { dayEn: "Thursday", dayHi: "गुरुवार", hours: "8:00 AM – 8:30 PM", status: "Open" },
    { dayEn: "Friday", dayHi: "शुक्रवार", hours: "8:00 AM – 8:30 PM", status: "Open" },
    { dayEn: "Saturday", dayHi: "शनिवार", hours: "8:00 AM – 8:30 PM", status: "Open" },
    { dayEn: "Sunday", dayHi: "रविवार", hours: "8:00 AM – 8:30 PM", status: "Open" },
  ];

  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-cream relative overflow-hidden"
      aria-label="Location, Hours, Amenities & Directions"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-peacock-soft border-2 border-ink shadow-sticker-sm text-peacock font-extrabold text-xs uppercase mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>{lang === "hi" ? "हमारा पता व समय" : "Visit Our Rewari Parlour & Clinic"}</span>
          </div>

          <h2 className="type-h2 text-ink mb-4">
            {lang === "hi" ? (
              <>
                पायलट चौक के पास, <span className="text-peacock">गेट नं-2, सेक्टर 3 रोड</span>
              </>
            ) : (
              <>
                Conveniently Located Near{" "}
                <span className="text-peacock">Pilot Chowk, Gate No-2</span>
              </>
            )}
          </h2>

          <p className="type-body text-ink-soft">
            {lang === "hi"
              ? "राधा स्वामी कॉलोनी, भक्ति नगर, रेवाड़ी। फ्री स्ट्रीट व ऑन-साइट पार्किंग, त्वरित वॉक-इन और एनएफसी पेमेंट्स।"
              : "Sector 3 Road, Radha Swami Colony, Bhakti Nagar in Rewari. Accommodating for quick visits, walk-ins accepted, and on-site parking available."}
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
                  <h3 className="font-display font-extrabold text-2xl text-ink leading-tight">
                    {SHOP_DATA.name}
                  </h3>
                  <p className="text-xs font-bold text-peacock mt-1">
                    {SHOP_DATA.area}, {SHOP_DATA.city}
                  </p>
                </div>

                {/* REAL-TIME OPEN / CLOSED PULSE BADGE */}
                <div
                  className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border-2 border-ink text-xs font-extrabold shadow-sticker-sm shrink-0 ${
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

              {/* ACTION BUTTONS (DIRECTION + DIRECT CALLS) */}
              <div className="space-y-2 pt-2 border-t border-ink/10">
                <a
                  href={SHOP_DATA.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sticker-btn bg-marigold hover:bg-marigold-deep text-ink text-xs font-extrabold py-3 shadow-sticker-sm flex items-center justify-center gap-2"
                >
                  <Navigation className="w-4 h-4 fill-ink" />
                  <span>Get Directions on Google Maps</span>
                </a>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <a
                    href={`tel:${SHOP_DATA.phoneRaw}`}
                    className="sticker-btn bg-white hover:bg-cream text-ink text-xs font-extrabold py-2.5 shadow-sticker-sm flex items-center justify-center gap-1.5"
                    title="Call Primary Phone"
                  >
                    <Phone className="w-3.5 h-3.5 text-peacock" />
                    <span>085700 49726</span>
                  </a>

                  <a
                    href={`tel:${SHOP_DATA.alternatePhoneRaw}`}
                    className="sticker-btn bg-white hover:bg-cream text-ink text-xs font-extrabold py-2.5 shadow-sticker-sm flex items-center justify-center gap-1.5"
                    title="Call Alternate Phone"
                  >
                    <Phone className="w-3.5 h-3.5 text-peacock" />
                    <span>095188 81824</span>
                  </a>
                </div>
              </div>
            </div>

            {/* OPENING HOURS SCHEDULE CARD */}
            <div className="sticker-card bg-white p-6">
              <h4 className="font-display font-extrabold text-base text-ink mb-4 flex items-center gap-2">
                <Clock className="w-4 h-4 text-peacock" />
                <span>Operating Hours (Open 7 Days a Week)</span>
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
                      <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700">
                        {item.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: MAP EMBED & AMENITIES & ACCESSIBILITY */}
          <div className="lg:col-span-7 space-y-6">
            {/* GOOGLE MAP EMBED CONTAINER */}
            <div className="sticker-card bg-white p-3 overflow-hidden">
              <div className="relative aspect-16/10 w-full rounded-2xl overflow-hidden border-2 border-ink">
                <iframe
                  title="Animalia Pet Care Grooming Parlour Location on Google Maps"
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
                  <span className="font-bold text-ink">
                    Near Pilot Chowk at Gate No-2, Sector 3 Road, Rewari
                  </span>
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

            {/* AMENITIES & ACCESSIBILITY CARD */}
            <div className="sticker-card bg-white p-6 border-2 border-ink shadow-sticker">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-ink/10">
                <h4 className="font-display font-extrabold text-base text-ink flex items-center gap-2">
                  <Car className="w-5 h-5 text-peacock" />
                  <span>Amenities & Accessibility</span>
                </h4>
                <span className="text-xs font-bold text-peacock bg-peacock-soft px-3 py-1 rounded-full border border-peacock/30">
                  Quick Visits Accommodated
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-cream/70 border border-ink/10">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-ink block">Walk-Ins Accepted</span>
                    <span className="text-ink-soft text-[11px]">
                      Accommodating for quick visits and urgent pet needs
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-cream/70 border border-ink/10">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-ink block">Free Parking</span>
                    <span className="text-ink-soft text-[11px]">
                      Both free street parking and on-site parking available
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-cream/70 border border-ink/10">
                  <Smartphone className="w-4 h-4 text-peacock shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-ink block">NFC Mobile Payments</span>
                    <span className="text-ink-soft text-[11px]">
                      Contactless NFC, Google Pay, PhonePe, Cards & Cash
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-cream/70 border border-ink/10">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-ink block">Gender-Neutral Restroom</span>
                    <span className="text-ink-soft text-[11px]">
                      Clean, dedicated restroom for pet parents
                    </span>
                  </div>
                </div>
              </div>

              {/* ACCESSIBILITY TRANSPARENCY NOTICE */}
              <div className="mt-4 p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
                <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <p className="text-[11px] leading-relaxed">
                  <strong>Accessibility Notice:</strong> The facility currently lacks wheelchair-accessible entrances, parking, or seating. Our supportive team is always delighted to assist pet parents and pets directly at their vehicles if needed.
                </p>
              </div>

              {/* QUICK WHATSAPP INQUIRY STRIP */}
              <div className="mt-4 pt-3 border-t border-ink/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                <span className="text-ink-soft">Questions or need immediate assistance?</span>
                <a
                  href={getWhatsAppLink("Hi! I'm planning a visit to Animalia Pet Care in Rewari. Are you open right now?")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sticker-btn bg-peacock-soft hover:bg-peacock text-peacock hover:text-white px-4 py-2 font-bold shadow-sticker-sm text-xs flex items-center gap-1.5 transition-colors"
                >
                  <span>Chat on WhatsApp</span>
                  <span>💬</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
