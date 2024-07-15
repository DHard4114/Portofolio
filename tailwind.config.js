/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/**/*.js"],
  theme: {
    container: {
      center: true,
      padding: "16px,",
    },
    extend: {
      colors: {
        primary: "#151F35",
        dark: "#171717",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
