'use strict';

const gulp = require('gulp');
const sassCombine = require('gulp-scss-combine');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const stripCssComments = require('gulp-strip-css-comments');
const cssimport = require('gulp-cssimport');


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
            'src/flexible-button-bypass.scss'
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

gulp.task('merge', mergeSass);
gulp.task('generate', generateCss);

gulp.task('default',
    gulp.series('merge', 'generate', function (done) {
        done();
    })
);

