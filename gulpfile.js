const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

gulp.task('sass', function (done) {
    return gulp.src('assets/sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'))
        .pipe(browserSync.reload({stream: true}));
    done();
});
// gulp.task('img', function (done) {
//     return gulp.src('assets/img/**/*')
//         .pipe(gulp.dest('build/img'))
//         .pipe(browserSync.reload({stream: true}));
//     done();
// });

// gulp.task('html', function (done) {
//     return gulp.src("assets/**/*.html")
//         .pipe(gulp.dest("../build"))
//         .pipe(browserSync.reload({stream: true}));
//     done();
//
// });

gulp.task("watch", gulp.parallel('sass', function (done) {
    browserSync.init({
        server: "./build",
        notify: false,
        ui: {
            port: 3000
        }
    });
    gulp.watch('assets/sass/**/*.scss', gulp.parallel('sass'));
}));
