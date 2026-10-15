"use client";

import React, { useState, useMemo } from "react";
import { PRODUCTS_DATA, ProductItem } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { ProductQuickViewModal } from "./ProductQuickViewModal";
import { BasketDrawer } from "./BasketDrawer";
import { BasketPill } from "./BasketPill";
import { BrunoMascot } from "@/components/illustrations/BrunoMascot";
import { MishtiCat } from "@/components/illustrations/MishtiCat";
import { SparkleBurst } from "@/components/illustrations/Dividers";
import { getWhatsAppLink } from "@/lib/whatsapp";
import {
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Sun,
  CloudRain,
  Flame,
  Info,
} from "lucide-react";

export const ProductsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Items");
  const [quickViewProduct, setQuickViewProduct] = useState<ProductItem | null>(null);

  const categories = [
    "All Items",
    "Shampoo & Grooming",
    "Food & Treats",
    "Toys",
    "Walk Gear",
    "Health",
    "Cat Corner",
    "Accessories",
  ];

  // Filtered products list
  const filteredProducts = useMemo(() => {
    if (selectedCategory === "All Items") return PRODUCTS_DATA;
    return PRODUCTS_DATA.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  // Featured partner picks for the carousel
  const featuredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((p) => p.isFeatured || p.isPartnerLink);
  }, []);

  // Carousel scroll handler
  const carouselRef = React.useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 320;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Product + Offer JSON-LD schema
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: PRODUCTS_DATA.map((product, index) => ({
      "@type": "Product",
      position: index + 1,
      name: product.name,
      description: product.description,
      image: product.imageUrl,
      brand: {
        "@type": "Brand",
        name: product.brand,
      },
      offers: {
        "@type": "Offer",
        priceCurrency: "INR",
        price: product.variants[0]?.price,
        itemCondition: "https://schema.org/NewCondition",
        availability: product.inStock
          ? "https://schema.org/InStock"
          : "https://schema.org/OutOfStock",
      },
    })),
  };

  return (
    <section
      id="products"
      className="py-16 md:py-24 bg-cream relative overflow-hidden"
      aria-label="The Groomer's Shelf Products"
    >
      {/* INJECT JSON-LD SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-peacock-soft border-2 border-ink text-peacock font-extrabold text-xs uppercase tracking-wider shadow-sticker-sm mb-3">
            <SparkleBurst size={16} />
            <span>Salon-Grade Wellness & Retail</span>
          </div>

          <h2 className="type-h2 text-ink mb-3">The Groomer&apos;s Shelf</h2>
          <p className="type-body text-ink-soft">
            The exact tearless shampoos, herbal paw balms, and wholesome training treats we use every day on Bruno, Mishti, and your pets.
          </p>
        </div>

        {/* SEASONAL BUNDLES PROMO BANNER ROW */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {/* Summer Cooling Kit */}
          <div className="sticker-card p-5 bg-gradient-to-br from-[#FEF3C7] to-[#FDE68A] border-2 border-ink shadow-sticker flex items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white border border-ink text-[11px] font-extrabold text-amber-800 mb-1.5 shadow-sticker-sm">
                <Sun className="w-3.5 h-3.5" />
                <span>Summer Kit</span>
              </div>
              <h4 className="font-display font-extrabold text-base text-ink">
                Summer Heat Relief
              </h4>
              <p className="text-xs text-ink-soft mt-1">
                Cooling aloe wash, paw wax & hydrate spritz.
              </p>
              <a
                href={getWhatsAppLink("Hi! I'd like to enquire about the Summer Cooling Kit.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex text-xs font-extrabold text-ink underline"
              >
                Order Kit on WhatsApp →
              </a>
            </div>
            <div className="w-20 h-20 shrink-0">
              <BrunoMascot variant="bathing" className="w-full h-full" />
            </div>
          </div>

          {/* Monsoon Anti-Fungal Kit */}
          <div className="sticker-card p-5 bg-gradient-to-br from-[#D1FAE5] to-[#A7F3D0] border-2 border-ink shadow-sticker flex items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white border border-ink text-[11px] font-extrabold text-emerald-800 mb-1.5 shadow-sticker-sm">
                <CloudRain className="w-3.5 h-3.5" />
                <span>Monsoon Shield</span>
              </div>
              <h4 className="font-display font-extrabold text-base text-ink">
                Neem Anti-Tick & Fungus
              </h4>
              <p className="text-xs text-ink-soft mt-1">
                Paw cleft drying powder & neem tick dip.
              </p>
              <a
                href={getWhatsAppLink("Hi! I'd like to enquire about the Monsoon Anti-Fungal Kit.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex text-xs font-extrabold text-ink underline"
              >
                Order Kit on WhatsApp →
              </a>
            </div>
            <div className="w-20 h-20 shrink-0">
              <MishtiCat className="w-full h-full" />
            </div>
          </div>

          {/* Diwali Calm Pet Kit */}
          <div className="sticker-card p-5 bg-gradient-to-br from-[#FFE4E6] to-[#FECDD3] border-2 border-ink shadow-sticker flex items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white border border-ink text-[11px] font-extrabold text-rose-800 mb-1.5 shadow-sticker-sm">
                <Flame className="w-3.5 h-3.5" />
                <span>Calm Pet Kit</span>
              </div>
              <h4 className="font-display font-extrabold text-base text-ink">
                Festival Firecracker Calm
              </h4>
              <p className="text-xs text-ink-soft mt-1">
                L-theanine chews, lavender spray & happy hoodie.
              </p>
              <a
                href={getWhatsAppLink("Hi! I'd like to enquire about the Diwali Festive Calm Kit.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex text-xs font-extrabold text-ink underline"
              >
                Order Kit on WhatsApp →
              </a>
            </div>
            <div className="w-20 h-20 shrink-0">
              <BrunoMascot variant="happy" className="w-full h-full" />
            </div>
          </div>
        </div>

        {/* FEATURED / PARTNER PICKS CAROUSEL */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-marigold fill-marigold" />
              <h3 className="font-display font-extrabold text-xl text-ink">
                Featured & Groomer Favourites
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scrollCarousel("left")}
                className="w-9 h-9 rounded-full border-2 border-ink bg-white hover:bg-cream flex items-center justify-center text-ink shadow-sticker-sm cursor-pointer"
                aria-label="Previous featured products"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollCarousel("right")}
                className="w-9 h-9 rounded-full border-2 border-ink bg-white hover:bg-cream flex items-center justify-center text-ink shadow-sticker-sm cursor-pointer"
                aria-label="Next featured products"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div
            ref={carouselRef}
            className="flex gap-5 overflow-x-auto pb-4 pt-1 snap-x no-scrollbar scroll-smooth"
          >
            {featuredProducts.map((product) => (
              <div key={`featured-${product.id}`} className="w-72 md:w-80 shrink-0 snap-start">
                <ProductCard product={product} onQuickView={setQuickViewProduct} />
              </div>
            ))}
          </div>
        </div>

        {/* CATEGORY CHIPS WITH FRAMER MOTION TRANSITIONS */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full border-2 border-ink font-display font-bold text-xs md:text-sm transition-all cursor-pointer ${
                  isSelected
                    ? "bg-marigold text-ink shadow-sticker-sm scale-105"
                    : "bg-white text-ink-soft hover:bg-cream hover:text-ink"
                }`}
              >
                <span>{cat}</span>
              </button>
            );
          })}
        </div>

        {/* RESPONSIVE PRODUCTS GRID: 2 COLS MOBILE, 3 TABLET, 4 DESKTOP */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={setQuickViewProduct}
            />
          ))}
        </div>

        {/* PARTNER DISCLOSURE */}
        <div className="text-center text-xs text-ink-soft flex items-center justify-center gap-1.5 pt-6 border-t border-ink/10">
          <Info className="w-3.5 h-3.5 text-peacock shrink-0" />
          <span>
            Some links are partner links. Your price stays the same and helps support our pet parlour and animal clinic in Rewari.
          </span>
        </div>
      </div>

      {/* QUICK VIEW MODAL */}
      <ProductQuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />

      {/* SLIDE-OVER BASKET DRAWER */}
      <BasketDrawer />

      {/* FLOATING BASKET PILL */}
      <BasketPill />
    </section>
  );
};
