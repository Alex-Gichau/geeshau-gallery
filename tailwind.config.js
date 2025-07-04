/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", "./pages/**/*.{html,js}"],[
    "./node_modules/flowbite/**/*.js"
],
  theme: {
    extend: {},
  },
  plugins: [],
  mode:'jit'
}

// For quick project build : 
// Run : npm run build
// Instead of tailwind build command : 
//npx tailwindcss -i ./public/style.css -o ./src/output.css --watch