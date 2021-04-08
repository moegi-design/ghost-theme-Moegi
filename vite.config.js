import { defineConfig } from 'vite'
import copy from 'rollup-plugin-copy'

export default defineConfig({
  publicDir1: 'template',
  build: {
    manifest: true,
    lib: {
      entry: 'main.js',
      name: 'Moegi',
    },
    outDir1: 'dist/assets',
    rollupOptions: {
      output: {
        entryFileNames: `assets/moegi.[format].js`,
        assetFileNames: `assets/moegi.[ext]`,
      }
    }
  },
  plugins: [{
    ...copy({
      targets: [{
        src: 'package.json',
        dest: 'dist'
      }, {
        src: 'template/*',
        dest: 'dist'
      }]
    }),
    enforce: 'post',
  }],
})