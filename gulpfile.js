var gulp         = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var sass         = require ('gulp-sass');
var plumber      = require('gulp-plumber');
var notify       = require('gulp-notify'); 





function customPlumber () { return plumber({
    return plumber({
        errorHandler: notify.onError("Error: <%= error.message %>")
    });
}

gulp.task('sass', function(){
    return  gulp.src('theme/sass/**/*.scss')
        .pipe(customPlumber())
        .pipe(sass({
            precision: 2
        }))
        .pipe(autoprefixer())
        .pipe(gulp.dest('theme/css'));
});



 
gulp.task('watch', function(){ 
    gulp.watch('theme/sass/**/*.scss', ['sass']); // 
})


