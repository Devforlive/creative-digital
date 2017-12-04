var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    imagemin = require('gulp-imagemin');



gulp.task('imagemin', function () {
    gulp.src('app/img-min/*')
        .pipe(imagemin({
            interlaced: true,
            progressive: true,
            optimizationLevel: 5,
            svgoPlugins: [{removeViewBox: true}]
        }))
        .pipe(gulp.dest('dist/img-min'))
});

gulp.task('autoprefixer', function () {
    gulp.src('css/**/page-pref.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist/page-pref.css'))
});
