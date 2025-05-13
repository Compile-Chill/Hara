/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pastelBlue: "#7da3c1",        
        pastelBlueHover: "#6b92b1",   
        coralCream: "#F8F1E7",        
      },
    },
  },
  plugins: [],
}