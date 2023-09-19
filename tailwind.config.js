/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        xxl: '1440px',
        xlg: '1200px',
        lg: '1025px',
        md: '769px',
        xs: '450px',
        xxs: '340px',
      },
      colors: {
        primary: '#D434FE',
        secondary: '903AFF',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'san-serif'],
      },
      animation: {
        appear: 'appear .5s ease-in-out 1',
        popUp: 'popUp .5s ease-in-out 1',
        dropDown: 'popUp .5s ease-in-out 1',
        slideIn: 'slideIn .5s ease-in-out forwards',
      },
      keyframes: {
        appear: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        popUp: {
          '0%': { marginBottom: '-14rem' },
          '100%': { marginBottom: '0rem' },
        },
        dropDown: {
          '0%': { height: '80%' },
          '100%': { height: 'fit-content' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-200px)', opacity: '0.1' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      boxShadow: {
        cardShadow: ' 0px 20px 40px 12px rgb(0 0 0 / 0.024);',
      },
    },
  },
  plugins: [],
};
