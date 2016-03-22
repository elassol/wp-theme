var gulp         = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var sass         = require ('gulp-sass');
var plumber      = require('gulp-plumber');
var notify       = require('gulp-notify'); 
var browserSync  = require('browser-sync'); 






function customPlumber(errTitle) { return plumber({
        errorHandler: notify.onError({
          // Customizing error title
          title: errTitle || "Error running Gulp",
          message: "Error: <%= error.message %>",
        })
    });
}

gulp.task('sass', function(){
    return  gulp.src('theme/sass/**/*.scss')
        .pipe(customPlumber('Error Running Sass'))
        .pipe(sass({
            precision: 2
        }))
        .pipe(autoprefixer())
        .pipe(gulp.dest('theme/css'));
        .pipe(browserSync.reload{
            stream: true
        }))
});



 
gulp.task('watch', function(){ 
    gulp.watch('theme/sass/**/*.scss', ['sass']); // 
})


gulp.task('browserSync', function() {
      browserSync({
        server: {
          baseDir: 'app'
    }, })
})