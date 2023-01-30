const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

function style(cb){
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({
            outputStyle: 'compressed',
        }))
        .pipe(gulp.dest('./dist/styles/'));
    cb();
}

function imagens(cb){
    return gulp.src('./src/images/**')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images/'));
    cb();
}

exports.default = style;
exports.watch = function(){
    gulp.watch('src/styles/**', gulp.parallel(style))
}