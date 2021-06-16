module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      main:{
        set:'#06C78D',
        low:"#B3E8DE",
        lowest: '#E8F8F5'
      },

      white: '#ffffff',

      dark: '#1E2833',

      gray: {
        15: '#FAFBFC',
        25: '#F5F7FA',
        50: '#E9EDF5',
        100: '#D0DDEC',
        200: '#AEC1DA',
        300: '#92A7C1',
        400: '#7B93AF',
        500: '#6783A0',
        600: '#57728E',
        700: '#445A74',
        800: '#30445B',
        darker: '#3A5573',
      },

    },
    
    fontFamily:{
      'display': ['Roboto'],
      'body': 'Roboto',
      'DmSans' : 'DM Sans'
    },
    extend: {
      height:{
        '74p': '74px',
        '100P': '100px',
        '130p': '130px',
        '170P': '170px', 
        '214p': '214px',
        '273p': '273px',
        '300p': '300px',
        '448P' : '448px',
        '472p': '472px',
        '568p': '568px'
      },

      margin: {
        '68P': '68px',
        '70P':'70px',
        '100P': '100px',
      },

      fontSize: {
        '6px' : '6px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
