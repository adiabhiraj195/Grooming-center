"use client";

import React from "react";
import { useBasket } from "@/context/BasketContext";
import { formatINR } from "@/lib/utils";
import { ShoppingBag } from "lucide-react";

export const BasketPill: React.FC<{ className?: string }> = ({ className = "" }) => {
  const { totalCount, totalPrice, setIsDrawerOpen, lastAddedKey } = useBasket();

  if (totalCount === 0) return null;

  const isBouncing = Boolean(lastAddedKey);

  return (
    <button
      type="button"
      onClick={() => setIsDrawerOpen(true)}
      className={`fixed bottom-20 sm:bottom-6 right-4 sm:right-8 z-40 sticker-btn bg-marigold hover:bg-marigold-deep text-ink px-4 py-3 rounded-full shadow-sticker-lg flex items-center gap-3 transition-transform cursor-pointer ${
        isBouncing ? "scale-110 ring-4 ring-peacock" : "hover:scale-105"
      } ${className}`}
      aria-label={`Open enquiry basket with ${totalCount} items totaling ${formatINR(totalPrice)}`}
    >
      <div className="relative">
        <div className="w-8 h-8 rounded-full bg-ink text-white flex items-center justify-center">
          <ShoppingBag className="w-4 h-4 fill-white" />
        </div>
        <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-chilli text-white text-[11px] font-extrabold flex items-center justify-center border border-white">
          {totalCount}
        </span>
      </div>

      <div className="text-left hidden xs:block">
        <span className="text-[11px] font-extrabold uppercase tracking-wider block text-ink-soft leading-none">
          Enquiry Basket
        </span>
        <span className="font-display font-extrabold text-sm text-ink leading-tight">
          {formatINR(totalPrice)}
        </span>
      </div>
    </button>
  );
};

