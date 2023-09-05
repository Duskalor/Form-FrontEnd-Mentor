/** @type {import('tailwindcss').Config} */

const colores = {
  Orange: ' hsl(26, 100%, 55%)',
  Paleorange: 'hsl(25, 100%, 94%)',
  VeryDarkBlue: 'hsl(220, 13%, 13%)',
  DarkGrayishBlue: ' hsl(219, 9%, 45%)',
  GrayishBlue: ' hsl(220, 14%, 75%)',
  LightGrayishBlue: 'hsl(223, 64%, 98%)',
  White: ' hsl(0, 0%, 100%)',
};
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: colores,
      textColor: colores,
      borderColor: colores,
    },
  },
  plugins: [],
};
