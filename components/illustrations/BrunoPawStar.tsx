"use client";

import React from "react";

export interface BrunoPawStarProps {
  className?: string;
  size?: number;
  celebrating?: boolean;
}

export const BrunoPawStar: React.FC<BrunoPawStarProps> = ({
  className = "w-44 h-44",
  celebrating = false,
}) => {
  return (
    <svg
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none overflow-visible ${className}`}
      aria-label="Bruno mascot holding a golden paw star"
      role="img"
    >
      <defs>
        {/* Soft shadow */}
        <ellipse id="bps-shadow" cx="120" cy="225" rx="65" ry="9" fill="#1F2A44" fillOpacity="0.15" />

        {/* Fur gradients */}
        <linearGradient id="bps-fur" x1="60" y1="60" x2="180" y2="200" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FBBF24" />
          <stop offset="1" stopColor="#E8940C" />
        </linearGradient>

        <linearGradient id="bps-belly" x1="100" y1="120" x2="140" y2="210" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FEF3C7" />
          <stop offset="1" stopColor="#FDE68A" />
        </linearGradient>

        {/* Golden star gradient */}
        <linearGradient id="bps-star-grad" x1="140" y1="40" x2="210" y2="120" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFEA79" />
          <stop offset="1" stopColor="#FFB524" />
        </linearGradient>
      </defs>

      {/* Shadow */}
      <use href="#bps-shadow" />

      {/* WAGGING TAIL */}
      <g className="animate-tail-wag" style={{ transformOrigin: "175px 175px" }}>
        <path
          d="M175 175 C 195 160, 220 145, 215 125 C 210 110, 195 125, 185 145 C 178 158, 172 168, 170 175 Z"
          fill="url(#bps-fur)"
          stroke="#1F2A44"
          strokeWidth="3"
        />
        <circle cx="215" cy="123" r="6" fill="#FEF3C7" stroke="#1F2A44" strokeWidth="2.5" />
      </g>

      {/* BODY */}
      <g>
        {/* Back legs */}
        <ellipse cx="75" cy="188" rx="22" ry="16" fill="url(#bps-fur)" stroke="#1F2A44" strokeWidth="3" />
        <ellipse cx="165" cy="188" rx="22" ry="16" fill="url(#bps-fur)" stroke="#1F2A44" strokeWidth="3" />

        {/* Main torso */}
        <path
          d="M80 140 C 75 180, 85 210, 120 212 C 155 210, 165 180, 160 140 C 150 115, 90 115, 80 140 Z"
          fill="url(#bps-fur)"
          stroke="#1F2A44"
          strokeWidth="3"
        />

        {/* Belly patch */}
        <path
          d="M100 135 C 95 165, 105 198, 120 200 C 135 198, 145 165, 140 135 C 130 145, 110 145, 100 135 Z"
          fill="url(#bps-belly)"
          stroke="#1F2A44"
          strokeWidth="2"
          strokeDasharray="4 3"
        />

        {/* Left sitting paw */}
        <rect x="94" y="180" width="18" height="34" rx="9" fill="url(#bps-fur)" stroke="#1F2A44" strokeWidth="3" />
        <path d="M99 214 L99 207 M105 214 L105 207" stroke="#1F2A44" strokeWidth="2.5" strokeLinecap="round" />
      </g>

      {/* HEAD */}
      <g style={{ transform: "rotate(4deg)", transformOrigin: "120px 120px" }}>
        {/* Ears */}
        <path
          d="M75 85 C 55 90, 48 125, 60 145 C 68 155, 78 145, 78 125 C 78 105, 75 90, 75 85 Z"
          fill="#D97706"
          stroke="#1F2A44"
          strokeWidth="3"
        />
        <path
          d="M165 85 C 185 90, 192 125, 180 145 C 172 155, 162 145, 162 125 C 162 105, 165 85, 165 85 Z"
          fill="#D97706"
          stroke="#1F2A44"
          strokeWidth="3"
        />

        {/* Head */}
        <circle cx="120" cy="105" r="46" fill="url(#bps-fur)" stroke="#1F2A44" strokeWidth="3" />

        {/* Rosy cheeks */}
        <circle cx="86" cy="116" r="8" fill="#FF8A7A" fillOpacity="0.45" />
        <circle cx="154" cy="116" r="8" fill="#FF8A7A" fillOpacity="0.45" />

        {/* Muzzle */}
        <ellipse cx="120" cy="120" rx="24" ry="17" fill="url(#bps-belly)" stroke="#1F2A44" strokeWidth="3" />

        {/* Big nose */}
        <path
          d="M112 110 C 112 107, 128 107, 128 110 C 128 116, 123 120, 120 120 C 117 120, 112 116, 112 110 Z"
          fill="#1F2A44"
        />
        <ellipse cx="117" cy="111" rx="2.5" ry="1.2" fill="#FFFFFF" />

        {/* Smile and tongue */}
        <path d="M120 120 L120 126" stroke="#1F2A44" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M110 125 Q120 134 130 125" fill="none" stroke="#1F2A44" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M116 128 C 116 137, 124 137, 124 128 Z" fill="#FF6B4A" stroke="#1F2A44" strokeWidth="2" />

        {/* Sparkling happy eyes */}
        <ellipse cx="101" cy="98" rx="7.5" ry="9" fill="#1F2A44" />
        <circle cx="98.5" cy="95" r="3" fill="#FFFFFF" />
        <circle cx="104" cy="102" r="1.5" fill="#FFFFFF" />

        <ellipse cx="139" cy="98" rx="7.5" ry="9" fill="#1F2A44" />
        <circle cx="136.5" cy="95" r="3" fill="#FFFFFF" />
        <circle cx="142" cy="102" r="1.5" fill="#FFFFFF" />

        {/* Eyebrows */}
        <ellipse cx="98" cy="84" rx="3.5" ry="2.2" fill="#D97706" />
        <ellipse cx="142" cy="84" rx="3.5" ry="2.2" fill="#D97706" />

        {/* Shower Cap with knot */}
        <path
          d="M80 75 C 72 45, 95 30, 120 30 C 145 30, 168 45, 160 75 Z"
          fill="#CDEBFA"
          stroke="#1F2A44"
          strokeWidth="3"
        />
        <path
          d="M74 74 Q80 70 86 74 Q92 78 98 74 Q104 70 110 74 Q116 78 122 74 Q128 70 134 74 Q140 78 146 74 Q152 70 158 74 Q164 78 170 74"
          fill="none"
          stroke="#1F2A44"
          strokeWidth="3"
        />
        <ellipse cx="120" cy="28" rx="5" ry="3.5" fill="#FF6B4A" stroke="#1F2A44" strokeWidth="2" />
      </g>

      {/* RAISED ARM HOLDING THE PAW STAR */}
      <g id="raised-arm-star">
        {/* Arm reaching up toward star */}
        <path
          d="M135 150 C 150 135, 165 110, 172 88"
          stroke="url(#bps-fur)"
          strokeWidth="18"
          strokeLinecap="round"
        />
        <path
          d="M135 150 C 150 135, 165 110, 172 88"
          stroke="#1F2A44"
          strokeWidth="3"
          fill="none"
        />
        {/* Paw holding base of star */}
        <circle cx="173" cy="84" r="11" fill="url(#bps-fur)" stroke="#1F2A44" strokeWidth="2.5" />
        <ellipse cx="170" cy="80" rx="3" ry="2" fill="#FEF3C7" />
        <ellipse cx="176" cy="80" rx="3" ry="2" fill="#FEF3C7" />

        {/* BIG GLOWING PAW-STAR */}
        <g className="animate-bounce-subtle" style={{ transformOrigin: "185px 55px" }}>
          {/* Star polygon */}
          <polygon
            points="185,25 194,48 218,48 198,62 205,86 185,71 165,86 172,62 152,48 176,48"
            fill="url(#bps-star-grad)"
            stroke="#1F2A44"
            strokeWidth="3"
            strokeLinejoin="round"
            filter="drop-shadow(2px 3px 0 #1F2A44)"
          />

          {/* Paw print imprint inside the star */}
          <g transform="translate(185, 57) scale(0.65) translate(-16, -16)">
            {/* Main paw pad */}
            <path
              d="M11 20 C 11 16, 21 16, 21 20 C 21 25, 11 25, 11 20 Z"
              fill="#1F2A44"
            />
            {/* 4 toe pads */}
            <circle cx="9" cy="14" r="2.5" fill="#1F2A44" />
            <circle cx="13.5" cy="11.5" r="2.5" fill="#1F2A44" />
            <circle cx="18.5" cy="11.5" r="2.5" fill="#1F2A44" />
            <circle cx="23" cy="14" r="2.5" fill="#1F2A44" />
          </g>

          {/* Sparkles around star */}
          <path d="M222 30 L226 26 M222 26 L226 30" stroke="#FF6B4A" strokeWidth="2" strokeLinecap="round" />
          <path d="M150 32 L154 28 M150 28 L154 32" stroke="#FFB524" strokeWidth="2" strokeLinecap="round" />
          <circle cx="218" cy="72" r="2.5" fill="#0F766E" />
          <circle cx="156" cy="68" r="2" fill="#FF6B4A" />
        </g>
      </g>

      {/* CELEBRATION SPEECH BALLOON IF ACTIVE */}
      {celebrating && (
        <g className="animate-in fade-in zoom-in duration-300">
          <rect x="20" y="24" width="75" height="34" rx="12" fill="#FFFFFF" stroke="#1F2A44" strokeWidth="2.5" filter="drop-shadow(3px 3px 0 #1F2A44)" />
          <text x="32" y="46" fill="#0F766E" fontSize="13" fontWeight="bold" fontFamily="sans-serif">
            Thank You! 🐾
          </text>
        </g>
      )}
    </svg>
  );
};

