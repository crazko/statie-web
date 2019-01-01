const browserSync = require("browser-sync").create();
const del = require("del");
const gulp = require("gulp");
const run = require("gulp-run");

const paths = {
  dist: "output"
};

const clean = () => del([paths.dist]);
const generate = () => run("vendor/bin/statie generate source").exec();
const reload = done => {
  browserSync.reload();
  done();
};
const watch = () => {
  browserSync.init({
    server: paths.dist
  });

  gulp.watch(["*.yml", "source"], gulp.series(generate, reload));
};

gulp.task("default", gulp.series(clean, generate, watch));
gulp.task(generate);
gulp.task(clean);
