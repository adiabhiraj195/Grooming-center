import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FFF8EC",
        marigold: {
          DEFAULT: "#FFB524",
          deep: "#E8940C",
        },
        chilli: "#FF6B4A",
        peacock: {
          DEFAULT: "#0F766E",
          soft: "#D9F2EE",
        },
        blush: "#FFE3E0",
        "sky-bubble": "#CDEBFA",
        ink: {
          DEFAULT: "#1F2A44",
          soft: "#5B6580",
        },
        white: "#FFFFFF",
      },
      fontFamily: {
        display: ["var(--font-baloo)", "sans-serif"],
        body: ["var(--font-nunito)", "sans-serif"],
        hand: ["var(--font-caveat)", "cursive"],
        devanagari: ["var(--font-devanagari)", "sans-serif"],
      },
      boxShadow: {
        sticker: "4px 4px 0 #1F2A44",
        "sticker-sm": "2px 2px 0 #1F2A44",
        "sticker-lg": "6px 6px 0 #1F2A44",
        "sticker-pressed": "2px 2px 0 #1F2A44",
      },
      borderRadius: {
        card: "24px",
        image: "28px",
        review: "20px",
      },
    },
  },
  plugins: [],
};

export default config;

