"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { ProductItem, ProductVariant } from "@/data/products";
import { formatINR } from "@/lib/utils";
import { useBasket } from "@/context/BasketContext";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { SHOP_DATA } from "@/data/shop";
import { X, Check, ShoppingBag, MessageCircle } from "lucide-react";

export interface ProductQuickViewModalProps {
  product: ProductItem | null;
  onClose: () => void;
}

export const ProductQuickViewModal: React.FC<ProductQuickViewModalProps> = ({
  product,
  onClose,
}) => {
  const { addToBasket, setIsDrawerOpen } = useBasket();
  const modalRef = useRef<HTMLDivElement>(null);

  const [selectedVariantId, setSelectedVariantId] = React.useState<string | null>(null);

  const selectedVariant: ProductVariant | null = product
    ? (product.variants.find((v) => v.id === selectedVariantId) || product.variants[0])
    : null;

  // Trap focus and close on Escape
  useEffect(() => {
    if (!product) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [product, onClose]);

  if (!product || !selectedVariant) return null;

  const discountPercent = Math.round(
    ((selectedVariant.mrp - selectedVariant.price) / selectedVariant.mrp) * 100
  );

  const handleAddToEnquiry = () => {
    addToBasket(product, selectedVariant, 1);
    setIsDrawerOpen(true);
    onClose();
  };

  const whatsappInquiryUrl = getWhatsAppLink(
    `Hi ${SHOP_DATA.name}! I have an enquiry about: ${product.name} (${selectedVariant.label}) priced at ${formatINR(selectedVariant.price)}. Is it currently available for pick-up at your ${SHOP_DATA.area} parlour?`
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/70 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quick-view-title"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-white border-3 border-ink rounded-[28px] p-6 md:p-8 shadow-sticker-lg overflow-y-auto max-h-[90vh] animate-in zoom-in-95 duration-200"
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full border-2 border-ink bg-cream hover:bg-blush flex items-center justify-center text-ink shadow-sticker-sm transition-transform hover:scale-105 cursor-pointer z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* PRODUCT IMAGE & BADGES */}
          <div className="relative">
            <div className="relative aspect-square w-full rounded-2xl border-2 border-ink overflow-hidden shadow-sticker bg-cream">
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover"
              />
            </div>

            {/* HANDWRITTEN CAVEAT GROOMER NOTE */}
            {product.groomerNote && (
              <div className="mt-3 p-3 bg-peacock-soft rounded-xl border border-ink/30 text-peacock font-hand text-base leading-tight">
                💬 &ldquo;{product.groomerNote}&rdquo;
              </div>
            )}
          </div>

          {/* PRODUCT DETAILS */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold text-peacock uppercase tracking-wider">
                {product.brand}
              </span>
              <span className="text-xs text-ink-soft">• {product.category}</span>
            </div>

            <h3 id="quick-view-title" className="font-display font-extrabold text-xl text-ink leading-tight mb-2">
              {product.name}
            </h3>

            {/* PRICE & DISCOUNT */}
            <div className="flex items-baseline gap-2.5 mb-4">
              <span className="font-display font-extrabold text-2xl text-ink">
                {formatINR(selectedVariant.price)}
              </span>
              <span className="text-sm font-bold text-gray-400 line-through">
                {formatINR(selectedVariant.mrp)}
              </span>
              <span className="px-2 py-0.5 rounded-full bg-blush border border-ink text-xs font-extrabold text-chilli shadow-sticker-sm">
                {discountPercent}% OFF
              </span>
            </div>

            <p className="text-xs text-ink-soft leading-relaxed mb-4">
              {product.description}
            </p>

            {/* VARIANT SELECTOR */}
            {product.variants.length > 1 && (
              <div className="mb-4">
                <label className="block text-xs font-bold uppercase tracking-wider text-ink-soft mb-1.5">
                  Choose Variant / Size:
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map((v) => (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setSelectedVariantId(v.id)}
                      className={`px-3 py-1.5 rounded-xl border-2 text-xs font-bold transition-all cursor-pointer ${
                        selectedVariant.id === v.id
                          ? "bg-marigold border-ink shadow-sticker-sm text-ink"
                          : "bg-cream border-ink/20 text-ink-soft hover:border-ink"
                      }`}
                    >
                      {v.label} - {formatINR(v.price)}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* SAFE FOR CHIPS */}
            <div className="mb-4">
              <span className="block text-xs font-bold uppercase tracking-wider text-ink-soft mb-1.5">
                Safe & Recommended For:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {product.safeFor.map((item, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-cream border border-ink/20 text-[11px] font-bold text-peacock"
                  >
                    <Check className="w-3 h-3 stroke-[3]" />
                    <span>{item}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* INGREDIENTS / GUIDANCE */}
            <div className="text-[11px] text-ink-soft space-y-1.5 mb-6 pt-3 border-t border-ink/10">
              <p>
                <strong className="text-ink">Key Ingredients:</strong>{" "}
                {product.ingredientsOrSuitability}
              </p>
              <p>
                <strong className="text-ink">Usage Guidance:</strong>{" "}
                {product.ageAndSizeGuidance}
              </p>
            </div>

            {/* CTAS */}
            <div className="flex flex-col sm:flex-row gap-2.5">
              {product.inStock ? (
                <>
                  <button
                    type="button"
                    onClick={handleAddToEnquiry}
                    className="flex-1 sticker-btn bg-marigold hover:bg-marigold-deep text-ink py-3 text-xs md:text-sm font-extrabold shadow-sticker flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <ShoppingBag className="w-4 h-4 fill-ink" />
                    <span>Add to Enquiry</span>
                  </button>

                  <a
                    href={whatsappInquiryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sticker-btn bg-white hover:bg-cream text-ink py-3 text-xs md:text-sm font-bold shadow-sticker-sm flex items-center justify-center gap-1.5"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>Ask on WhatsApp</span>
                  </a>
                </>
              ) : (
                <a
                  href={getWhatsAppLink(
                    `Hi ${SHOP_DATA.name}, please notify me when ${product.name} (${selectedVariant.label}) is back in stock!`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sticker-btn bg-ink text-white py-3 text-xs md:text-sm font-bold shadow-sticker flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Notify Me When In Stock</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
