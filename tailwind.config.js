/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container:{
      padding:{
        DEFAULT: "0.75rem",
        sm: "1rem",
        lg: "3rem",
        xl: "3rem",
        "2xl": "7rem"
      }
    },
    extend: {},
  },
  plugins: [],
}
