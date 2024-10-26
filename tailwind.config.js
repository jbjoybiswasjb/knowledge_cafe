/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#fff',
        black: '#000',

        mainHeading: 'rgb(17, 17, 17)',
        purple: 'rgb(96, 71, 236)',
      },
    },
  },
  plugins: [],
}

