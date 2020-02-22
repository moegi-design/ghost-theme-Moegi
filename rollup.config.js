import svelte from 'rollup-plugin-svelte'
import autoPreprocess from 'svelte-preprocess'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import livereload from 'rollup-plugin-livereload'
import { terser } from 'rollup-plugin-terser'

const production = !process.env.ROLLUP_WATCH

export default {
  input: 'src/main.js',
  output: {
    sourcemap: true,
    format: 'iife',
    name: 'app',
    file: 'dist/assets/moegi.js'
  },
  plugins: [
    svelte({
      // enable run-time checks when not in production
      dev: !production,
      preprocess: [
        autoPreprocess({
          postcss: {
            plugins: [
              require('autoprefixer')
            ]
          }
        }),
      ],
      css: css => {
        css.write('dist/assets/moegi.css');
      }
    }),
    commonjs(),
    resolve({
      browser: true,
      dedupe: importee => importee === 'svelte' || importee.startsWith('svelte/')
    }),
    !production && livereload('dist'),
    production && terser()
  ],
  watch: {
    clearScreen: false
  }
}