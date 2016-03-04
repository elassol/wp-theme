var gulp         = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var sass         = require ('gulp-sass');
var plumber      = require('gulp-plumber');
 



gulp.task('sass', function(){
    return  gulp.src('theme/sass/**/*.scss')
        .pipe(sass({
            precision: 2
        }))
        .pipe(autoprefixer())
        .pipe(gulp.dest('theme/css'));
});



 
gulp.task('watch', function(){ 
    gulp.watch('theme/scss/**/*.scss', ['sass']); // 
})