module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], //Configure Tailwind to remove unused styles in production
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Lato, Arial, sans-serif'],
    },
    extend: {
      colors: {
        primaryGreen: {
          DEFAULT: '#3a6351',
        },
        secondaryBrown: {
          DEFAULT: '#ba562c',
        },
        neutralDarkBrown: {
          DEFAULT: '#393232',
        },
        backgroundWhite: {
          DEFAULT: '#fcfbf7',
        },
        cardYellow: {
          DEFAULT: '#ffe7d4',
        },
      },
      fontFamily: {
        cursive: ['Overlock, cursive'],
      },
      borderRadius: {
        logoTopLeft: '1.15rem',
        logoBottomRight: '1.15rem',
        logoTopRight: '2px',
        logoBottomLeft: '2px',
      },
      boxShadow: {
        logoShadow: '0 0 7px rgba(0, 0, 0, 0.16)',
        sideMenuShadow: '0 0 15px rgba(0, 0, 0, 0.16)',
      },
      outline: {
        secondaryBrown: ['1px solid #ba562c', '5px'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
