'use strict';

var gulp = require('gulp');
var sass = require('gulp-scss-combine');
var concat = require('gulp-concat');

gulp.task('default', mergeSass);

function mergeSass(done) {
  return gulp.src(['src/colors.scss'])
    .pipe(concat('theme.scss'))
    .pipe(sass())
    .pipe(gulp.dest('./dist/'))
    ;
}
