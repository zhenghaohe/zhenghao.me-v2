/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{jsx,tsx}',
    './components/**/*.{jsx,tsx}',
    './content/**/*.{mdx}',
    './posts/**/*.{mdx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ...colors,
        'purple': '#3f3cbb',
        'unhovered': '#C3D7D8',
        'hovered': '#F2CFC2',
        primary: 'var(--color-text)',
        secondary: 'var(--color-text-secondary)',
        bg: 'var(--color-background)',
        nav: 'var(--color-nav-background)',
        muted: 'var(--color-muted)',
        accent: 'var(--color-link-posts)'
      },
      animation: {
        gradient: 'gradient 10s ease infinite'
      },
      keyframes: {
        gradient: {
          '0%': { 'background-position': '0% 100%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 100%' }
        }
      },
      backgroundImage: {
        iridescent: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)'
      },
      backgroundSize: {
        'zoom-350': '350% 350%',
        'zoom-150': '150% 150%'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
