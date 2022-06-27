/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          "1000": "#666666"
        }
      }
    },
  },
  plugins: [],
  darkMode: "class",
}
