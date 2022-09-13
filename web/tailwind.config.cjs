/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx",
    "./index.html"

  ],
  theme: {
    fontFamily: {
      sans: ['inter', 'sans-serif']
    },
    extend: {
      colors:{
      },
      backgroundImage:{
        galaxy: "url('/Fundo.png')",
        'nlw-gradient': 'linear-gradient(89.86deg, #9572FC 29.08%, #43E7AD 70.94%, #E1D55D 18.57%)',
        'game-gradiant': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)'
      },
    },
  },
  plugins: [],
}
