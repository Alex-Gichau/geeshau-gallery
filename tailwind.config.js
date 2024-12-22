/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    card : {
      center : true,
      border:white,

    },
    extend: {},
  },
  plugins: [],
  mode:'jit'
}

// For quick project build : 
// Run : npm run build
// Instead of tailwind build command : 
//npx tailwindcss -i ./public/style.css -o ./src/output.css --watch