"use client";

import React from "react";

interface IconProps {
  className?: string;
  size?: number;
}

export const ScissorsIcon: React.FC<IconProps> = ({ className = "w-8 h-8", size }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={size}
    height={size}
    stroke="#1F2A44"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="14" cy="36" r="6" fill="#FFB524" />
    <circle cx="34" cy="36" r="6" fill="#FFB524" />
    <path d="M18 32 L36 10" />
    <path d="M30 32 L12 10" />
    <circle cx="24" cy="23" r="2" fill="#1F2A44" />
  </svg>
);

export const CombIcon: React.FC<IconProps> = ({ className = "w-8 h-8", size }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={size}
    height={size}
    stroke="#1F2A44"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="8" y="14" width="32" height="8" rx="4" fill="#0F766E" />
    <line x1="12" y1="22" x2="12" y2="34" />
    <line x1="17" y1="22" x2="17" y2="34" />
    <line x1="22" y1="22" x2="22" y2="34" />
    <line x1="27" y1="22" x2="27" y2="34" />
    <line x1="32" y1="22" x2="32" y2="34" />
    <line x1="36" y1="22" x2="36" y2="34" />
  </svg>
);

export const BlowDryerIcon: React.FC<IconProps> = ({ className = "w-8 h-8", size }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={size}
    height={size}
    stroke="#1F2A44"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {/* Body */}
    <rect x="8" y="12" width="22" height="14" rx="7" fill="#FF6B4A" />
    <path d="M30 15 L38 17 L38 21 L30 23 Z" fill="#FFE3E0" />
    {/* Handle */}
    <rect x="14" y="26" width="7" height="14" rx="3.5" fill="#FFB524" />
    {/* Air gusts */}
    <path d="M42 16 Q45 15 47 16" stroke="#0F766E" />
    <path d="M42 20 Q46 20 48 20" stroke="#0F766E" />
    <path d="M42 24 Q45 25 47 24" stroke="#0F766E" />
  </svg>
);

export const BathtubIcon: React.FC<IconProps> = ({ className = "w-8 h-8", size }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={size}
    height={size}
    stroke="#1F2A44"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {/* Tub body */}
    <path d="M8 24 C8 34 16 38 24 38 C32 38 40 34 40 24 Z" fill="#CDEBFA" />
    <rect x="6" y="21" width="36" height="5" rx="2.5" fill="#FFFFFF" />
    {/* Legs */}
    <path d="M12 37 L10 42" />
    <path d="M36 37 L38 42" />
    {/* Faucet */}
    <path d="M38 14 C38 10 32 10 32 14 L32 21" stroke="#0F766E" />
    {/* Water drops */}
    <circle cx="32" cy="27" r="1.5" fill="#0F766E" stroke="none" />
  </svg>
);

export const TowelIcon: React.FC<IconProps> = ({ className = "w-8 h-8", size }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={size}
    height={size}
    stroke="#1F2A44"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {/* Folded towel */}
    <rect x="10" y="12" width="28" height="10" rx="5" fill="#FFE3E0" />
    <rect x="8" y="20" width="32" height="10" rx="5" fill="#FFB524" />
    <rect x="6" y="28" width="36" height="10" rx="5" fill="#D9F2EE" />
  </svg>
);

export const NailClipperIcon: React.FC<IconProps> = ({ className = "w-8 h-8", size }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={size}
    height={size}
    stroke="#1F2A44"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {/* Pliers / clippers */}
    <path d="M16 10 C16 16 20 22 24 24" fill="none" />
    <path d="M32 10 C32 16 28 22 24 24" fill="none" />
    <rect x="12" y="24" width="8" height="16" rx="4" fill="#0F766E" />
    <rect x="28" y="24" width="8" height="16" rx="4" fill="#0F766E" />
    <circle cx="24" cy="24" r="3" fill="#FFB524" />
  </svg>
);

export const ShampooBottleIcon: React.FC<IconProps> = ({ className = "w-8 h-8", size }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={size}
    height={size}
    stroke="#1F2A44"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {/* Cap / pump */}
    <path d="M22 6 L26 6 L26 12 L22 12 Z" fill="#1F2A44" />
    <path d="M26 8 L32 8" />
    {/* Bottle body */}
    <path
      d="M16 14 C16 12 32 12 32 14 L34 38 C34 41 31 43 24 43 C17 43 14 41 14 38 Z"
      fill="#D9F2EE"
    />
    {/* Label */}
    <rect x="18" y="22" width="12" height="12" rx="3" fill="#FF6B4A" />
    {/* Paw print on label */}
    <circle cx="24" cy="29" r="1.8" fill="#FFFFFF" stroke="none" />
    <circle cx="21.5" cy="25.5" r="1" fill="#FFFFFF" stroke="none" />
    <circle cx="26.5" cy="25.5" r="1" fill="#FFFFFF" stroke="none" />
  </svg>
);

