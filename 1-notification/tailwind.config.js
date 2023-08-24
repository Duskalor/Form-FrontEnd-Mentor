/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderColor: {
        GrayishBlue: '#939dae',
        Red: '#f65351',
        Blue: '#0a317b',
        VeryLightGrayishblue: '#f7fafd',
        LightGrayishblue1: '#e5effa',
        LightGrayishblue2: '#dde7ee',
        DarkGrayishBlue: '#5e6778',
        VeryDarkBlue: '	#1c202b',
      },
      textColor: {
        Red: '#f65351',
        Blue: '#0a317b',
        VeryLightGrayishblue: '#f7fafd',
        LightGrayishblue1: '#e5effa',
        LightGrayishblue2: '#dde7ee',
        GrayishBlue: '#939dae',
        DarkGrayishBlue: '#5e6778',
        VeryDarkBlue: '	#1c202b',
      },
      backgroundColor: {
        Red: '#f65351',
        Blue: '#0a317b',
        VeryLightGrayishblue: '#f7fafd',
        LightGrayishblue1: '#e5effa',
        LightGrayishblue2: '#dde7ee',
        GrayishBlue: '#939dae',
        DarkGrayishBlue: '#5e6778',
        VeryDarkBlue: '	#1c202b',
      },
    },
  },
  plugins: [],
};
