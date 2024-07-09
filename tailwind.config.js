/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        inter:['HelveticaNeue']
      },
      colors:{
        brend:{
          gray:{
            100:"#1C1A28",
            200:"#306EE8",
            300:"#D2D3D6",
            400:"#232031",
            500:"#232031",
            600:"#0F1B33",
            700:"#112857",
            800:"rgba(255, 255, 255, 0.08)",
            900:"#416ABD"
          },
        }
      },
    },
  },
  plugins: [],
}

