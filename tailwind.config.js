/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        dark: {
          900: "#103F74",
          800: "#1B588C",
          700: "#2B7BAE",
          600: "#3EA2D0",
          500: "#56CCF2",
          400: "#7FE2F7",
          300: "#99F1FB",
          200: "#BCFBFD",
          100: "#DDFEFD"
        },
        primary: {
          900: "#192252",
          800: "#2A3563",
          700: "#424F7B",
          600: "#606D93",
          500: "#848FAC",
          400: "#A9B4CD",
          300: "#C5D0E6",
          200: "#DFE8F6",
          100: "#EFF3FA"
        }
      }
    },
  },
  plugins: [],
}