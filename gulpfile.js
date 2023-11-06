'use strict';

const gulp = require('gulp');
const sassCombine = require('gulp-scss-combine');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const stripCssComments = require('gulp-strip-css-comments');
const cssimport = require('gulp-cssimport');
const uglify = require('gulp-uglify');

const files = {
    jsPath: 'src/js/**/*.js',
};

/**
 * This merges all the SCSS in src into theme.scss
 */
function mergeSass(done) {
    return gulp.src(
        [
            'src/colors.scss',
            'src/tool-colors.scss',
            'src/typography.scss',
            'src/shortcuts.scss',
            'src/custom-error-pages.scss',
            'src/announcements.scss',
            'src/buttons.scss',
            'src/demo.scss',
            'src/messages.scss',
            'src/flexible-button-bypass.scss',
            'src/eeeplus-global-navbar.scss'
        ])
        .pipe(concat('theme.scss'))
        .pipe(cssimport(/^https:\/\//gi))  // Gets the content of the url import in typography.scss
        .pipe(sassCombine())
        .pipe(gulp.dest('./dist/'))
        ;
}

/**
 * This takes theme.scss and generates a CSS file to be used in the docs (or if you want to include it)
 */
function generateCss(done) {
    return gulp.src('dist/theme.scss')
        .pipe(sass())
        .pipe(stripCssComments())
        .pipe(gulp.dest('./docs/'))
        ;
}

/**
 * merge and uglify js files
 * @returns {*}
 */
function mergeJs() {
    return gulp.src([files.jsPath])
        .pipe(concat('theme.js'))
        .pipe(uglify({
            mangle: true,
            sourceMap: false,
            compress: true
        }))
        .pipe(gulp.dest('dist', {sourcemaps: '.'}))
        ;
}

gulp.task('merge', mergeSass);
gulp.task('generate', generateCss);
gulp.task('mergeJs', mergeJs);

gulp.task('default',
    gulp.series('merge', 'generate', 'mergeJs', function (done) {
        done();
    })
);

