var gulp         = require('gulp');
var gutil        = require('gulp-util');
var autoprefixer = require('gulp-autoprefixer');
var sass         = require ('gulp-sass');
var plumber      = require('gulp-plumber');
var notify       = require('gulp-notify'); 
var browserSync  = require('browser-sync'); 
var sourcemaps   = require('gulp-sourcemaps');
var cache        = require('gulp-cache');
var imageOpt     = require('gulp-image-optimization');
var jshint       = require('gulp-jshint');
var useref       = require('gulp-useref'); 
var uglify       = require('gulp-uglify'); 
var gulpIf       = require('gulp-if');
var clean        = require('gulp-clean');







function customPlumber(errTitle) { 
  return plumber({
    errorHandler: notify.onError({
          // Customizing error title
          title: errTitle || "Error running Gulp",
          message: "Error: <%= error.message %>",
          sound: "Glass"
        })
    });
}





gulp.task('sass', function(){
    return  gulp.src('theme/sass/**/*.scss')
        .pipe(customPlumber('Error Running Sass'))
        // inititalizr sourcemap before anyother pluging that alter  files
        .pipe(sourcemaps.init())
        .pipe(sass({
            precision: 2
        }))
        .pipe(autoprefixer({
          browsers: ['ie 8-9', 'last 2 versions']
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('theme/css'))
        .pipe(browserSync.reload({
          stream: true
        }))
        
})


gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'theme'
    },

    // Use Wordpress.dev instead of spinning up a server
    // proxy: wordpress.dev
  })
})

gulp.task('images', function(){
  var imageDirectoryToOptimise = 'theme/images'
 

  gulp.src([imageDirectoryToOptimise + '/**/*.{jpg,png,jpeg}'])
  .pipe(cache(imageOpt({
      optimizationLevel: 5,
      progressive: true,
      interlaced: true
  })))

  .pipe(gulp.dest(imageDirectoryToOptimise));


})


// GULP USEREF FOR CONTACT SCRIPTS
gulp.task('jshint', function() {

  return gulp.src('theme/js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));

});


gulp.task('useref', function(){
  return gulp.src('theme/*.html')
    .pipe(useref())
    // // Minifies only if it's a JavaScript file
    // .pipe(gulpIf('*.js', uglify()))
    .pipe(gulp.dest('theme/js'))
});



 
gulp.task('watch', ['browserSync', 'sass', 'jshint'], function(){ 
    gulp.watch('theme/sass/**/*.scss', ['sass']);
    gulp.watch('theme/js/**/*.js', browserSync.reload);
    gulp.watch('theme/*.html', browserSync.reload);
    gulp.watch('theme/js/**/*.js', ['jshint']);
})





