"use client";

import React from "react";

export interface WavyDividerProps {
  fillColor?: string; // Color of the wave shape
  bgColor?: string;   // Background beneath wave
  flip?: boolean;     // Wave pointing down or up
  className?: string;
  animated?: boolean;
}

export const WavyDivider: React.FC<WavyDividerProps> = ({
  fillColor = "#FFF8EC",
  flip = false,
  className = "",
  animated = true,
}) => {
  return (
    <div
      className={`relative w-full overflow-hidden leading-none select-none pointer-events-none ${
        flip ? "rotate-180" : ""
      } ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-10 sm:h-12 md:h-20 block ${animated ? "animate-drift-wave" : ""}`}
        preserveAspectRatio="none"
      >
        <path
          d="M0,32 C240,78 480,12 720,54 C960,96 1200,24 1440,62 L1440,96 L0,96 Z"
          fill={fillColor}
        />
        {/* Subtle stroke outline along the crest of the wave */}
        <path
          d="M0,32 C240,78 480,12 720,54 C960,96 1200,24 1440,62"
          stroke="#1F2A44"
          strokeWidth="1.5"
          strokeOpacity="0.18"
          fill="none"
        />
      </svg>
    </div>
  );
};

/**
 * Marigold Garland (Toran) Strip
 * Traditional Indian festive toran with vibrant marigolds, mango leaves & marigold-deep orange blossoms
 */
export const ToranGarlandStrip: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div
      className={`w-full overflow-hidden leading-none select-none pointer-events-none py-1 relative z-10 ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-8 sm:h-10 md:h-12 max-w-full block"
        preserveAspectRatio="none"
      >
        {/* Main string cord */}
        <path
          d="M0,12 Q100,28 200,12 Q300,28 400,12 Q500,28 600,12 Q700,28 800,12 Q900,28 1000,12 Q1100,28 1200,12"
          stroke="#0F766E"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Repeating segments of mango leaves & marigold flowers */}
        {[0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100].map((x, i) => (
          <g key={i} transform={`translate(${x}, 0)`}>
            {/* Mango leaf pointing down */}
            <path
              d="M100,24 C94,30 96,44 100,48 C104,44 106,30 100,24 Z"
              fill="#0F766E"
              stroke="#1F2A44"
              strokeWidth="1.5"
            />
            {/* Fluffy Marigold flower */}
            <circle cx="100" cy="22" r="11" fill="#FFB524" stroke="#1F2A44" strokeWidth="2" />
            <circle cx="100" cy="22" r="7" fill="#E8940C" stroke="#1F2A44" strokeWidth="1.5" />
            <circle cx="100" cy="22" r="3" fill="#FF6B4A" />

            {/* Small yellow blossom on crest */}
            <circle cx="50" cy="19" r="6" fill="#FDE68A" stroke="#1F2A44" strokeWidth="1.5" />
            <circle cx="50" cy="19" r="2" fill="#E8940C" />
          </g>
        ))}
      </svg>
    </div>
  );
};

/**
 * Sparkle & Starbursts
 */
export const SparkleBurst: React.FC<{ size?: number; className?: string; color?: string }> = ({
  size = 28,
  className = "",
  color = "#FFB524",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`select-none pointer-events-none inline-block ${className}`}
    aria-hidden="true"
  >
    {/* 4-point sparkle star */}
    <path
      d="M16 2 C16 9.5 22.5 16 30 16 C22.5 16 16 22.5 16 30 C16 22.5 9.5 16 2 16 C9.5 16 16 9.5 16 2 Z"
      fill={color}
      stroke="#1F2A44"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <circle cx="25" cy="7" r="2" fill="#FF6B4A" />
    <circle cx="7" cy="25" r="1.5" fill="#0F766E" />
  </svg>
);

/**
 * Hand-drawn arrow (Caveat handwritten aesthetic)
 */
export const HandDrawnArrow: React.FC<{ className?: string; flip?: boolean }> = ({
  className = "w-16 h-12",
  flip = false,
}) => (
  <svg
    viewBox="0 0 64 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`select-none pointer-events-none ${flip ? "-scale-x-100" : ""} ${className}`}
    aria-hidden="true"
  >
    <path
      d="M8 36 C 24 16, 42 12, 54 22"
      stroke="#1F2A44"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeDasharray="2 1"
      fill="none"
    />
    {/* Arrowhead */}
    <path
      d="M44 14 L55 23 L42 28"
      stroke="#1F2A44"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

