/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        darkColor: '#101010',
        grayText: '#707070'
      },
      fontFamily: {
        jakarta: ['Plus Jakarta Sans', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  darkMode: 'selector',
  plugins: [
    require('flowbite/plugin')
  ],
}