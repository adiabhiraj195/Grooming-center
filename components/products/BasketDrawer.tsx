"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useBasket } from "@/context/BasketContext";
import { formatINR } from "@/lib/utils";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { SHOP_DATA } from "@/data/shop";
import {
  X,
  Plus,
  Minus,
  Trash2,
  MessageCircle,
  ShoppingBag,
  Store,
  Calendar,
} from "lucide-react";

export const BasketDrawer: React.FC = () => {
  const {
    items,
    removeFromBasket,
    updateQuantity,
    totalCount,
    totalPrice,
    isDrawerOpen,
    setIsDrawerOpen,
    fulfillmentMethod,
    setFulfillmentMethod,
  } = useBasket();

  const drawerRef = useRef<HTMLDivElement>(null);

  // Close on Escape & Lock body scroll
  useEffect(() => {
    if (!isDrawerOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsDrawerOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isDrawerOpen, setIsDrawerOpen]);

  if (!isDrawerOpen) return null;

  // Build clean single itemised WhatsApp message
  const fulfillmentText =
    fulfillmentMethod === "store-pickup"
      ? `🏪 Pick-up in store (${SHOP_DATA.area}, ${SHOP_DATA.city})`
      : "🛁 Add to my upcoming grooming or clinic visit";

  const itemListText = items
    .map(
      (item, idx) =>
        `${idx + 1}. *${item.product.name}*\n   Variant: ${item.variant.label}\n   Qty: ${item.quantity} × ${formatINR(item.variant.price)} = ${formatINR(item.variant.price * item.quantity)}`
    )
    .join("\n\n");

  const fullWhatsAppMessage = [
    `🐾 *Product Enquiry & Order Request* 🐾`,
    `Hello ${SHOP_DATA.name}! I would like to enquire about purchasing these products:`,
    ``,
    itemListText,
    ``,
    `💰 *Estimated Total:* ${formatINR(totalPrice)}`,
    `📦 *Fulfillment Preference:* ${fulfillmentText}`,
    ``,
    `Please confirm product availability and pickup timing at your ${SHOP_DATA.area} parlour. Thank you!`,
  ].join("\n");

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-ink/60 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="basket-drawer-title"
      onClick={() => setIsDrawerOpen(false)}
    >
      <div
        ref={drawerRef}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between border-l-3 border-ink animate-in slide-in-from-right duration-300 relative"
      >
        {/* HEADER */}
        <div className="p-5 border-b-2 border-ink flex items-center justify-between bg-cream">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-full bg-marigold border-2 border-ink flex items-center justify-center text-ink shadow-sticker-sm">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 id="basket-drawer-title" className="font-display font-extrabold text-lg text-ink">
                Enquiry Basket
              </h3>
              <p className="text-xs text-ink-soft font-bold">
                {totalCount} {totalCount === 1 ? "item" : "items"} selected
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsDrawerOpen(false)}
            className="w-9 h-9 rounded-full border-2 border-ink bg-white hover:bg-blush flex items-center justify-center text-ink shadow-sticker-sm transition-transform hover:scale-105 cursor-pointer"
            aria-label="Close drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* ITEMS LIST */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 text-ink-soft">
              <span className="text-4xl mb-3">🧺 🐾</span>
              <h4 className="font-display font-bold text-lg text-ink mb-1">
                Your basket is empty
              </h4>
              <p className="text-xs max-w-xs mb-6">
                Browse our Groomer&apos;s Shelf above to add natural shampoos, healthy treats, and toys.
              </p>
              <button
                type="button"
                onClick={() => setIsDrawerOpen(false)}
                className="sticker-btn bg-marigold text-ink px-6 py-2.5 text-xs font-bold shadow-sticker"
              >
                Browse Products
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={`${item.product.id}-${item.variant.id}`}
                className="sticker-card p-3.5 bg-white border-2 border-ink flex gap-3 items-center justify-between"
              >
                <div className="relative w-16 h-16 rounded-xl border border-ink/30 overflow-hidden shrink-0 bg-cream">
                  <Image
                    src={item.product.imageUrl}
                    alt={item.product.name}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <h5 className="font-display font-bold text-xs text-ink line-clamp-1">
                    {item.product.name}
                  </h5>
                  <span className="text-[11px] font-bold text-peacock block">
                    {item.variant.label} • {formatINR(item.variant.price)}
                  </span>

                  {/* QUANTITY STEPPERS */}
                  <div className="flex items-center gap-2 mt-2">
                    <div className="inline-flex items-center rounded-lg border border-ink bg-cream p-0.5">
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(
                            item.product.id,
                            item.variant.id,
                            item.quantity - 1
                          )
                        }
                        className="w-6 h-6 flex items-center justify-center rounded hover:bg-white text-ink text-xs font-bold cursor-pointer"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-7 text-center font-extrabold text-xs text-ink">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(
                            item.product.id,
                            item.variant.id,
                            item.quantity + 1
                          )
                        }
                        className="w-6 h-6 flex items-center justify-center rounded hover:bg-white text-ink text-xs font-bold cursor-pointer"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <span className="font-display font-extrabold text-xs text-ink ml-auto">
                      {formatINR(item.variant.price * item.quantity)}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    removeFromBasket(item.product.id, item.variant.id)
                  }
                  className="p-1.5 rounded-lg text-ink-soft hover:text-chilli transition-colors cursor-pointer"
                  aria-label="Remove item"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* FOOTER & CHECKOUT VIA WHATSAPP */}
        {items.length > 0 && (
          <div className="p-5 border-t-2 border-ink bg-cream space-y-4">
            {/* FULFILLMENT PREFERENCE OPTIONS */}
            <div>
              <span className="block text-[11px] font-extrabold uppercase tracking-wider text-ink-soft mb-2">
                How would you like to receive this?
              </span>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setFulfillmentMethod("store-pickup")}
                  className={`p-2.5 rounded-xl border-2 text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
                    fulfillmentMethod === "store-pickup"
                      ? "bg-marigold border-ink shadow-sticker-sm text-ink"
                      : "bg-white border-ink/20 text-ink-soft hover:border-ink"
                  }`}
                >
                  <Store className="w-4 h-4 shrink-0" />
                  <span className="text-left leading-tight">Pick up in store</span>
                </button>

                <button
                  type="button"
                  onClick={() => setFulfillmentMethod("add-to-appointment")}
                  className={`p-2.5 rounded-xl border-2 text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
                    fulfillmentMethod === "add-to-appointment"
                      ? "bg-peacock border-ink shadow-sticker-sm text-white"
                      : "bg-white border-ink/20 text-ink-soft hover:border-ink"
                  }`}
                >
                  <Calendar className="w-4 h-4 shrink-0" />
                  <span className="text-left leading-tight">Add to appointment</span>
                </button>
              </div>
            </div>

            {/* ESTIMATE TOTAL */}
            <div className="flex items-baseline justify-between pt-2 border-t border-ink/10">
              <span className="text-xs font-bold uppercase tracking-wider text-ink-soft">
                Estimated Total:
              </span>
              <span className="font-display font-extrabold text-2xl text-ink">
                {formatINR(totalPrice)}
              </span>
            </div>

            {/* WHATSAPP CTA */}
            <a
              href={getWhatsAppLink(fullWhatsAppMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sticker-btn bg-[#25D366] hover:bg-[#1EBE5D] text-white py-3.5 text-sm md:text-base font-extrabold shadow-sticker flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Send Enquiry on WhatsApp</span>
            </a>

            <p className="text-[10px] text-center text-ink-soft">
              No online card payment required • Pay UPI/Cash at counter or upon delivery
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
