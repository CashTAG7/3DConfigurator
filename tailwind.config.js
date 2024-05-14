/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        'lt-galaxy-reverse': ['LT Galaxy Reverse', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
