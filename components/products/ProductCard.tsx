"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ProductItem, ProductVariant } from "@/data/products";
import { formatINR } from "@/lib/utils";
import { useBasket } from "@/context/BasketContext";
import { getWhatsAppLink } from "@/lib/whatsapp";
import {
  ShoppingBag,
  MessageCircle,
  Eye,
  ExternalLink,
} from "lucide-react";

export interface ProductCardProps {
  product: ProductItem;
  onQuickView: (product: ProductItem) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  const { addToBasket, lastAddedKey } = useBasket();
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(
    product.variants[0]
  );
  const [flyingPaw, setFlyingPaw] = useState(false);

  const discountPercent = Math.round(
    ((selectedVariant.mrp - selectedVariant.price) / selectedVariant.mrp) * 100
  );

  const isCurrentItemBouncing = lastAddedKey === `${product.id}-${selectedVariant.id}`;

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFlyingPaw(true);
    addToBasket(product, selectedVariant, 1);
    setTimeout(() => setFlyingPaw(false), 900);
  };

  const whatsappInquiryUrl = getWhatsAppLink(
    `Hi Pawfect Tails! I have an enquiry about purchasing: ${product.name} (${selectedVariant.label}) priced at ${formatINR(selectedVariant.price)}.`
  );

  return (
    <div
      onClick={() => onQuickView(product)}
      className={`sticker-card p-4 md:p-5 flex flex-col justify-between transition-all duration-300 relative group cursor-pointer ${
        !product.inStock ? "opacity-80 bg-gray-50" : "bg-white hover:-translate-y-1 hover:shadow-sticker-lg"
      }`}
    >
      {/* FLYING PAW PRINT ANIMATION ON ADD */}
      {flyingPaw && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none animate-bounce text-2xl">
          🐾 +1
        </div>
      )}

      <div>
        {/* IMAGE IN STICKER FRAME */}
        <div className="relative aspect-square w-full rounded-2xl border-2 border-ink overflow-hidden bg-cream mb-4 shadow-sticker-sm">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            className={`object-cover transition-transform duration-500 group-hover:scale-105 ${
              !product.inStock ? "grayscale" : ""
            }`}
          />

          {/* TAG BADGES (TOP-LEFT) */}
          <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 items-start z-10">
            {product.tags.slice(0, 2).map((tag, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded-full text-[10px] font-extrabold border border-ink shadow-sticker-sm bg-marigold text-ink uppercase"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* PARTNER LINK TAG */}
          {product.isPartnerLink && (
            <span className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded-full text-[10px] font-extrabold border border-ink bg-white/95 text-peacock shadow-sticker-sm">
              Partner Pick ↗
            </span>
          )}

          {/* QUICK VIEW HOVER PILL */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="absolute inset-0 m-auto w-28 h-9 rounded-full bg-white/95 border-2 border-ink shadow-sticker-sm text-xs font-extrabold text-ink flex items-center justify-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity z-20 cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Quick View</span>
          </button>
        </div>

        {/* BRAND & NAME */}
        <div className="flex items-center justify-between text-[11px] font-bold text-peacock mb-1">
          <span>{product.brand}</span>
          <span className="text-ink-soft">{product.category}</span>
        </div>

        <h4 className="font-display font-extrabold text-base text-ink line-clamp-2 leading-tight mb-2 group-hover:text-peacock transition-colors">
          {product.name}
        </h4>

        {/* CAVEAT HANDWRITTEN GROOMER NOTE */}
        {product.groomerNote && (
          <p className="text-xs text-ink/80 font-hand leading-tight mb-3 line-clamp-2">
            💬 &ldquo;{product.groomerNote}&rdquo;
          </p>
        )}

        {/* VARIANT SELECTOR */}
        {product.variants.length > 1 && (
          <div
            className="flex flex-wrap gap-1.5 mb-3"
            onClick={(e) => e.stopPropagation()}
          >
            {product.variants.map((variant) => (
              <button
                key={variant.id}
                type="button"
                onClick={() => setSelectedVariant(variant)}
                className={`px-2 py-0.5 rounded-lg border text-[11px] font-bold transition-all cursor-pointer ${
                  selectedVariant.id === variant.id
                    ? "bg-ink text-white border-ink shadow-sticker-sm"
                    : "bg-cream text-ink-soft border-ink/20 hover:border-ink"
                }`}
              >
                {variant.label}
              </button>
            ))}
          </div>
        )}

        {/* PRICE ROW */}
        <div className="flex items-baseline gap-2 mb-4">
          <span className="font-display font-extrabold text-xl text-ink">
            {formatINR(selectedVariant.price)}
          </span>
          <span className="text-xs font-bold text-gray-400 line-through">
            {formatINR(selectedVariant.mrp)}
          </span>
          <span className="px-1.5 py-0.5 rounded-full bg-blush border border-ink text-[10px] font-extrabold text-chilli shadow-sticker-sm">
            {discountPercent}% OFF
          </span>
        </div>
      </div>

      {/* ACTION BUTTONS & STOCK STATE */}
      <div onClick={(e) => e.stopPropagation()} className="pt-2 border-t border-ink/10">
        {product.inStock ? (
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleAdd}
              className={`flex-1 sticker-btn bg-marigold hover:bg-marigold-deep text-ink py-2 px-3 text-xs font-extrabold shadow-sticker-sm flex items-center justify-center gap-1.5 cursor-pointer ${
                isCurrentItemBouncing ? "scale-105 ring-2 ring-peacock" : ""
              }`}
            >
              <ShoppingBag className="w-3.5 h-3.5 fill-ink" />
              <span>Add to Enquiry</span>
            </button>

            {product.isPartnerLink && product.partnerUrl ? (
              <a
                href={product.partnerUrl}
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="w-9 h-9 rounded-full border-2 border-ink bg-white hover:bg-cream flex items-center justify-center text-ink shadow-sticker-sm"
                title="View partner store"
              >
                <ExternalLink className="w-4 h-4 text-peacock" />
              </a>
            ) : (
              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border-2 border-ink bg-white hover:bg-cream flex items-center justify-center text-ink shadow-sticker-sm"
                title="Ask about this product on WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
              </a>
            )}
          </div>
        ) : (
          <div className="space-y-1.5">
            <span className="text-[11px] font-bold text-chilli block text-center">
              Temporarily Out of Stock
            </span>
            <a
              href={getWhatsAppLink(
                `Hi Pawfect Tails, please notify me when ${product.name} (${selectedVariant.label}) is back in stock!`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sticker-btn bg-ink text-white py-2 px-2 text-xs font-bold shadow-sticker-sm flex items-center justify-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Notify Me on WhatsApp</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
