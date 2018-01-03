var del = require('del');
var fs = require('fs');

var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var gulpLoadPlugins = require('gulp-load-plugins');
var plugins = gulpLoadPlugins();

var paths = {
  dist: 'output',
};

gulp.task('default', gulp.series(clean, generate, watch));
gulp.task(clean);

function clean() {
  return del([paths.dist]);
}

function generate() {
  return plugins.run('vendor/bin/statie generate source').exec();
}

function reload(done) {
  browserSync.reload();
  done();
}

function watch() {
  browserSync.init({
    server: paths.dist
  });

  gulp.watch(['*.yml', 'source'], gulp.series(generate, reload));
}
