module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        1664: "1664px",
      },
      colors: {
        background: "#030E21",
        foreground: "#F0F7FE",
        primary: "#3276DE",
        secondary: "#8D2063",
        "pink/800": "#A70A4A",
      },
      fontFamily: {
        seravek: ["Seravek", "sans-serif"],
      },
    },
  },
};
