/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 'primary': '#FFFBF3',
        // 'secondary': '#fac240',
        // 'bgPrice': '#111111'
        'primary': '#f1f2df',
        'secondary': '#fb923c',
        'bgPrice': '#818853'
      }
    },
  },
  plugins: [],
}
