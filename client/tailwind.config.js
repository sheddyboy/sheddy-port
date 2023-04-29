/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./Sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pryText: "#365E6A",
        pryBtn: "rgba(54, 94, 106, 0.5)",
        pryBg: "#E7F5F9",
        secText: "#FDBE74",
        secBtn: "rgba(255, 141, 0, 0.5)",
        secBg: "rgba(250, 238, 232, 0.6)",
      },
      fontFamily: {
        mulish: ["var(--font-mulish)"],
        lato: ["var(--font-lato)"],
        montserrat: ["var(--font-montserrat)"],
        sacramento: ["var(--font-sacramento)"],
        cabin: ["var(--font-cabin)"],
      },
    },
  },
  plugins: [],
};
