/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {}
      }
    },
    colors: {
      secondary: '#F98128',
      naturalDark: '#2A2A2A',
      neutralDark2: '#2E2E30',
      primaryColor: '#50B848',
      brandNeutralPrimary: '#00AF54',
      purple: '#494368',
      subtledark: '#8F8F8F',
      NeutralLight: '#FAFAFA'



      
    }
  },
  plugins: [],
}

