import type { Config } from 'tailwindcss';

const colores = {
  softRed: 'hsl(10, 79%, 65%)',
  Cyan: 'hsl(186, 34%, 60%)',
  darkBrown: 'hsl(25, 47%, 15%)',
  mediumBrown: 'hsl(28, 10%, 53%)',
  Cream: 'hsl(27, 66%, 92%)',
  veryPaleOrange: ' hsl(33, 100%, 98%)',
};

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        gradientradial: 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: colores,
      textColor: colores,
      borderColor: colores,
    },
  },
  plugins: [],
};
export default config;
