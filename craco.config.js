module.exports = {
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
};

//Since Create React App doesn't let you override the PostCSS configuration natively, we need to install CRACO to be able to configure Tailwind.
