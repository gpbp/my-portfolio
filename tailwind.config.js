/** @type {import('tailwindcss').Config} */


const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        appleFont: [
          'Montserrat',
        ],
      },
    },
  },
  darkMode: "class",
  plugins: [],
}

module.exports = config;