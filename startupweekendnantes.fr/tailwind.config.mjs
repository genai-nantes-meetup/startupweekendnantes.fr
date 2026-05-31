/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'sw-bg': 'rgb(14, 2, 24)',
        'sw-purple': 'rgb(25, 5, 50)',
        'sw-purple-mid': 'rgb(77, 66, 76)',
        'sw-cyan': '#2aebf5',
        'sw-yellow': '#fae01b',
        'sw-red': '#fc233d',
        'sw-bordeaux': '#b50036',
        'sw-blue': 'rgb(39, 168, 224)',
        'sw-blue-dark': 'rgb(23, 116, 156)',
      },
      fontFamily: {
        'dela': ['"Dela Gothic One"', 'sans-serif'],
        'oxanium': ['Oxanium', 'sans-serif'],
        'helvetica': ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
      },
      screens: {
        'mobile': { 'max': '767px' },
        'tablet': { 'min': '768px', 'max': '1239px' },
        'desktop': '1240px',
      },
    },
  },
  plugins: [],
};
