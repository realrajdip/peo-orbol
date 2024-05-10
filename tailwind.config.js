/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   
    extend: {
      fontFamily: {
      glimer: ['"Glimer"']
  },
  backgroundImage:{
    'back': "url('./src/asserts/the.jpeg')", 
  }
    },
  },
  plugins: [],
}

