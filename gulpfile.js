const browserSync = require('browser-sync').create();
const del = require('del');
const gulp = require('gulp');
const run = require('gulp-run');
const postcss = require('gulp-postcss');
const tailwindcss = require('tailwindcss');
const TailwindExtractor = require('./utils/purgecss-tailwind-extractor');
const purgecss = require('@fullhuman/postcss-purgecss');

const paths = {
  src: 'source',
  dist: 'output'
};

const clean = () => del([paths.dist]);

const generate = () => run('vendor/bin/statie generate source').exec();

const reload = done => {
  browserSync.reload();
  done();
};

const styles = () => gulp.src(`${paths.src}/assets/css/styles.css`)
  .pipe(postcss([
    // @see https://tailwindcss.com/docs/configuration
    tailwindcss('./tailwind.js'),
    // @see https://www.purgecss.com/configuration
    purgecss({
      content: [`${paths.src}/**/*.latte`],
      extractors: [
        {
          extractor: TailwindExtractor,
          extensions: ['latte'],
        },
      ],
      whitelistPatternsChildren: [/anchor/, /algolia/]
    })
  ]))
  .pipe(gulp.dest(`${paths.dist}/assets/css`))
  .pipe(browserSync.stream());

const watch = () => {
  browserSync.init({
    open: false,
    server: paths.dist
  });

  gulp.watch(['*.yml', 'source'], gulp.series(generate, styles, reload));
  gulp.watch([`${paths.src}/assets/css/*.css`], styles);
};

gulp.task('default', gulp.series(clean, generate, styles, watch));
gulp.task('build', gulp.series(clean, generate, styles));

gulp.task(styles);
gulp.task(clean);
