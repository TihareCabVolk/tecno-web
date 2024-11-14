/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        'mcdonalds': ['Fredoka One', 'sans-serif'],
        'chewy': ['Chewy', 'sans-serif'],
        'baloo': ['Baloo 2', 'sans-serif'],
        'bangers': ['Bangers', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
