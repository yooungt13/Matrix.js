'use strict';

const gulp = require('gulp');
const less = require('gulp-less');
const livereload = require('gulp-refresh');

let paths = {
    less: ['public/less/**/*.less'],
    refresh: ['public/less/**/*.less', 'public/js/**/*.js', 'view/**/*.html']
}

gulp.task('watch', () => {
    gulp.watch(paths.less, compile);
    gulp.watch(paths.refresh, refresh);

    livereload.listen();
});

gulp.task('default', ['watch']);

// 编译less
function compile() {
    gulp.src(paths.less)
        .pipe(less({
            paths: [path.join(__dirname, '/public/less/')]
        }))
        .on('error', function(err) {
            console.error(err.message);
            this.end();
        })
        .pipe(gulp.dest('./public/css'));
}

// 刷新页面
function refresh(event) {
    gulp.src(event.path).pipe(livereload());
}