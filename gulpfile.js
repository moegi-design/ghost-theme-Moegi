const {series, watch, src, dest, parallel} = require('gulp');
const pump = require('pump');

// gulp plugins and utils
const zip = require('gulp-zip')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')
const concat = require('gulp-concat')
const clean = require('gulp-clean')
const stylus = require('gulp-stylus')

const PATH = {
    output: 'dist',
    src: 'src/',
    template: ['package.json', 'src/**/*', '!src/assets/**'],
    css: 'src/assets/css/*',
    js: ['src/assets/js/lib/*', 'src/assets/js/*']
}

function cleanDir(done) {
    pump([
        src(PATH.output),
        clean()
    ], handleError(done))
}

function handleError(done) {
    return function (err) {
        if (err) {
            console.error(err)
        }
        return done(err)
    }
}

function template(done) {
    pump([
        src(PATH.template),
        dest(PATH.output)
    ], handleError(done))
}

function css(done) {
    pump([
        src(PATH.css, {sourcemaps: true}),
        stylus(),
        dest(`${PATH.output}/assets`, {sourcemaps: '.'})
    ], handleError(done))
}

function js(done) {
    pump([
        src(PATH.js, {sourcemaps: true}),
        babel({
            presets: ['@babel/env']
        }),
        concat('screen.js'),
        uglify(),
        dest(`${PATH.output}/assets`, {sourcemaps: '.'})
    ], handleError(done))
}

function zipper(done) {
    var targetDir = './'
    var themeName = require('./package.json').name
    var filename = themeName + '.zip'

    pump([
        src(PATH.output),
        zip(filename),
        dest(targetDir)
    ], handleError(done))
}

const build = series(cleanDir, template, css, js)
const watcher = () => watch(PATH.src, build)
const dev = series(build, watcher)

exports.build = build;
exports.zip = series(build, zipper)
exports.default = dev