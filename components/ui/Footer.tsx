"use client";

import React from "react";
import { useI18n } from "@/lib/i18n";
import { SHOP_DATA } from "@/data/shop";
import { ToranGarlandStrip } from "@/components/illustrations/Dividers";
import { SinglePawPrint } from "@/components/illustrations/PawTrail";
import { getWhatsAppLink } from "@/lib/whatsapp";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  CreditCard,
  Banknote,
  Smartphone,
} from "lucide-react";

const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const YoutubeIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <polygon points="10 15 15 12 10 9 10 15" fill="currentColor" />
  </svg>
);

export const Footer: React.FC = () => {
  const { t } = useI18n();

  return (
    <footer className="relative bg-[#172138] text-white overflow-hidden pt-0" aria-label="Footer">
      {/* TRADITIONAL MARIGOLD TORAN STRIP AT TOP OF FOOTER */}
      <ToranGarlandStrip className="-mt-1" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* COLUMN 1: BRAND & MISSION */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-marigold border-2 border-white flex items-center justify-center">
                <SinglePawPrint size={22} color="#1F2A44" />
              </div>
              <span className="font-display font-extrabold text-2xl text-white tracking-tight">
                {SHOP_DATA.name.split(" ")[0]}
                <span className="text-marigold"> {SHOP_DATA.name.split(" ")[1]}</span>
              </span>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed">
              Bengaluru&apos;s luxury pet wellness & styling centre. Cage-free drying, natural herbal shampoos, and fearless, gentle care for every dog and cat.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={SHOP_DATA.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-marigold hover:text-ink flex items-center justify-center transition-colors border border-white/20"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href={SHOP_DATA.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-marigold hover:text-ink flex items-center justify-center transition-colors border border-white/20"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href={SHOP_DATA.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-marigold hover:text-ink flex items-center justify-center transition-colors border border-white/20"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-5 h-5" />
              </a>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center transition-transform hover:scale-110 shadow-sticker-sm"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
              </a>
            </div>
          </div>

          {/* COLUMN 2: QUICK LINKS */}
          <div>
            <h3 className="font-display font-bold text-lg text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-marigold inline-block" />
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <a href="#services" className="hover:text-marigold transition-colors flex items-center gap-1.5">
                  <span>🐾</span> {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-marigold transition-colors flex items-center gap-1.5">
                  <span>🐾</span> {t.nav.pricing}
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-marigold transition-colors flex items-center gap-1.5">
                  <span>🐾</span> {t.nav.reviews}
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-marigold transition-colors flex items-center gap-1.5">
                  <span>🐾</span> {t.nav.products}
                </a>
              </li>
              <li>
                <a href="#write-review" className="hover:text-marigold transition-colors flex items-center gap-1.5">
                  <span>⭐</span> Write a Review (Google)
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-marigold transition-colors flex items-center gap-1.5">
                  <span>🐾</span> {t.nav.gallery}
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-marigold transition-colors flex items-center gap-1.5">
                  <span>🐾</span> {t.nav.howItWorks}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-marigold transition-colors flex items-center gap-1.5">
                  <span>🐾</span> FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: SERVICES */}
          <div>
            <h3 className="font-display font-bold text-lg text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-peacock-soft inline-block" />
              {t.footer.servicesTitle}
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <a href="#services" className="hover:text-marigold transition-colors">
                  Bath & High-Velocity Blow-Dry
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-marigold transition-colors">
                  Full Royal Scissor Styling
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-marigold transition-colors">
                  Ayurvedic Hot-Oil Luxury Spa
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-marigold transition-colors">
                  Furminator Undercoat De-Shedding
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-marigold transition-colors">
                  Feline Quiet Grooming Lounge
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-marigold transition-colors">
                  AC Cab Pet Pickup & Drop
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: VISIT & HOURS */}
          <div>
            <h3 className="font-display font-bold text-lg text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-chilli inline-block" />
              {t.footer.contactTitle}
            </h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-marigold shrink-0 mt-1" />
                <span>
                  {SHOP_DATA.address.line1}, {SHOP_DATA.address.line2}, {SHOP_DATA.address.city} - {SHOP_DATA.address.pincode}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-marigold shrink-0" />
                <a href={`tel:${SHOP_DATA.phoneRaw}`} className="hover:text-marigold font-bold text-white">
                  {SHOP_DATA.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-marigold shrink-0" />
                <a href={`mailto:${SHOP_DATA.email}`} className="hover:text-marigold">
                  {SHOP_DATA.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-marigold shrink-0" />
                <span className="text-emerald-400 font-semibold">{SHOP_DATA.hours.display}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 24x7 PET HEALTH EMERGENCY IN BENGALURU */}
        <div className="py-6 border-b border-white/10 text-xs">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-white/5 rounded-2xl p-4 border border-white/10">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-chilli animate-ping" />
              <span className="font-display font-extrabold text-sm text-white">
                24x7 Bengaluru Pet Health Emergency Directory:
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-300">
              <a
                href="tel:+918041155555"
                className="hover:text-marigold transition-colors flex items-center gap-1.5 font-bold"
              >
                <span>🚑 Cessna 24x7 (Domlur):</span>
                <span className="text-white underline">+91 80 4115 5555</span>
              </a>
              <span className="text-white/20 hidden sm:inline">•</span>
              <a
                href="tel:+918022947307"
                className="hover:text-marigold transition-colors flex items-center gap-1.5 font-bold"
              >
                <span>🏥 CUPA 24/7 Trauma (Hebbal):</span>
                <span className="text-white underline">+91 80 2294 7307</span>
              </a>
              <span className="text-white/20 hidden sm:inline">•</span>
              <a
                href="tel:+919845012345"
                className="hover:text-marigold transition-colors flex items-center gap-1.5 font-bold"
              >
                <span>🩺 CARE Animal Hospital:</span>
                <span className="text-white underline">+91 98450 12345</span>
              </a>
            </div>
          </div>
        </div>

        {/* PAYMENT CHIPS & ACCREDITATION */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4 border-b border-white/10 text-xs text-gray-400">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-semibold text-gray-300 mr-1">{t.footer.paymentsAccepted}:</span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-white/10 text-white font-medium">
              <Smartphone className="w-3.5 h-3.5 text-marigold" /> UPI (GPay / PhonePe / Paytm)
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-white/10 text-white font-medium">
              <CreditCard className="w-3.5 h-3.5 text-peacock-soft" /> Visa / Mastercard / RuPay
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-white/10 text-white font-medium">
              <Banknote className="w-3.5 h-3.5 text-emerald-400" /> Cash
            </span>
          </div>

          <div className="text-right text-[11px] text-gray-400">
            <span>GSTIN: {SHOP_DATA.legal.gstin}</span> • <span>{SHOP_DATA.legal.license}</span>
          </div>
        </div>

        {/* COPYRIGHT & BRUNO SILHOUETTE */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div className="flex items-center gap-3">
            {/* WAGGING TAIL BRUNO SILHOUETTE */}
            <div className="w-8 h-8 rounded-full bg-marigold flex items-center justify-center text-ink shrink-0 animate-tail-wag" title="Bruno wagging tail">
              🐾
            </div>
            <p>{SHOP_DATA.legal.copyright}</p>
          </div>
          <p className="text-center font-medium text-gray-300">
            {t.footer.madeWithLove}
          </p>
        </div>
      </div>
    </footer>
  );
};
