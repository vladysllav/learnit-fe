module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, 
  theme: {
    extend: {
      colors: {
        mainBlue: '#235AF3',
        hoverBlue: '#002EAD',
      },
      maxWidth: {
        'globalWidth': '1440px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
