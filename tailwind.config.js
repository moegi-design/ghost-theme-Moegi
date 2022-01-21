const colors = require('tailwindcss/colors')
const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const rem = (px) => `${round(px / 16)}rem`

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
            }
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
