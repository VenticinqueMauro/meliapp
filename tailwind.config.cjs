/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#fff8e6',
        'secondary': '#fac240',
        'bgPrice': '#2c2c2c'
      }
    },
  },
  plugins: [],
}
