const { series, src, dest } = require('gulp')
const uglify = require('gulp-uglify')
const stylus = require('gulp-stylus')
const babel = require('gulp-babel')
const zip = require('gulp-zip')
const del = require('del')
const gscan = require('gscan')

const paths = {
  css: './src/assets/css/*.styl',
  js: './src/assets/js/*.js',
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
  return src(paths.js)
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(dest('./dist/assets/js/'))
}

function packCss() {
  return src(paths.css)
    .pipe(stylus({
      compress: true
    }))
    .pipe(dest('./dist/assets/css/'))
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
    console.log(result);
  }).catch(function(err) {
    console.log(err);
  });
}

exports.default = series(clean, packTemplate, packJs, packCss, generateZip);