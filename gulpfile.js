/**
 * @author youngtian13
 * @date 2016-06-15
 */

'use strict';

const gulp = require('gulp');
const path = require('path');
const sass = require('gulp-sass');
const livereload = require('gulp-refresh');
const browserify = require('gulp-browserify');
const uglify = require('gulp-uglify');
const minify = require('gulp-minify-css');

let paths = {
    sass: ['client/resource/src/scss/**/*.scss'],
    entry: ['client/resource/src/js/page/*.js'],
    refresh: ['client/resource/build/css/**/*.css', 'client/resource/build/js/**/*.js', 'client/view/**/*.html']
}

gulp.task('watch', () => {
    gulp.watch(paths.sass, compileCss);
    gulp.watch(paths.entry, compileJs);
    gulp.watch(paths.refresh, refresh);

    livereload.listen();
});

gulp.task('default', ['watch']);

// 编译sass
function compileCss() {
    gulp.src(paths.sass)
        .pipe(sass())
        // .pipe(minify())
        .pipe(gulp.dest('client/resource/build/css'));
}

// 刷新页面
function refresh(event) {
    gulp.src(event.path).pipe(livereload());
}

// 执行browserify
function compileJs() {
    gulp.src(paths.entry)
        .pipe(browserify())
        // .pipe(uglify())
        .pipe(gulp.dest('client/resource/build/js/page'));
}