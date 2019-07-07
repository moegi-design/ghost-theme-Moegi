const { series, src, dest, watch } = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const stylus = require('gulp-stylus')
const px2rem = require('stylus-px2rem')
const babel = require('gulp-babel')
const zip = require('gulp-zip')
const del = require('del')
const gscan = require('gscan')

const paths = {
  css: './src/assets/css/*',
  js: './src/assets/js/*.js',
  js_vendor: './src/assets/js/lib/*.js'
}

function clean() {
  del.sync(['./dist/*'])
  return Promise.resolve()
}

function packTemplate() {
  src('./package.json')
    .pipe(dest('./dist/'))
  src('./src/partials/*')
    .pipe(dest('./dist/partials/'))
  src('./src/*.hbs')
    .pipe(dest('./dist/'))
  src('./src/locales/*')
    .pipe(dest('./dist/locales/'))
  return Promise.resolve()
}

function packJs() {
  src([paths.js_vendor, paths.js])
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(concat('moegi.js'))
    .pipe(uglify())
    .pipe(dest('./dist/assets/'))
  return Promise.resolve()
}

function packCss() {
  return src(paths.css)
    .pipe(stylus({
      use: [px2rem()],
      compress: true
    }))
    .pipe(concat('moegi.css'))
    .pipe(dest('./dist/assets/'))
}

function generateZip() {
  return src('./dist/*')
    .pipe(zip('./moegi.zip'))
    .pipe(dest('./'))
}

function scan() {
  gscan.checkZip({
    path: './moegi.zip',
    // if you need to check the theme for a different
    // major Ghost version, you can pass it. Currently
    // v1, which is Ghost 1.0 is supported. Default is
    // the latest Ghost version 2.0:
    // checkVersion: 'v1',
    name: 'my-theme'
  }).then(function (result) {
    console.log(result)
  }).catch(function(err) {
    console.log(err)
  })
}

function watchFiles() {
  watch('./src/*', (cb) => {
    series(clean, packTemplate, packJs, packCss)
    console.log('hhhhhhhhhh')
    cb()
  })
}

exports.default = series(clean, packTemplate, packJs, packCss, generateZip)
exports.watch = watchFiles;