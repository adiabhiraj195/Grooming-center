"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { ProductItem, ProductVariant } from "@/data/products";

export interface BasketItem {
  product: ProductItem;
  variant: ProductVariant;
  quantity: number;
}

export type FulfillmentMethod = "store-pickup" | "add-to-appointment";

interface BasketContextType {
  items: BasketItem[];
  addToBasket: (product: ProductItem, variant: ProductVariant, quantity?: number) => void;
  removeFromBasket: (productId: string, variantId: string) => void;
  updateQuantity: (productId: string, variantId: string, quantity: number) => void;
  clearBasket: () => void;
  totalCount: number;
  totalPrice: number;
  isDrawerOpen: boolean;
  setIsDrawerOpen: (open: boolean) => void;
  fulfillmentMethod: FulfillmentMethod;
  setFulfillmentMethod: (method: FulfillmentMethod) => void;
  lastAddedKey: string | null;
}

const BasketContext = createContext<BasketContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = "pawfect_enquiry_basket";

export const BasketProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<BasketItem[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn("[Basket] Could not load stored enquiry basket:", e);
    }
    return [];
  });

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [fulfillmentMethod, setFulfillmentMethod] = useState<FulfillmentMethod>("store-pickup");
  const [lastAddedKey, setLastAddedKey] = useState<string | null>(null);

  // Save to localStorage safely on changes
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.warn("[Basket] Could not persist enquiry basket:", e);
    }
  }, [items]);

  const addToBasket = (product: ProductItem, variant: ProductVariant, quantity = 1) => {
    const key = `${product.id}-${variant.id}`;
    setLastAddedKey(key);

    setItems((prev) => {
      const existingIndex = prev.findIndex(
        (i) => i.product.id === product.id && i.variant.id === variant.id
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
        };
        return updated;
      }

      return [...prev, { product, variant, quantity }];
    });

    // Reset last added key after bounce duration
    setTimeout(() => {
      setLastAddedKey(null);
    }, 1200);
  };

  const removeFromBasket = (productId: string, variantId: string) => {
    setItems((prev) =>
      prev.filter((i) => !(i.product.id === productId && i.variant.id === variantId))
    );
  };

  const updateQuantity = (productId: string, variantId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromBasket(productId, variantId);
      return;
    }

    setItems((prev) =>
      prev.map((i) =>
        i.product.id === productId && i.variant.id === variantId
          ? { ...i, quantity }
          : i
      )
    );
  };

  const clearBasket = () => {
    setItems([]);
  };

  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.variant.price * item.quantity, 0);

  return (
    <BasketContext.Provider
      value={{
        items,
        addToBasket,
        removeFromBasket,
        updateQuantity,
        clearBasket,
        totalCount,
        totalPrice,
        isDrawerOpen,
        setIsDrawerOpen,
        fulfillmentMethod,
        setFulfillmentMethod,
        lastAddedKey,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export function useBasket() {
  const context = useContext(BasketContext);
  if (!context) {
    throw new Error("useBasket must be used within a BasketProvider");
  }
  return context;
}
