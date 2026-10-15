"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { SHOP_DATA } from "@/data/shop";
import { SinglePawPrint } from "@/components/illustrations/PawTrail";
import {
  Menu,
  X,
  Phone,
  Calendar,
  MessageCircle,
  ShoppingBag,
  Star,
} from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { useBasket } from "@/context/BasketContext";
import { useScrollHeader } from "@/lib/useScrollHeader";

export const Navbar: React.FC<{ hasTopBar?: boolean }> = ({ hasTopBar = true }) => {
  const { t } = useI18n();
  const { totalCount, setIsDrawerOpen } = useBasket();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isTopBarVisible = useScrollHeader();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Updated navigation links: Services, Pricing, Reviews, Products, Gallery, Contact
  const navLinks = [
    { href: "#services", label: t.nav.services },
    { href: "#pricing", label: t.nav.pricing },
    { href: "#reviews", label: t.nav.reviews },
    { href: "#products", label: t.nav.products },
    { href: "#gallery", label: t.nav.gallery },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <>
      <header
        className={`fixed left-0 right-0 ${
          mobileMenuOpen ? "z-50" : "z-40"
        } transition-all duration-300 ${
          hasTopBar && isTopBarVisible ? "top-7 sm:top-8" : "top-2"
        } ${
          isScrolled ? "py-2 px-3 md:px-4" : "py-3 px-3 md:px-8"
        }`}
      >
        <div
          className={`mx-auto transition-all duration-300 ${
            isScrolled
              ? "max-w-6xl bg-white/95 backdrop-blur-md border-2 border-ink shadow-sticker rounded-full py-2 px-4 md:px-6 flex items-center justify-between"
              : "max-w-7xl bg-white/80 md:bg-white/60 backdrop-blur-md border-2 border-ink/40 md:border-ink shadow-sticker-sm rounded-full py-2.5 px-4 md:px-6 flex items-center justify-between"
          }`}
        >
          {/* LOGO */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus:outline-none"
            aria-label={`${SHOP_DATA.name} Home`}
          >
            <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-marigold border-2 border-ink flex items-center justify-center shadow-sticker-sm group-hover:rotate-12 transition-transform">
              <SinglePawPrint size={22} color="#1F2A44" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-lg md:text-xl text-ink leading-none tracking-tight">
                {SHOP_DATA.name.split(" ")[0]}
                <span className="text-peacock"> {SHOP_DATA.name.split(" ").slice(1, 3).join(" ")}</span>
              </span>
              <span className="text-[10px] md:text-xs font-bold text-ink-soft tracking-wider uppercase">
                Grooming & Clinic • {SHOP_DATA.city}
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV LINKS */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-6" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-bold text-ink text-sm hover:text-peacock transition-colors py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-peacock transition-all duration-200 group-hover:w-full rounded-full" />
              </a>
            ))}
          </nav>

          {/* RIGHT ACTION BUTTONS */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* EN / HI TOGGLE BUTTON */}
            {/* <button
              onClick={toggleLang}
              className="sticker-badge bg-peacock-soft text-peacock hover:bg-peacock hover:text-white transition-colors cursor-pointer text-xs md:text-sm font-extrabold px-3 py-1.5"
              aria-label={`Switch language to ${lang === "en" ? "Hindi" : "English"}`}
              title="Toggle English / हिन्दी"
            >
              <span className={lang === "en" ? "underline underline-offset-2" : "opacity-70"}>EN</span>
              <span className="opacity-40">/</span>
              <span className={lang === "hi" ? "underline underline-offset-2" : "opacity-70"}>हिन्दी</span>
            </button> */}

            {/* FLOATING "REVIEW US" CHIP IN NAVBAR */}
            <a
              href="#write-review"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border-2 border-ink text-ink font-extrabold text-xs bg-marigold hover:bg-marigold-deep transition-colors shadow-sticker-sm"
              title="Review us on Google"
            >
              <Star className="w-3.5 h-3.5 fill-ink" />
              <span>{t.nav.reviewUs}</span>
            </a>

            {/* BASKET ICON (IF ITEMS IN BASKET) */}
            {/* {totalCount > 0 && (
              <button
                type="button"
                onClick={() => setIsDrawerOpen(true)}
                className="relative w-9 h-9 rounded-full bg-peacock border-2 border-ink text-white flex items-center justify-center shadow-sticker-sm hover:scale-105 transition-transform cursor-pointer"
                aria-label={`View basket with ${totalCount} items`}
              >
                <ShoppingBag className="w-4 h-4 fill-white" />
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-chilli text-white text-[10px] font-extrabold flex items-center justify-center">
                  {totalCount}
                </span>
              </button>
            )} */}

            {/* BOOK NOW CTA */}
            <a
              href="#pricing"
              className="sticker-btn bg-marigold text-ink hover:bg-marigold-deep px-4 md:px-5 py-2 text-xs md:text-sm font-extrabold tracking-wide"
            >
              <Calendar className="w-4 h-4 mr-1.5 hidden md:inline" />
              <span>{t.nav.bookNow}</span>
            </a>

            {/* MOBILE HAMBURGER BUTTON */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-full border-2 border-ink bg-white flex items-center justify-center text-ink shadow-sticker-sm focus:outline-none"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE FULL-SCREEN DRAWER */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-cream/98 backdrop-blur-lg flex flex-col justify-between p-6 pt-24 lg:hidden animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex flex-col gap-4 max-w-sm mx-auto w-full">
            <div className="text-center pb-2">
              <span className="type-eyebrow text-peacock">{SHOP_DATA.city}&apos;s All-in-One Pet Destination</span>
              <h2 className="font-display font-extrabold text-2xl text-ink mt-1">{SHOP_DATA.name}</h2>
            </div>

            <nav className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="sticker-card bg-white p-3.5 text-center font-display font-bold text-base text-ink hover:bg-peacock-soft transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <SinglePawPrint size={16} color="#0F766E" />
                </a>
              ))}

              <a
                href="#write-review"
                onClick={() => setMobileMenuOpen(false)}
                className="sticker-card bg-marigold p-3.5 text-center font-display font-bold text-base text-ink flex items-center justify-between shadow-sticker-sm"
              >
                <span className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 fill-ink" />
                  <span>Review Us on Google</span>
                </span>
                <span>⭐</span>
              </a>
            </nav>

            <div className="flex flex-col gap-2.5 pt-2">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="sticker-btn bg-[#25D366] text-white py-3 text-sm font-bold shadow-sticker flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                Chat on WhatsApp
              </a>

              <a
                href={`tel:${SHOP_DATA.phoneRaw}`}
                onClick={() => setMobileMenuOpen(false)}
                className="sticker-btn bg-white text-ink py-2.5 text-sm font-bold flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-peacock" />
                Call {SHOP_DATA.phone}
              </a>
            </div>
          </div>

          <div className="text-center text-xs text-ink-soft py-4 border-t border-ink/10">
            Open 7 Days • {SHOP_DATA.hours.display} • {SHOP_DATA.area}, {SHOP_DATA.city}
          </div>
        </div>
      )}

      {/* MOBILE STICKY BOTTOM BAR (STAYS CALL, WHATSAPP, BOOK, & BASKET PILL) */}
      <nav
        className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t-2 border-ink py-2 px-3 flex items-center justify-around shadow-sticker-lg"
        aria-label="Mobile Bottom Bar"
      >
        {/* CALL BUTTON */}
        <a
          href={`tel:${SHOP_DATA.phoneRaw}`}
          className="flex flex-col items-center gap-0.5 text-ink hover:text-peacock active:scale-95 transition-transform"
          aria-label="Call salon"
        >
          <div className="w-9 h-9 rounded-full bg-cream border-2 border-ink flex items-center justify-center shadow-sticker-sm">
            <Phone className="w-4 h-4 text-ink" />
          </div>
          <span className="text-[10px] font-extrabold">Call</span>
        </a>

        {/* WHATSAPP BUTTON */}
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-0.5 text-emerald-700 active:scale-95 transition-transform"
          aria-label="WhatsApp chat"
        >
          <div className="w-9 h-9 rounded-full bg-[#25D366] border-2 border-ink flex items-center justify-center shadow-sticker-sm text-white">
            <MessageCircle className="w-4 h-4 fill-white" />
          </div>
          <span className="text-[10px] font-extrabold">WhatsApp</span>
        </a>

        {/* BOOK APPOINTMENT BUTTON */}
        <a
          href="#pricing"
          className="flex flex-col items-center gap-0.5 text-ink active:scale-95 transition-transform"
          aria-label="Book grooming appointment"
        >
          <div className="w-9 h-9 rounded-full bg-marigold border-2 border-ink flex items-center justify-center shadow-sticker-sm">
            <Calendar className="w-4 h-4 text-ink" />
          </div>
          <span className="text-[10px] font-extrabold">Book</span>
        </a>

        {/* ENQUIRY BASKET PILL (SHOWS WHEN BASKET HAS ITEMS) */}
        {totalCount > 0 ? (
          <button
            type="button"
            onClick={() => setIsDrawerOpen(true)}
            className="flex flex-col items-center gap-0.5 text-peacock active:scale-95 transition-transform cursor-pointer"
            aria-label={`View basket (${totalCount} items)`}
          >
            <div className="relative w-9 h-9 rounded-full bg-peacock border-2 border-ink flex items-center justify-center shadow-sticker-sm text-white">
              <ShoppingBag className="w-4 h-4 fill-white" />
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-chilli text-white text-[9px] font-extrabold flex items-center justify-center border border-white">
                {totalCount}
              </span>
            </div>
            <span className="text-[10px] font-extrabold">Basket</span>
          </button>
        ) : (
          <a
            href="#write-review"
            className="flex flex-col items-center gap-0.5 text-ink-soft hover:text-ink active:scale-95 transition-transform"
            aria-label="Review us on Google"
          >
            <div className="w-9 h-9 rounded-full bg-cream border-2 border-ink flex items-center justify-center shadow-sticker-sm">
              <Star className="w-4 h-4 text-marigold fill-marigold" />
            </div>
            <span className="text-[10px] font-extrabold">Review</span>
          </a>
        )}
      </nav>
    </>
  );
};
