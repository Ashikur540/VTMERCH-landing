import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        montserrat: ["var(--font-montserrat)"],
        montserrat2: ["Montserrat", "sans-serif"],
        Act_Of_Rejection: ["Act_Of_Rejection", "sans-serif"],
      },
      colors: {
        white: {
          DEFAULT: "#FFF",
          100: "rgba(255, 255, 255, 0.8)",
        },
        primary: "#EA2127",
        secondary: "#F6F5F5",
        dark: "#000000",
        lightGray: "#F0F0F0",
      },
    },
  },
  plugins: [],
};
export default config;
