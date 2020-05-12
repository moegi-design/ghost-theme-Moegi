import svelte from 'rollup-plugin-svelte'
import autoPreprocess from 'svelte-preprocess'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import livereload from 'rollup-plugin-livereload'
import { terser } from 'rollup-plugin-terser'
import copy from 'rollup-plugin-copy'

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
    copy({
      targets: [
        { src: './package.json', dest: './dist' },
        { src: './src/ghost/default.hbs', dest: './dist', rename: 'default.hbs' },
        { src: './src/ghost/default.hbs', dest: './dist', rename: 'index.hbs' },
        { src: './src/ghost/default.hbs', dest: './dist', rename: 'post.hbs' },
        { src: './src/css/fonts/*', dest: './dist/assets' },
        { src: './node_modules/katex/dist/fonts', dest: './dist/assets' },
      ]
    }),
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