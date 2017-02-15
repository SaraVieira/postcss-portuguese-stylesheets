var gulp = require('gulp');
var istanbul = require('gulp-istanbul');
var mocha = require('gulp-mocha');
var eslint = require('gulp-eslint');

gulp.task('lint', function () {
    return gulp.src(['index.js', 'test/*.js', 'gulpfile.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('pre-test', function () {
    return gulp.src(['index.js'])
    .pipe(istanbul())
    .pipe(istanbul.hookRequire());
});

gulp.task('test', ['pre-test'], function () {
    return gulp.src('test/*.js')
        .pipe(mocha())
        .pipe(istanbul.writeReports())
        .pipe(istanbul.enforceThresholds({ thresholds: { global: 100 } }));
});

gulp.task('default', ['lint', 'test']);

gulp.task('watch', function () {
    gulp.watch(['index.js', 'test/*.js', 'gulpfile.js'], ['lint', 'test']);
});
