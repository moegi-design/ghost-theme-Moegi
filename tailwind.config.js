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
            blockquote: {
              fontWeight: 'normal',
              fontStyle: 'normal',
              opacity: 0.8,
              color: 'var(--tw-prose-body)',
            },
            'blockquote p:first-of-type::before': {
              content: '',
            },
            'blockquote p:last-of-type::after': {
              content: '',
            },
            code: {
              fontWeight: 'normal',
              backgroundColor: colors.slate[100],
              borderRadius: '0.25rem',
              padding: '0.2em 0.35em',
              margin: '0 0.2em',
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
              margin: 0,
              padding: 0,
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
