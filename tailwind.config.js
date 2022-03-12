module.exports = {
  content: [
    "./storage/framework/views/*.php",
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
    "node_modules/tailvue/dist/tailvue.es.js",
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
        zIndex: {
            '-1': '-1'
          },
          flexGrow: {
            5: '5'
          },
          maxHeight: {
            'screen-menu': 'calc(100vh - 3.5rem)',
            modal: 'calc(100vh - 160px)'
          },
          transitionProperty: {
            position: 'right, left, top, bottom, margin, padding',
            textColor: 'color'
          },
          keyframes: {
            fadeOut: {
              from: { opacity: 1 },
              to: { opacity: 0 }
            },
            fadeIn: {
              from: { opacity: 0 },
              to: { opacity: 1 }
            }
          },
          animation: {
            fadeOut: 'fadeOut 250ms ease-in-out',
            fadeIn: 'fadeIn 250ms ease-in-out'
          }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
