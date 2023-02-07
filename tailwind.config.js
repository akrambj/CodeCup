/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily : {
      Montserrat : "Montserrat, sans-serif",
    },   
    colors : {
      Blue : '#16304C',
      Yellow : '#FFC300',
      White : '#FFFFFF',
    },
       screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
    extend: {},
  },
  plugins: [],
}
