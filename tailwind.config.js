/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        headerImg: "url('/assets/img/header-bg-img.png')",
      },
      colors: {
        yellow: '#FECF33',
        skyBlue: '#4EAFFE',
        navy: '#2A45A7',
      },
    },
  },
  plugins: [],
};
