var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('webserver', function() {
    connect.server({
        livereload: true,
        port: 8081
    });
});

gulp.task('html', function() {
    gulp.src('./**/*.html')
        .pipe(connect.reload());
});

gulp.task('css', function() {
    gulp.src(['./**/*.html', './**/*.css'])
        .pipe(connect.reload());
});

gulp.task('js', function() {
    gulp.src(['./**/*.html', './**/*.js'])
        .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch(['./**/*.html'], ['html'])
    gulp.watch(['./**/*.css'], ['css'])
    gulp.watch(['./**/*.js'], ['js'])
});

gulp.task('default', ['webserver', 'watch']);
