// gulpfile.js

var gulp = require('gulp');
//var uglify = require('gulp-uglify');

gulp.task('default', [], function () {

  gulp.src('./node_modules/jquery/dist/**/*', {
      base: './node_modules/jquery/dist'
  }).pipe(gulp.dest('./public/vendors/jquery/'));

  gulp.src('./node_modules/bootstrap/dist/**/*', {
      base: './node_modules/bootstrap/dist'
  }).pipe(gulp.dest('./public/vendors/bootstrap/'));

  gulp.src(['./node_modules/underscore/underscore-min.js', './node_modules/underscore/underscore-min.map'], {
      base: './node_modules/underscore/'
  }).pipe(gulp.dest('./public/vendors/underscore/'));

});
