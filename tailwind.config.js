const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
    './index.html',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.warmGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
    },
    extends: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
