/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fira: ["Fira Code", "monospace"],
      },
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        
        //Shades of Black
        midnightBlue: "#101720",
        deepNavyBlue: "#011222",
        charcoalGray: "#171717",
        richBlack: "#020D19",
        oilBlack: "#0C0C0C",
        darkSlateGray: "#0D1717",
        obsidian: "0B1215",

        //SHades of White
        ghostWhite: "#F8F8FF",
        ivory: "#FFFFF0",
        snow: "FFFAFA",
        offWhite: "#FAF9F6"
      },
    },
  },
  plugins: [],
}