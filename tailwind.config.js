module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, 
  theme: {
    extend: {
      colors: {
        mainBlue: '#235AF3',
        hoverBlue: '#002EAD',
        headerScroll: '#FAF9F6',
        dark: '#1e1e1e',
        borderColor: '#4e4e4e',
        yellowBadge: '#F5FE76',
        iconBackground: '#f5f3ef',
        grey: '#aaa',
        purple: '#d1bce3',
        green: '#86afa6',
        darkGreen: '#1a342e',
        orange: '#fc440f',
      },
      width: {
        '80%': '80%',
        '20%': '20%'
      },
      maxWidth: {
        'globalWidth': '1440px',
      },
      height: {
        '80px': '80px',
      },
      borderRadius: {
        '10px': '10px',
      },
      spacing: {
        '4px': '4px',
        '5px': '5px',
        '6px': '6px',
        '8px': '8px',
        '10px': '10px',
        '15px': '15px',
        '20px': '20px',
        '25px': '25px',
        '30px': '30px',
        '32px': '32px',
        '45px': '45px',
      },
      fontSize: {
        '13px': '13px',
        '15px': '15px',
        '20px': '20px',
      },
      backgroundImage: {
        'pricingOneCta': "url('/src/assets/images/pricingPage/learndash-compact-cta-lavender.jpg')",
      }
    },
  },
  variants: {
    extend: {
      textColor: ['menu-hover'],
    },
  },
  plugins: [],
}
