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
var Handlebars   = require('handlebars');
var cssnano      = require('gulp-cssnano');
var concat       = require('gulp-concat');


// Project Configuration

var project = 'my-theme';

var basePaths = {
    src: 'theme/src/',
    build: 'theme/build/',
    dist: 'theme/dist/',
    bower: 'theme/bower_components/'
};

var paths = {
  images: {
    src: basePaths.src + 'images/',
    dist: basePaths.dist + 'images/'
  },
  scripts: {
    src: basePaths.src + 'js/',
    dist: basePaths.dist + 'js/'
  },
  styles: {
    src: basePaths.src + 'sass/',
    build: basePaths.build + 'css/',
    dist: basePaths.dist + 'css/'
  }
};




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
    return  gulp.src(paths.styles.src + '**/*.scss')
        .pipe(customPlumber('Error Running Sass'))
        // inititalizr sourcemap before anyother pluging that alter  files
        .pipe(sourcemaps.init())
        .pipe(sass({
            precision: 2
        }))
        .pipe(autoprefixer({
          browsers: ['ie 8-9', 'last 2 versions']
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(paths.styles.build))
        .pipe(browserSync.reload({
          stream: true
        }))
        
})


gulp.task('sass:dist', function(){
    return  gulp.src(paths.styles.src + '**/*.scss')
        .pipe(customPlumber('Error Running Sass'))
        // inititalizr sourcemap before anyother pluging that alter  files
        .pipe(sourcemaps.init())
        .pipe(sass({
            precision: 2,
            outputStyle: 'compressed'
        }))
        .pipe(autoprefixer({
          browsers: ['ie 8-9', 'last 2 versions']
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(paths.styles.dist))
        .pipe(browserSync.reload({
          stream: true
        }))
        
})





gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: basePaths.build
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

// GULP SCRIPTS TASK CONACT

gulp.task('scripts', function(){
  return gulp.src(paths.scripts.src + '**/*.js')
    .pipe(concat('main_edu.js'))
    .pipe(gulp.det('theme/build/js/main_edu.js'));
});

gulp.task('jshint', function() {

  return gulp.src('theme/js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));

});


// GULP USEREF FOR CONACT SCRIPTS ONLY WORKS IN HTML

gulp.task('bundles', function(){
  return gulp.src('theme/src/*.html')
    .pipe(useref())
    // // Minifies only if it's a JavaScript file
    .pipe(gulp.dest('theme/build'))
});

gulp.task('bundles:dist', function(){
  return gulp.src('theme/src/*.html')
    .pipe(useref())
    // // Minifies only if it's a JavaScript file
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulp.dest('theme/build'))
});





 
gulp.task('watch', ['browserSync', 'sass', 'jshint'], function(){ 
    gulp.watch(paths.styles.src + '**/*.scss', ['sass']);
    gulp.watch(paths.scripts.src + '**/*.js', browserSync.reload);
    gulp.watch('theme/*.html', browserSync.reload);
    gulp.watch('theme/js/**/*.js', ['jshint']);
})





