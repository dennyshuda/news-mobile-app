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
        },
        carnation:{
          50:"#FFF0F0",
          100:"#FFE0E0",
          200:"#FFC2C2",
          300:"#FF9E9E",
          400:"#FF8080",
          500:"#FF6160",
          600:"#FF1A1A",
          700:"#D10000",
          800:"#8F0000",
          900:"#470000",
          950:"#240000"
        },
        lynch:{
          50:"#F0F2F4",
          100:"#DEE2E8",
          200:"#C1C8D2",
          300:"#A0ABBB",
          400:"#8291A5",
          500:"#64748B",
          600:"#515E71",
          700:"#3C4553",
          800:"#292F38",
          900:"#13161B",
          950:"#0B0C0F"
        },
        danger: {
          50: "#FDECEC",
          100: "#FCD9D9",
          200: "#F9B4B4",
          300: "#F58E8E",
          400: "#F26969",
          500: "#EF4444",
          600: "#E11313",
          700: "#A90F0F",
          800: "#710A0A",
          900: "#380505",
          950: "#1C0202"
        },
      }
    },
  },
  plugins: [],
}