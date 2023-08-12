/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        mainColor:"#1B212F"
      },
      keyframes:{
        moveRightLeft:{
          "0%":{transform:"translateX(0)"} ,
          "50%":{transform:"translateX(10px)"},
          "100%":{transform:"translateX(0)"}
        }
      },
      animation:{
        moveRight:"moveRightLeft 1s ease-in-out infinite"
      },

    },
  },
  plugins: [],
}