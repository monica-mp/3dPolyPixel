import daisyui from 'daisyui';


/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},    
    colors: {
      black: '#000000',
      buttonHover: '#0D0D0D ',
      white: '#ffffff',
      cardBackground:  "#242424",
      pinkBorder: "#F51FFC",
      purple: "#420C63 ",
    },
    fontFamily: {
      "font2": ["Manrope"],
    },
  },
  plugins: [daisyui],
  
}