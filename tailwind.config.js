/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        OpenSans: ['Open Sans', 'sans-serif'],
        Raleway: ['Raleway', 'sans-serif'],
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        ocean: {
          DEFAULT: '#10599C',
        },
      },
    },
  },
  plugins: [],
};
