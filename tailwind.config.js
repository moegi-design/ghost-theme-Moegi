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
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
}
