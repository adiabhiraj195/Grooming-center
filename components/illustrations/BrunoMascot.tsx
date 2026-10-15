"use client";

import React from "react";

export interface BrunoMascotProps {
  variant?: "happy" | "tilted" | "bathing" | "hero" | "empty";
  className?: string;
  wagTail?: boolean;
  flopEars?: boolean;
  tiltAngle?: number;
  size?: number;
}

export const BrunoMascot: React.FC<BrunoMascotProps> = ({
  variant = "happy",
  className = "w-48 h-48",
  wagTail = true,
  flopEars = false,
  tiltAngle = 0,
}) => {
  const isTilted = variant === "tilted" || variant === "empty";
  const effectiveTilt = isTilted ? 18 : tiltAngle;

  return (
    <svg
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none overflow-visible ${className}`}
      aria-label="Bruno the golden Indie dog mascot wearing a shower cap"
      role="img"
    >
      <defs>
        {/* Soft shadow under Bruno */}
        <ellipse id="ground-shadow" cx="120" cy="225" rx="70" ry="10" fill="#1F2A44" fillOpacity="0.12" />
        
        {/* Fur gradients */}
        <linearGradient id="bruno-fur" x1="60" y1="60" x2="180" y2="200" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FBBF24" />
          <stop offset="1" stopColor="#E8940C" />
        </linearGradient>

        <linearGradient id="bruno-belly" x1="100" y1="120" x2="140" y2="210" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FEF3C7" />
          <stop offset="1" stopColor="#FDE68A" />
        </linearGradient>

        {/* Shower cap gradient */}
        <linearGradient id="shower-cap-grad" x1="70" y1="20" x2="170" y2="80" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E0F2FE" />
          <stop offset="1" stopColor="#BAE6FD" />
        </linearGradient>
      </defs>

      {/* Ground shadow */}
      <use href="#ground-shadow" />

      {/* TAIL (Animatable wag group) */}
      <g
        id="bruno-tail"
        className={wagTail ? "animate-tail-wag" : ""}
        style={{ transformOrigin: "175px 175px" }}
      >
        <path
          d="M175 175 C 195 160, 220 145, 215 125 C 210 110, 195 125, 185 145 C 178 158, 172 168, 170 175 Z"
          fill="url(#bruno-fur)"
          stroke="#1F2A44"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        {/* Tail tip fluff */}
        <circle cx="215" cy="123" r="6" fill="#FEF3C7" stroke="#1F2A44" strokeWidth="2.5" />
      </g>

      {/* BODY & PAWS */}
      <g id="bruno-body">
        {/* Back legs */}
        <ellipse cx="75" cy="188" rx="22" ry="16" fill="url(#bruno-fur)" stroke="#1F2A44" strokeWidth="3" />
        <ellipse cx="165" cy="188" rx="22" ry="16" fill="url(#bruno-fur)" stroke="#1F2A44" strokeWidth="3" />

        {/* Main torso */}
        <path
          d="M80 140 C 75 180, 85 210, 120 212 C 155 210, 165 180, 160 140 C 150 115, 90 115, 80 140 Z"
          fill="url(#bruno-fur)"
          stroke="#1F2A44"
          strokeWidth="3"
        />

        {/* Cream chest/belly patch */}
        <path
          d="M100 135 C 95 165, 105 198, 120 200 C 135 198, 145 165, 140 135 C 130 145, 110 145, 100 135 Z"
          fill="url(#bruno-belly)"
          stroke="#1F2A44"
          strokeWidth="2"
          strokeDasharray="4 3"
        />

        {/* Front paws */}
        <g id="front-paws">
          {/* Left front paw */}
          <rect x="94" y="180" width="18" height="34" rx="9" fill="url(#bruno-fur)" stroke="#1F2A44" strokeWidth="3" />
          <path d="M99 214 L99 207 M105 214 L105 207" stroke="#1F2A44" strokeWidth="2.5" strokeLinecap="round" />

          {/* Right front paw */}
          <rect x="128" y="180" width="18" height="34" rx="9" fill="url(#bruno-fur)" stroke="#1F2A44" strokeWidth="3" />
          <path d="M133 214 L133 207 M139 214 L139 207" stroke="#1F2A44" strokeWidth="2.5" strokeLinecap="round" />
        </g>
      </g>

      {/* HEAD (Tiltable / Animatable group) */}
      <g
        id="bruno-head-assembly"
        style={{
          transform: `rotate(${effectiveTilt}deg)`,
          transformOrigin: "120px 120px",
          transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
      >
        {/* EARS (Floppy group) */}
        <g id="bruno-ears" className={flopEars ? "animate-ear-flop" : ""}>
          {/* Left Ear */}
          <path
            d="M75 85 C 55 90, 48 125, 60 145 C 68 155, 78 145, 78 125 C 78 105, 75 90, 75 85 Z"
            fill="#D97706"
            stroke="#1F2A44"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          {/* Right Ear */}
          <path
            d="M165 85 C 185 90, 192 125, 180 145 C 172 155, 162 145, 162 125 C 162 105, 165 85, 165 85 Z"
            fill="#D97706"
            stroke="#1F2A44"
            strokeWidth="3"
            strokeLinejoin="round"
          />
        </g>

        {/* Head Main Shape */}
        <circle cx="120" cy="105" r="46" fill="url(#bruno-fur)" stroke="#1F2A44" strokeWidth="3" />

        {/* Rosy Cheeks */}
        <circle cx="86" cy="116" r="8" fill="#FF8A7A" fillOpacity="0.45" />
        <circle cx="154" cy="116" r="8" fill="#FF8A7A" fillOpacity="0.45" />

        {/* Snout / Muzzle */}
        <ellipse cx="120" cy="120" rx="24" ry="17" fill="url(#bruno-belly)" stroke="#1F2A44" strokeWidth="3" />

        {/* Cute Big Nose */}
        <path
          d="M112 110 C 112 107, 128 107, 128 110 C 128 116, 123 120, 120 120 C 117 120, 112 116, 112 110 Z"
          fill="#1F2A44"
        />
        <ellipse cx="117" cy="111" rx="2.5" ry="1.2" fill="#FFFFFF" />

        {/* Snout centerline & smile */}
        <path d="M120 120 L120 126" stroke="#1F2A44" strokeWidth="2.5" strokeLinecap="round" />
        <path
          d="M110 125 Q120 134 130 125"
          fill="none"
          stroke="#1F2A44"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Happy open tongue */}
        <path
          d="M116 128 C 116 137, 124 137, 124 128 Z"
          fill="#FF6B4A"
          stroke="#1F2A44"
          strokeWidth="2"
        />

        {/* EYES (Animatable) */}
        <g id="bruno-eyes">
          {variant === "empty" ? (
            /* Curious question-mark brows / squint for empty state */
            <>
              <circle cx="102" cy="98" r="6.5" fill="#1F2A44" />
              <circle cx="104" cy="96" r="2" fill="#FFFFFF" />
              <circle cx="138" cy="96" r="8" fill="#1F2A44" />
              <circle cx="140" cy="94" r="3" fill="#FFFFFF" />
              <path d="M96 88 Q103 84 110 89" stroke="#1F2A44" strokeWidth="3" strokeLinecap="round" fill="none" />
              <path d="M132 84 Q140 78 148 85" stroke="#1F2A44" strokeWidth="3" strokeLinecap="round" fill="none" />
            </>
          ) : (
            /* Big, loving, sparkly Disney-style eyes */
            <>
              {/* Left Eye */}
              <ellipse cx="101" cy="98" rx="7.5" ry="9" fill="#1F2A44" />
              <circle cx="98.5" cy="95" r="3" fill="#FFFFFF" />
              <circle cx="104" cy="102" r="1.5" fill="#FFFFFF" />

              {/* Right Eye */}
              <ellipse cx="139" cy="98" rx="7.5" ry="9" fill="#1F2A44" />
              <circle cx="136.5" cy="95" r="3" fill="#FFFFFF" />
              <circle cx="142" cy="102" r="1.5" fill="#FFFFFF" />

              {/* Happy Eyebrow Dots */}
              <ellipse cx="98" cy="84" rx="3.5" ry="2.2" fill="#D97706" />
              <ellipse cx="142" cy="84" rx="3.5" ry="2.2" fill="#D97706" />
            </>
          )}
        </g>

        {/* SHOWER CAP (Cute sky-bubble shower cap with ruffled elastic band) */}
        <g id="bruno-shower-cap">
          {/* Cap puff dome */}
          <path
            d="M80 75 C 72 45, 95 30, 120 30 C 145 30, 168 45, 160 75 Z"
            fill="url(#shower-cap-grad)"
            stroke="#1F2A44"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          {/* White shine on cap */}
          <path
            d="M95 44 C 105 37, 125 36, 138 39"
            stroke="#FFFFFF"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />
          {/* Elastic ruffle band */}
          <path
            d="M74 74 Q78 70 82 74 Q86 78 90 74 Q94 70 98 74 Q102 78 106 74 Q110 70 114 74 Q118 78 122 74 Q126 70 130 74 Q134 78 138 74 Q142 70 146 74 Q150 78 154 74 Q158 70 162 74 Q166 78 170 74"
            fill="none"
            stroke="#1F2A44"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Tiny top bow / knot */}
          <ellipse cx="120" cy="28" rx="5" ry="3.5" fill="#FF6B4A" stroke="#1F2A44" strokeWidth="2" />
        </g>
      </g>
    </svg>
  );
};

