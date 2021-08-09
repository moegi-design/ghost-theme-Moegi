import { defineConfig } from 'vite'
import copy from 'rollup-plugin-copy-watch'
import FullReload from 'vite-plugin-full-reload'

export default defineConfig(({command, mode}) => {
  console.log('build mode: ', mode)
  return {
    build: {
      lib: {
        entry: 'src/main.js',
        formats: ['umd'],
        name: 'Moegi',
      },
      rollupOptions: {
        output: {
          // entryFileNames: `assets/moegi.[format].js`,
          entryFileNames: `assets/moegi.js`,
          assetFileNames: `assets/moegi.[ext]`,
        },
      },
    },
    plugins: [
      copy({
        watch: mode === 'development' ? ['package.json', 'template/**/*.hbs'] : [],
        targets: [{
          src: 'package.json',
          dest: 'dist',
        }, {
          src: 'template/**/*.hbs',
          dest: 'dist',
          transform: (contents, filename) => contents.toString().replace(/__IS_DEV__/g, mode === 'development')
        }],
        flatten: false,
        hook: mode === 'development' ? 'buildStart' : 'writeBundle',
      }),
      FullReload([
        'package.json',
        'template/**/*.hbs',
      ])
    ],
  }
})