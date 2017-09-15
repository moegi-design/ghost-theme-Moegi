var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var zip = require('gulp-zip');
var browserSync = require('browser-sync');
var pkg = require('./package.json');

var jsFile = [
    './src/script/progress.min.js',
    './src/script/prism.js',
    './src/script/photoswipe.js',
    './src/script/photoswipe-ui-default.js',
    './src/script/index.js'
];

gulp.task('sass', function () {
    return gulp.src('./src/style/screen.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['chrome < 20', 'firefox < 20', 'ie < 9']
        }))
        .pipe(gulp.dest('./assets/css'));
});

gulp.task('js', function () {
    return gulp.src(jsFile)
        .pipe(concat('bundle.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./assets/js'));
});

gulp.task('photoswipe', function () {
    return gulp.src('./src/assets/**/*')
        .pipe(gulp.dest('./assets/assets/'));
});

gulp.task('font', function () {
    return gulp.src('./src/fonts/**/*')
        .pipe(gulp.dest('./assets/fonts/'));
});

gulp.task('dev', function () {
    browserSync.init({
        proxy: 'localhost:2368',
        files: ['assets/css/screen.css', 'assets/js/bundle.min.js']
    });
});

gulp.task('watch', function () {
    gulp.watch(['*.hbs', 'partials/*.hbs']).on('change', browserSync.reload);
    gulp.watch('./src/style/*.scss', ['sass']);
    gulp.watch('./src/script/*.js', ['js']);
    gulp.watch('./src/fonts/**/*', ['font']);
    gulp.watch('./src/assets/**/*', ['photoswipe']);
});

gulp.task('zip', ['build'], function () {
    return gulp.src(['**/*', '!./node_modules/**/*', '!./screenshot/**/*', '!*.zip', '!*.log'])
        .pipe(zip('decent-v' + pkg.version + '.zip'))
        .pipe(gulp.dest('./'));
});

gulp.task('build', ['sass', 'js', 'photoswipe', 'font']);

gulp.task('default', ['sass', 'js', 'dev', 'photoswipe', 'font', 'watch']);
