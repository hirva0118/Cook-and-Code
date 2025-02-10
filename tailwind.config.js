/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container:{
        center:true
      },
      colors:{
        'gray_light':'#DBDFD0',
        'red_diff' :'#AD343E',
        'gray_new' :'#474747',
        'white_light':'#F9F9F7'
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
      },
    },
    
  },
  plugins: [],
}

