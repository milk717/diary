/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        main: 'calc(210mm - 93.25px)',
      },
    },
  },
  plugins: [],
};
