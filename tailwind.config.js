// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "primary": "#FAE6B1",
      "secondary": "#B3DEE5",
      "accent": "#FFA101",
      "background": "#31525B",
    },
    fontFamily: {
      Archivo: ["Archivo, sans-serif"],
    },
    container: {
      padding: "2rem",
      center: true,
    },
    screens: {
      sm: "640px",
      md: "768",
    }
  },
  plugins: [],
};
