/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      primary: '#161B40',
      secondary: '#43BEE5',
      tertiary: '#41B853',
      titleText: '#43BEE5',
      secondaryTitleText: '#EFA500',
      bodyText: '#ecc94b',
      background: '#FFFFFF'
    },
    fontFamily: {
      sans: ['Roboto Mono', ...defaultTheme.fontFamily.sans]
    }
  },
  plugins: []
};
