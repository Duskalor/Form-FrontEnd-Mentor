/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      textColor: {
        DarkSlateGrey: '#242742',
        CharcoalGrey: ' #36384e',
        Grey: '#9294a0',
        Tomato: '#ff6257',
      },
      borderColor: {
        Tomato: '#ff6257',
      },
      backgroundColor: {
        DarkSlateGrey: '#242742',
        CharcoalGrey: ' #36384e',
        Grey: '#9294a0',
        Tomato: '#ff6257',
      },
    },
  },
  plugins: [],
};
