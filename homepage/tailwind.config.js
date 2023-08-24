/** @type {import('tailwindcss').Config} */

const colores = {
  primary: {
    SoftOrange: 'hsl(35, 77%, 62%)',
    SoftRed: 'hsl(5, 85%, 63%)',
  },
  Neutral: {
    OffWhite: 'hsl(36, 100%, 99%)',
    GrayishBlue: ' hsl(233, 8%, 79%)',
    DarkHrayishBlue: 'hsl(236, 13%, 42%)',
    VeryDarkBlue: 'hsl(240, 100%, 5%)',
  },
};
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      textColor: colores,
      borderColor: colores,
      backgroundColor: colores,
      fontSize: {
        clamp: 'clamp(10px, 7vw, 58px)',
        clampText: 'clamp(10px,4vw, 20px)',
        clampTitle: 'clamp(10px,5vw, 20px)',
      },
    },
  },
  plugins: [],
};
