/**
 * @author youngtian13
 * @date 2016-06-15
 */

'use strict';

const gulp = require('gulp');
const path = require('path');
const sass = require('gulp-sass');
const livereload = require('gulp-refresh');

let paths = {
    sass: ['public/scss/**/*.scss'],
    refresh: ['public/scss/**/*.scss', 'public/js/**/*.js', 'view/**/*.html']
}

gulp.task('watch', () => {
    gulp.watch(paths.sass, compile);
    gulp.watch(paths.refresh, refresh);

    livereload.listen();
});

gulp.task('default', ['watch']);

// 编译sass
function compile() {
    gulp.src(paths.sass)
        .pipe(sass())
        .pipe(gulp.dest('./public/css'));
}

// 刷新页面
function refresh(event) {
    gulp.src(event.path).pipe(livereload());
}