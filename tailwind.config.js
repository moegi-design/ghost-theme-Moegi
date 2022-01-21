const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './src/**/*.{hbs,js}', './template/**/*.{hbs,js}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        main: 'var(--ghost-accent-color)',
      },
      typography: {
        DEFAULT: {
          css: {
            code: {
              fontWeight: 'normal',
              backgroundColor: colors.slate[200],
              borderRadius: '0.25rem',
              padding: '0.2em 0.35em',
            },
            'code::before': {
              content: '""'
            },
            'code::after': {
              content: '""'
            },
            pre: {
              color: null,
              backgroundColor: '#f9f9f9',
            },
            'pre code': {
              color: null,
              backgroundColor: 'transparent',
            },
          }
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
}
