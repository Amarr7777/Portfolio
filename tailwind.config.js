/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero': "url('src/assets/back1.jpg')",
      },
      fontFamily:{
        ConcertOne : 'Concert One'
      },
    },
  },
  plugins: [],
}

