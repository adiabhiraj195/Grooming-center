"use client";

import React from "react";

export interface MishtiCatProps {
  className?: string;
}

export const MishtiCat: React.FC<MishtiCatProps> = ({ className = "w-44 h-44" }) => {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none overflow-visible ${className}`}
      aria-label="Mishti the cream cat enjoying a bubble bath"
      role="img"
    >
      <defs>
        <ellipse id="tub-shadow" cx="100" cy="190" rx="65" ry="8" fill="#1F2A44" fillOpacity="0.15" />
        <linearGradient id="cat-fur" x1="60" y1="40" x2="140" y2="120" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFDF7" />
          <stop offset="1" stopColor="#FEEBC8" />
        </linearGradient>
      </defs>

      {/* Shadow */}
      <use href="#tub-shadow" />

      {/* Bathtub legs */}
      <path d="M50 165 L44 185 C42 188 45 190 48 188 L55 172" fill="#0F766E" stroke="#1F2A44" strokeWidth="2.5" />
      <path d="M150 165 L156 185 C158 188 155 190 152 188 L145 172" fill="#0F766E" stroke="#1F2A44" strokeWidth="2.5" />

      {/* Bathtub body */}
      <path
        d="M35 125 C 32 165, 55 178, 100 178 C 145 178, 168 165, 165 125 Z"
        fill="#FFFFFF"
        stroke="#1F2A44"
        strokeWidth="3"
      />
      {/* Tub rim */}
      <rect x="28" y="118" width="144" height="12" rx="6" fill="#D9F2EE" stroke="#1F2A44" strokeWidth="3" />

      {/* CAT BEHIND BUBBLES */}
      <g id="mishti-cat">
        {/* Cat ears */}
        <path d="M72 70 L60 38 C58 35 63 32 67 36 L86 64 Z" fill="#FEEBC8" stroke="#1F2A44" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M68 58 L62 44 L76 58 Z" fill="#FF8A7A" fillOpacity="0.6" />

        <path d="M128 70 L140 38 C142 35 137 32 133 36 L114 64 Z" fill="#FEEBC8" stroke="#1F2A44" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M132 58 L138 44 L124 58 Z" fill="#FF8A7A" fillOpacity="0.6" />

        {/* Head */}
        <circle cx="100" cy="80" r="34" fill="url(#cat-fur)" stroke="#1F2A44" strokeWidth="3" />

        {/* Cheeks */}
        <circle cx="78" cy="88" r="6" fill="#FF8A7A" fillOpacity="0.45" />
        <circle cx="122" cy="88" r="6" fill="#FF8A7A" fillOpacity="0.45" />

        {/* Sweet eyes (calm / blinking happy curves) */}
        <path d="M84 76 Q91 70 95 77" stroke="#1F2A44" strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M105 77 Q109 70 116 76" stroke="#1F2A44" strokeWidth="3" strokeLinecap="round" fill="none" />

        {/* Tiny nose & mouth */}
        <polygon points="98,82 102,82 100,85" fill="#FF6B4A" />
        <path d="M96 87 Q100 90 100 85 Q100 90 104 87" stroke="#1F2A44" strokeWidth="2" strokeLinecap="round" fill="none" />

        {/* Whiskers */}
        <path d="M72 84 L58 82 M71 87 L56 89" stroke="#1F2A44" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M128 84 L142 82 M129 87 L144 89" stroke="#1F2A44" strokeWidth="1.5" strokeLinecap="round" />

        {/* Tiny shampoo bubble on Mishti's head */}
        <circle cx="94" cy="46" r="7" fill="#CDEBFA" stroke="#1F2A44" strokeWidth="2" />
        <circle cx="92" cy="44" r="2" fill="#FFFFFF" />
        <circle cx="105" cy="42" r="5" fill="#CDEBFA" stroke="#1F2A44" strokeWidth="2" />
      </g>

      {/* OVERFLOWING BATH BUBBLES */}
      <g id="bath-bubbles">
        <circle cx="48" cy="118" r="14" fill="#CDEBFA" stroke="#1F2A44" strokeWidth="2.5" />
        <circle cx="44" cy="114" r="3.5" fill="#FFFFFF" />

        <circle cx="72" cy="122" r="16" fill="#CDEBFA" stroke="#1F2A44" strokeWidth="2.5" />
        <circle cx="68" cy="117" r="4" fill="#FFFFFF" />

        <circle cx="100" cy="120" r="18" fill="#E0F2FE" stroke="#1F2A44" strokeWidth="2.5" />
        <circle cx="95" cy="114" r="4.5" fill="#FFFFFF" />

        <circle cx="128" cy="123" r="15" fill="#CDEBFA" stroke="#1F2A44" strokeWidth="2.5" />
        <circle cx="124" cy="118" r="3.5" fill="#FFFFFF" />

        <circle cx="152" cy="119" r="13" fill="#CDEBFA" stroke="#1F2A44" strokeWidth="2.5" />
        <circle cx="149" cy="115" r="3" fill="#FFFFFF" />

        {/* Little cat paw resting on the tub edge */}
        <g id="resting-paw">
          <ellipse cx="68" cy="118" rx="8" ry="10" fill="url(#cat-fur)" stroke="#1F2A44" strokeWidth="2.5" />
          <path d="M65 125 L65 120 M70 125 L70 120" stroke="#1F2A44" strokeWidth="1.75" strokeLinecap="round" />
        </g>
      </g>
    </svg>
  );
};

