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
        'primary': '#faffff',
        'secondary': '#1f2937',
        'bgPrice': '#111111'
      }
    },
  },
  plugins: [],
}
