var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');

gulp.task('sass', function () {
  return gulp.src('sass/*.scss')
    .pipe(sass())
    // .pipe(cleanCSS())
    .pipe(gulp.dest('css'));
});

gulp.task('watch', function(){
    gulp.watch('sass/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);
