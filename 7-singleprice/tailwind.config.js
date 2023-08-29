/** @type {import('tailwindcss').Config} */

const colores = {
  Cyan: ' hsl(179, 62%, 43%)',
  BrightYellow: ' hsl(71, 73%, 54%)',
  LightGray: 'hsl(204, 43%, 93%)',
  GrayishBlue: 'hsl(218, 22%, 67%)',
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
