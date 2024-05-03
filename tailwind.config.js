/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        wax: '#400514',
        seaBlue: '#23B8B8',
      },
      backgroundImage: {
        loading: 'linear-gradient(to left, black 30%, #23B8B8 70%)',
      },
    },
  },
  plugins: [
    require('tailwindcss-filters'),
    function ({ addUtilities }) {
      const newUtilities = {
        '.nav-border-x': {
          'background-image':
            'linear-gradient(to bottom, transparent, #23B8B8, transparent), linear-gradient(to bottom, transparent, #23B8B8, transparent)',
          'background-repeat': 'no-repeat',
          'background-size': '0.7px 100%',
          'background-position': '0% 50%, 100% 50%',
        },
        '.nav-border-y': {
          'background-image':
            'linear-gradient(to right, transparent, #23B8B8, transparent)',
          'background-repeat': 'no-repeat',
          'background-size': '100% 0.7px',
          'background-position': '0 100%',
        },

        '.nav-border-y-hover': {
          'background-image':
            'linear-gradient(to right, transparent, #400514, transparent)',
          'background-repeat': 'no-repeat',
          'background-size': '100% 2px',
          'background-position': '0 100%',
        },

        //     '.border-leftt-top': {
        //       'border-leftt': '1px solid',
        //       'border-top': '1px solid',
        //       'border-image-source':
        //         'radial-gradient(circle at top left, limmegren, transparent 30%)',
        //       'border-image-slice': '1',
        //     },

        //     '.border-right-top': {
        //       'border-right': '1px solid',
        //       'border-top': '1px solid',
        //       'border-image-source':
        //         'radial-gradient(circle at top right, limegreen, transparent 30%)',
        //       'border-image-slice': '1',
        //     },
        //     '.border-leftt-bottom': {
        //       'border-leftt': '1px solid',
        //       'border-bottom': '1px solid',
        //       'border-image-source':
        //         'radial-gradient(circle at bottom left, limegreen, transparent 30%)',
        //       'border-image-slice': '1',
        //     },
        //     '.border-right-bottom': {
        //       'border-right': '1px solid',
        //       'border-bottom': '1px solid',
        //       'border-image-source':
        //         'radial-gradient(circle at bottom right, limegreen, transparent 30%)',
        //       'border-image-slice': '1',
        //     },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
