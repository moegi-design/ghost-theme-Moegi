const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{hbs,js}', './template/**/*.{hbs,js}'],
  darkMode: 'class',
  theme: {
    colors: {
      accent: 'var(--ghost-accent-color)',
      ...colors,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
