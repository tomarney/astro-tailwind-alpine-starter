/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    screens: {
      'xs': '425px',
      ...defaultTheme.screens,
    },
    fontFamily: {
      'sans': ['Fira Sans', 'Helvetica', 'Arial', 'sans-serif']
    },
    extend: {
      backgroundSize: {
        'stretch': '100% 100%'
      }
    },
  },
  plugins: [],
}
