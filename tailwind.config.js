/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './views/*.ejs',
    './public/js/main.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}