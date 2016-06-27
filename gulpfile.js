/**
 * @author youngtian13
 * @date 2016-06-15
 */

'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const livereload = require('gulp-refresh');
const browserify = require('gulp-watchify');
// const uglify = require('gulp-uglify');
// const minify = require('gulp-minify-css');

let paths = {
    sass: ['client/resource/src/scss/**/*.scss'],
    entry: ['client/resource/src/js/**/*.js', '!client/resource/src/js/lib/**'],
    refresh: ['client/resource/build/css/**/*.css', 'client/resource/build/js/**/*.js', 'client/view/**/*.html']
};

gulp.task('watch', ['browserify'], () => {
    gulp.watch(paths.sass, compileCss);
    gulp.watch(paths.refresh, refresh);

    livereload.listen();
});

// Browserify and copy js files
gulp.task('browserify', browserify(function(watchify) {
    gulp.src(paths.entry)
        .pipe(watchify({
            watch: true
        }))
        .pipe(gulp.dest('client/resource/build/js'));
}));

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

