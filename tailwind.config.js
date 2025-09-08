const { heroui, colors } = require("@heroui/theme");
/** @type {import('tailwindcss').Config} */

const config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        robotoMono: ["var(--font-roboto-mono)"],
        helvetica: ["var(--font-helvetica-bold)"],
        segoeUI: ["var(--font-segoe-ui)"],
      },
      colors: {
        primary: '#006FEE',
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};

module.exports = config;
