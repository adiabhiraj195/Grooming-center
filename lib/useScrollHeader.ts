"use client";

import { useState, useEffect, useRef } from "react";

export interface UseScrollHeaderOptions {
  threshold?: number;
  minScrollY?: number;
}

/**
 * Hook to track scroll direction and control top header / panel visibility:
 * - Hides when user scrolls down (beyond minScrollY)
 * - Becomes visible when user scrolls up
 * - Always stays visible when near the top (<= minScrollY)
 */
export function useScrollHeader(options: UseScrollHeaderOptions = {}) {
  const { threshold = 10, minScrollY = 30 } = options;
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    lastScrollY.current = Math.max(0, window.scrollY);

    const handleScroll = () => {
      const currentScrollY = Math.max(0, window.scrollY);
      const diff = currentScrollY - lastScrollY.current;

      // Always visible when near the top of the page
      if (currentScrollY <= minScrollY) {
        setIsVisible(true);
      } else if (Math.abs(diff) >= threshold) {
        // Scrolling down: hide; Scrolling up: show
        if (diff > 0) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold, minScrollY]);

  return isVisible;
}

