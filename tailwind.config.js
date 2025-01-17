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
        grayText: '#707070',
        primary: '#C11574',
        primaryLight: '#FDF2FA',
        secondary: '#026AA2',
        secondaryLight: '#F0F9FF',
        darkFaintGray: '#1f1f1f',
        lightFaintGray: '#0000000f'
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