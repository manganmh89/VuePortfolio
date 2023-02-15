// /** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false,
  purge: ["./index.html", "./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      'pale' : '#FAE6B1',
      'liteblue' : '#B3DEE5',
      'darkblue' : '#0A284B',
      'golden' : '#FFA101',
      'highlight' : '#2dd4bf',
      'darkgray' : '#31525B',
    },
    variants: {
      extend: {
        padding: ['hover'],
      },
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
      md: "768px",
    },
  },
  plugins: [],
};
