/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html',],
  theme: {
    //create personalized colors, extension of tailwind out the box
    extend: {
      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883',
        }
      }
    },
  },
  plugins: [],
}
