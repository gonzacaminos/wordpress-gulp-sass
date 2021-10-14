const gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass')(require('sass'));

const sass_src = 'src/scss/*.scss' 
const sass_dest= 'app/css'

function style() {
    return gulp.src(sass_src)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(sass_dest))
    .pipe(browserSync.stream());
  }


function watch() {
    browserSync.init({
        proxy: ""
    });
    gulp.watch(sass_src, style)
    gulp.watch('./*.php').on('change',browserSync.reload);
}


  exports.watch = watch
