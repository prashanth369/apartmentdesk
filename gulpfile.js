const gulp = require('gulp');
const uglify = require('gulp-uglify');
const  minify= require('gulp-cssnano');


gulp.task('build', () =>{
   return gulp.src('./src/*.css')
   .pipe(minify())
   .pipe(gulp.dest('dest'));
});

gulp.task('default', ['build']);