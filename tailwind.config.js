/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      golos: ["Golos Text", "sans-serif"],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      primary: "#0000FF",
      secondary: "#0E1133",
      black: "black",
      white: "white",
      red: "red",
      green: "green",
      darkGray: "#505056",
      primaryHover: "#0000FF",
    },
  },
  plugins: [],
};
