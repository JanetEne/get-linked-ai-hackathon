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
        secondary: '#903AFF',
        tetiary: '#FF26B9',
        background: '#150E28',
        footerBg: '#100B20',
        introBg: '#140D27',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'san-serif'],
        inter: ['Inter', 'san-serif'],
        clash: ['ClashDisplay', 'san-serif'],
        unica: ['UnicaOne', 'san-serif'],
      },
      boxShadow: {
        cardShadow: '0px 4px 4px 0px rgba(0 0 0 / 0.25);',
      },
      backgroundImage: {
        'hero-purple-lens': "url('/assets/images/Purple-Lens-Flare-PNG.png') ",
        'prices-bg': "url('/assets/images/prizesbglarge.png')",
        'purple-flare-contact': "url('/assets/svg/purpleFlare.svg')",
      },
    },
  },
  plugins: [],
};
