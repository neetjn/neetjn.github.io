module.exports = {
  theme: {
    filter: {
      none: 'none',
      grayscale: 'grayscale(1)',
      invert: 'invert(1)',
      sepia: 'sepia(1)'
    },
    backdropFilter: {
      none: 'none',
      blur: 'blur(20px)'
    },
    extend: {
      boxShadow: {
        huge: '0 30px 60px -15px rgba(0, 0, 0, .25)'
      },
      fontFamily: {
        global: 'Open Sans'
      },
      inset: {
        1: '10%',
        2: '20%',
        3: '30%',
        4: '40%',
        5: '50%',
        6: '60%',
        7: '70%',
        8: '80%',
        9: '90%',
        10: '100%',
        '1/2': '50%',
        '1/3': '33%',
        '1/4': '25%',
        '1/6': '16%'
      },
      colors: {
        slate: '#3b3b3b',
        'slate-medium': '#2b2b2b',
        'slate-dark': '#1b1b1b'
      },
      spacing: {
        '1/2': '50%',
        '1/3': '33%',
        '1/4': '25%',
        '1/6': '16%',
        '1/8': '12%'
      }
    }
  },
  plugins: [
    require('tailwindcss-filters')(),
    require('tailwindcss-transitions')()
  ]
}
