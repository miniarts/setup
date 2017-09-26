
/*!
 * gulp
 * $ npm install gulp-less gulp-autoprefixer gulp-minify-css jshint gulp-jshint gulp-concat gulp-uglify gulp-rename  --save-dev
 */
 
// Load plugins
var gulp = require('gulp'),
    less = require('gulp-less'),
    path = require('path'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
   jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    minify = require('gulp-minify-css'),
    rename = require('gulp-rename');
   //clean = require('gulp-clean');
 
// Styles
gulp.task('stylesDS', function() {
  return gulp.src('DS/src/less/custom*')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest('DS/build/css'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minify())
    .pipe(gulp.dest('DS/build/css'));
    //.pipe(clean());
});
gulp.task('stylesDSCN', function() {
  return gulp.src('DSCN/src/less/custom*')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest('DSCN/build/css'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minify())
    .pipe(gulp.dest('DSCN/build/css'));
    //.pipe(clean());
});
gulp.task('stylesDSComp', function() {
  return gulp.src('DS/src/less-component/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest('DS/build/css'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minify())
    .pipe(gulp.dest('DS/build/css-component'));
    //.pipe(clean());
});

// Scripts
gulp.task('scriptsDS', function() {
  return gulp.src('DS/src/js/*.js') 
    .pipe(jshint('.jshintrc'))
    //.pipe(jshint.reporter('default'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('DS/build/js'));
});
gulp.task('scriptsDSCN', function() {
  return gulp.src('DSCN/src/js/*.js') 
    //.pipe(jshint('.jshintrc'))
    //.pipe(jshint.reporter('default'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('DSCN/build/js'));
});
 
 gulp.task('scriptsIH', function() {
  return gulp.src('IH/rsc/js/*.js') 
    //.pipe(jshint('.jshintrc'))
    //.pipe(jshint.reporter('default'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('IH/build/js'));
});
 
// Watch
gulp.task('watch', function() {
 
  // Watch .less files
  gulp.watch('less/*.less', ['stylesDS']);
 
  // Watch .js files
  gulp.watch('**/*.js', ['scriptsDS']);
  gulp.watch('**/*.js', ['scriptsIS']);
 
  livereload.listen();
 
 
});