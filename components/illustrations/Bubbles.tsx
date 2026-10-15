"use client";

import React from "react";

export interface BubbleProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const SingleBubble: React.FC<BubbleProps> = ({ size = 32, className = "", style }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none pointer-events-none ${className}`}
      style={style}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id={`bubble-grad-${size}`} cx="30%" cy="30%" r="70%">
          <stop stopColor="#E0F2FE" stopOpacity="0.8" />
          <stop offset="60%" stopColor="#BAE6FD" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#7DD3FC" stopOpacity="0.3" />
        </radialGradient>
      </defs>
      {/* Outer translucent bubble */}
      <circle
        cx="20"
        cy="20"
        r="18"
        fill={`url(#bubble-grad-${size})`}
        stroke="#1F2A44"
        strokeWidth="1.5"
        strokeOpacity="0.3"
      />
      {/* Primary white shine highlight */}
      <ellipse cx="14" cy="13" rx="4.5" ry="2.5" transform="rotate(-30 14 13)" fill="#FFFFFF" fillOpacity="0.85" />
      {/* Secondary tiny dot shine */}
      <circle cx="26" cy="27" r="1.5" fill="#FFFFFF" fillOpacity="0.6" />
    </svg>
  );
};

export interface FloatingBubblesClusterProps {
  count?: number;
  className?: string;
}

export const FloatingBubblesCluster: React.FC<FloatingBubblesClusterProps> = ({
  count = 14,
  className = "absolute inset-0 overflow-hidden pointer-events-none",
}) => {
  // Pre-configured positions & delays to avoid hydration mismatch
  const bubblesData = [
    { size: 42, left: "6%", top: "65%", delay: "0s", duration: "7s" },
    { size: 24, left: "12%", top: "35%", delay: "1.2s", duration: "8s" },
    { size: 36, left: "18%", top: "80%", delay: "2.4s", duration: "6.5s" },
    { size: 18, left: "25%", top: "45%", delay: "0.8s", duration: "9s" },
    { size: 50, left: "45%", top: "85%", delay: "3.1s", duration: "7.5s" },
    { size: 28, left: "55%", top: "25%", delay: "1.8s", duration: "6.8s" },
    { size: 38, left: "68%", top: "70%", delay: "0.5s", duration: "8.2s" },
    { size: 22, left: "75%", top: "40%", delay: "2.7s", duration: "7.1s" },
    { size: 46, left: "82%", top: "88%", delay: "1.5s", duration: "8.8s" },
    { size: 20, left: "88%", top: "30%", delay: "3.6s", duration: "6.2s" },
    { size: 32, left: "94%", top: "60%", delay: "2.1s", duration: "7.9s" },
    { size: 16, left: "38%", top: "50%", delay: "4.0s", duration: "9.2s" },
    { size: 30, left: "4%", top: "20%", delay: "2.9s", duration: "7.4s" },
    { size: 26, left: "50%", top: "72%", delay: "0.2s", duration: "8.5s" },
  ].slice(0, count);

  return (
    <div className={className} aria-hidden="true">
      {bubblesData.map((b, idx) => (
        <div
          key={idx}
          className="absolute"
          style={{
            left: b.left,
            top: b.top,
            animation: `floatBubble ${b.duration} ease-in-out infinite`,
            animationDelay: b.delay,
          }}
        >
          <SingleBubble size={b.size} />
        </div>
      ))}
    </div>
  );
};

