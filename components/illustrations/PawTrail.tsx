"use client";

import React from "react";

export interface PawTrailProps {
  className?: string;
  count?: number;
  color?: string;
}

export const PawTrail: React.FC<PawTrailProps> = ({
  className = "w-full h-12 flex items-center justify-around",
  count = 7,
  color = "#1F2A44",
}) => {
  const prints = Array.from({ length: count }, (_, i) => ({
    id: i,
    rotate: i % 2 === 0 ? 18 : -18,
    offsetY: i % 2 === 0 ? -6 : 6,
    delay: `${i * 0.4}s`,
  }));

  return (
    <div className={`overflow-hidden select-none pointer-events-none py-2 ${className}`} aria-hidden="true">
      <div className="flex w-full items-center justify-between px-6 opacity-30">
        {prints.map((p) => (
          <div
            key={p.id}
            style={{
              transform: `translateY(${p.offsetY}px) rotate(${p.rotate}deg)`,
              animation: `pulseRing 3.5s ease-in-out infinite`,
              animationDelay: p.delay,
            }}
          >
            <SinglePawPrint size={24} color={color} />
          </div>
        ))}
      </div>
    </div>
  );
};

export const SinglePawPrint: React.FC<{ size?: number; color?: string; className?: string }> = ({
  size = 28,
  color = "#1F2A44",
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Main Palm Pad */}
    <path
      d="M16 16 C11 16 9 20 11 25 C12 28 15 29 16 29 C17 29 20 28 21 25 C23 20 21 16 16 16 Z"
      fill={color}
    />
    {/* 4 Toes */}
    <ellipse cx="8.5" cy="14" rx="2.5" ry="3.5" transform="rotate(-20 8.5 14)" fill={color} />
    <ellipse cx="13" cy="9.5" rx="2.5" ry="3.8" transform="rotate(-8 13 9.5)" fill={color} />
    <ellipse cx="19" cy="9.5" rx="2.5" ry="3.8" transform="rotate(8 19 9.5)" fill={color} />
    <ellipse cx="23.5" cy="14" rx="2.5" ry="3.5" transform="rotate(20 23.5 14)" fill={color} />
  </svg>
);

