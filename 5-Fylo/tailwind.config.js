/** @type {import('tailwindcss').Config} */
const colores = {
  emailSignUp: 'hsl(217, 28%, 15%)',
  main: '#192332',
  footer: 'hsl(216, 53%, 9%)',
  testimonials: 'hsl(219, 30%, 18%)',
  gradient1: 'hsl(176, 68%, 64%)',
  gradient2: 'hsl(198, 60%, 50%)',
  error: ' hsl(0, 100%, 63%)',
  Cyan: 'hsl(176, 68%, 64%)',
  Blue: 'hsl(198, 60%, 50%)',
  White: 'hsl(0, 0%, 100%)',
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

// ### Primary

// - Dark Blue (intro and email sign up background): hsl(217, 28%, 15%)
// - Dark Blue (main background): hsl(218, 28%, 13%)
// - Dark Blue (footer background): hsl(216, 53%, 9%)
// - Dark Blue (testimonials background): hsl(219, 30%, 18%)

// ### Accent

// - Cyan (inside call-to-action gradient): hsl(176, 68%, 64%)
// - Blue (inside call-to-action gradient): hsl(198, 60%, 50%)
// - Light Red (error): hsl(0, 100%, 63%)
