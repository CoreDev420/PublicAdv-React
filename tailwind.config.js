/** @type {import('tailwindcss').Config} */
const converter = require('color-convert');
const primaryColor = '#2D93C7';
const charcoalColor = '#34454E';
const generalColor = '#23242A';
const htr = converter.hex.rgb; //* shorthand


const primaryRGB = htr(primaryColor).join(', ');
const charcoalRGB = htr(charcoalColor).join(', ');
const generalRGB = htr(generalColor).join(', ');

module.exports = {
  content: ["./src/**/*.{html,js,jsx}", ],
  theme: {
    extend: {
      screen:{
        '2xl' : { 'col' : '(min-width:1400px'},
      },
      backgroundImage: {
        // bodyBG: "url('./public/background.jpg')",
      },
      colors: {
        primary: {
          DEFAULT: `rgba(${primaryRGB}, 1)`,
          400: `rgba(${primaryRGB}, .4)`,
        },
        charcoal:{
          default: `rgba(${charcoalRGB}, 1)`,
        },
        general:{
          default: `rgba(${generalRGB}, 1)`,
        }
      },
    },
  },
  plugins: [],
};
