/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#EEEEEE',
        'secondary': '#FFBF00',
        'bgPrice': '#111111'
      }
    },
  },
  plugins: [],
}
