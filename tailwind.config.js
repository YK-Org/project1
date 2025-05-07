// tailwind.config.js
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          50: "#efebe9",
          100: "#d7ccc8",
          200: "#bcaaa4",
          300: "#a1887f",
          400: "#8d6e63",
          500: "#795548",
          600: "#6d4c41",
          700: "#833E29",
          800: "#4e342e",
          900: "#3e2723",
        },
      },
      fontFamily: {
        great: ['"Great Vibes"', "cursive"],
      },
    },
  },
  plugins: [],
};
