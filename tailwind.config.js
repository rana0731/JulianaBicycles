module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      inset: {
        '1/2': "50%",
      },

      width: {
        '1/2': "50%",
      },

      height: {
        '10vh': "10vh",
        '20vh': "20vh",
        '30vh': "30vh",
        '40vh': "40vh",
        '50vh': "50vh",
        '60vh': "60vh",
        '70vh': "70vh",
        '80vh': "80vh",
        '90vh': "90vh",
        '100vh': "100vh",
      },

      colors: {
        dark: "#252525",
        logo: "#535353",
        juliana: "#d29e0e",
        santa: "#e5001c",
      },
      fontFamily: {
        'juli': ['"ProximaNova"', 'Helvetica', 'Arial', 'sans-serif'],
        'hero': ['"azo-sans-web"', 'Helvetica', 'Arial', 'sans-serif'],
      },  

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],  

}
