/** @type {import('tailwindcss').Config} */

const colores = {
  Darkcyan: 'hsl(158, 36%, 37%)',
  Cream: 'hsl(30, 38%, 92%)',
  Verydarkblue: 'hsl(212, 21%, 14%)',
  Darkgrayishblue: 'hsl(228, 12%, 48%)',
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
