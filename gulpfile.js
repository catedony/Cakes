var gulp = require('gulp'),
    gutil = require('gulp-util'),
    connect = require('gulp-connect'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    minifyHTML = require('gulp-minify-html'),
    imagemin = require('gulp-imagemin'),
		pngcrush = require('imagemin-pngcrush'),
		concat = require('gulp-concat'),
		sass = require('gulp-sass');

var env,
    jsSources,
    sassSources,
    outputDir;

env = process.env.NODE_ENV || 'development';

if (env==='development') {
  outputDir = 'builds/development/';
} else {
  outputDir = 'builds/production/';
}

jsSources = 'src/js/*.js';
sassSources = ['src/sass/styles.scss', 'src/sass/blocks/*.scss', 'src/sass/utility/*.scss'];


gulp.task('js', function() {
  gulp.src(jsSources)
    .pipe(concat('script.js'))
    .pipe(gulpif(env === 'production', uglify()))
    .pipe(gulp.dest(outputDir + 'js'))
    .pipe(connect.reload())
});

gulp.task('sass', function () {
  return gulp.src(sassSources)
    .pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest(outputDir + 'css'))
		.pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch(jsSources, ['js']);
  gulp.watch(sassSources, ['sass']);
  gulp.watch('builds/development/*.html', ['html']);
  gulp.watch('builds/development/images/**/*.*', ['images']);
});

gulp.task('connect', function() {
  connect.server({
    root: outputDir,
    livereload: true
  });
});

gulp.task('html', function() {
  gulp.src('builds/development/*.html')
    .pipe(gulpif(env === 'production', minifyHTML()))
    .pipe(gulpif(env === 'production', gulp.dest(outputDir)))
    .pipe(connect.reload());
});

gulp.task('images', function() {
  gulp.src('builds/development/img/**/*.*')
    .pipe(gulpif(env === 'production', imagemin({
      progressive: true,
      svgoPlugins: [{ removeViewBox: false }],
      use: [pngcrush()]
    })))
    .pipe(gulpif(env === 'production', gulp.dest(outputDir + 'img')))
    .pipe(connect.reload())
});


gulp.task('default', ['html', 'js', 'sass', 'images', 'connect', 'watch']);