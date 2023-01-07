/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['"Raleway"', ...defaultTheme.fontFamily.sans],
        opensans: ['"Open Sans"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'myblue': 'hsl(198, 60%, 50%)',
        'mycyan': 'hsl(176, 68%, 64%)',
        'light-red': 'hsl(0, 100%, 63%)',
        'footer-color': 'hsl(216, 53%, 9%)',
        'main-color': 'hsl(218, 28%, 13%)',
        'testi-color': 'hsl(219, 30%, 18%)',
        'intro-color': 'hsl(217, 28%, 15%)',
      },
    },
  },
  plugins: [],
}