import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#1A237E",
        gold: "#F5C518",
        dark: "#0D0D1A",
        "dark-card": "#111133",
        "dark-event": "#1A1A3E",
        "dark-footer": "#050510",
        "gray-text": "#AAAAAA",
      },
      fontFamily: {
        cinzel: ["Cinzel", "serif"],
        raleway: ["Raleway", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
