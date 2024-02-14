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
      rosaClar: '#FFC5FA',
      cardBackground:  "#242424",
      pinkBorder: "#F51FFC",
      purple: "#420C63 ",
      red: "#FF0000",
      gray: "#1B1B1B",
      lightPink: "#FF85E7",
      lightPurple: "#BB64AA",      
      blackBackground: "#101010",
    },
    fontFamily: {
      "font2": ["Manrope"],
      "font3": ["Rubik"],
    },
  },
  plugins: [daisyui],
  
}