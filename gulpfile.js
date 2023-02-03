const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

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

function compressJS(cb) {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/scripts'));
}

exports.default = gulp.parallel(style, imagens, compressJS);
exports.watch = function(){
    gulp.watch('src/styles/**.scss', gulp.parallel(style))
    gulp.watch('src/**/*.js', gulp.parallel(compressJS))
}