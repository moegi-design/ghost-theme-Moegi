import { defineConfig } from 'vite'
import copy from 'rollup-plugin-copy'

export default defineConfig(({command, mode}) => {
  console.log('build mode: ', mode)
  return {
    define: {
      __ENVVV__: JSON.stringify('development')
    },
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
      watch1: {
        exclude: 'node_modules/**',
        include: ['src/**', 'template/**']
      }
    },
    plugins: [
      copy({
        targets: [{
          src: 'package.json',
          dest: 'dist',
        }, {
          src: 'template/**/*.hbs',
          dest: 'dist',
          transform: (contents, filename) => contents.toString().replace(/__ENVVV1__/g, 'envenv1')
        }],
        flatten: false,
        verbose: true,
        hook: mode === 'development' ? 'buildStart' : 'writeBundle',
      })
    ],
  }
})