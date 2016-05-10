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
var cssnano      = require('gulp-cssnano');
var concat       = require('gulp-concat');
var del          = require('del');
var runSequence  = require('run-sequence');
var fs           = require('fs');





// ==========================================================
// Project Configuration
// ==========================================================

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
    build: basePaths.build + 'images/',
    dist: basePaths.dist + 'images/'
  },
  scripts: {
    src: basePaths.src + 'js/',
    build: basePaths.build + 'js/',
    dist: basePaths.dist + 'js/'
  },
  styles: {
    src: basePaths.src + 'sass/',
    build: basePaths.build + 'css/',
    dist: basePaths.dist + 'css/'
  }
};









// ==========================================================
// Pumbler error function
// ==========================================================


function customPlumber(errTitle) { 
  return plumber({
    errorHandler: notify.onError({
          // Customizing error title
          title: errTitle || "Error running Gulp",
          message: "Error: <%= error.message %>",
          sound: "Glass"
    })
  });
  this.emit('end');
}




// ==========================================================
// TASK COPY PHP FILES TO BUID
// ==========================================================


// All the theme tasks in one
gulp.task('theme:build', ['copyPhp', 'copyLanguages', 'copystyle']);


// Copy php files
gulp.task('copyPhp', function(){
  return gulp.src(basePaths.src + '**/*.php')
    .pipe(gulp.dest(basePaths.build));
    
});

// copy all lenguages files
gulp.task('copyLanguages', function(){
  return gulp.src(basePaths.src + 'languages/**/*')
    .pipe(gulp.dest(basePaths.build + 'languages/'));
});

gulp.task('copystyle', function(){
  return gulp.src(basePaths.src + 'style.css')
    .pipe(gulp.dest(basePaths.build));
});




// ==========================================================
// STYLES TASK
// ==========================================================

gulp.task('sass', function(){
    return  gulp.src(paths.styles.src + '**/*.scss')
       
        .pipe(customPlumber('Error Running Sass'))
        

        // inititalizr sourcemap before anyother pluging that alter  files
        .pipe(sourcemaps.init())
        .pipe(sass({
            includePaths: ['theme/bower_components'],
            precision: 2
        }))
        .pipe(autoprefixer({
          browsers: ['ie 8-9', 'last 2 versions']
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(paths.styles.build))
        .pipe(browserSync.reload())
        .pipe(notify({ message: 'Styles task complete' }))
        
})


gulp.task('sass:dist', function(){
    return  gulp.src(paths.styles.src + '**/*.scss')
        .pipe(customPlumber('Error Running Sass'))
        // inititalizr sourcemap before anyother pluging that alter  files
        .pipe(sourcemaps.init())
        .pipe(sass({
            includePaths: ['theme/bower_components'],
            precision: 2,
            outputStyle: 'compressed'
        }))
        .pipe(autoprefixer({
          browsers: ['ie 8-9', 'last 2 versions']
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(paths.styles.dist))
        // .pipe(browserSync.reload({
        //   stream: true
        // }))
        
})


// ==========================================================
// browserSync TASK
// ==========================================================


gulp.task('browserSync', function() {
  browserSync({

    notify: false,
    proxy: 'http://localhost:8888/',
    port: 3000,
    open: true,
    watchOptions: {
      debounceDelay: 2000 // This introduces a small delay when watching for file change events to avoid triggering too many reloads
    }

  })
})





// ==========================================================
// Images Task
// ==========================================================


// Copy changed images from the source folder to `build` (fast)
gulp.task('images:build', function() {
  return gulp.src(paths.images.src + '/**/*.{jpg,png,jpeg}')
    .pipe(gulp.dest(paths.images.build));
});

// Optimize images in the `dist` folder (slow)
gulp.task('images:dist', function(){

  return gulp.src([paths.images.src + '/**/*.{jpg,png,jpeg}'])
    .pipe(cache(imageOpt({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    })))

    .pipe(gulp.dest(paths.images.dist));


})



// ==========================================================
//  SCRIPTS TASK
// ==========================================================


gulp.task('scripts:build', function(){
  return gulp.src(paths.scripts.src + '**/*.js')
    // .pipe(concat('main_edu.js'))
    .pipe(gulp.dest(paths.scripts.build))
});

gulp.task('scripts:dist', function(){
  return gulp.src(paths.scripts.src + '**/*.js')
    // .pipe(concat('main_edu.js'))
    .pipe(gulp.dest(paths.scripts.dist))
});

gulp.task('jshint', function() {

  return gulp.src('theme/js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));

});


// GULP USEREF FOR CONCACT SCRIPTS ONLY WORKS IN HTML

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




// ==========================================================
//  FONTS TASK
// ==========================================================

gulp.task('fonts:build', function(){
  return gulp.src(basePaths.src + 'fonts/**.*')
    .pipe(gulp.dest(basePaths.build + 'fonts'))
});

gulp.task('fonts:dist', function(){
  return gulp.src(basePaths.src + 'fonts/**.*')
    .pipe(gulp.dest(basePaths.dist + 'fonts'))
});





// ==========================================================
//  CLEAN TASK
// ==========================================================

// cleaning process
gulp.task('clean:build', function(callback){
    del([
      basePaths.build + '**/*'
    ], callback);
});




// ==========================================================
//  WATCH TASK
// ==========================================================
 
gulp.task('watch', ['browserSync'], function(){ 
    gulp.watch(basePaths.src + 'sass/**/*.scss', ['sass']);
    gulp.watch(paths.scripts.src + '**/*.js', browserSync.reload);
    gulp.watch('theme/*.html', browserSync.reload);
    gulp.watch('theme/js/**/*.js', ['jshint']);
})



// ==========================================================
//  BUILD TASK WITH WATCH
// ==========================================================

// Consolidated dev pahse task for build folder

// gulp.task('default', function(done) {
//   runSequence('clean:build',
//     'images:build',
//     'theme:build',
//     'fonts:build',
//     ['sass', 'scripts:build'],
//     function(){
//       console.log('here is a random thing');
//       done();
//     });
// });

  



gulp.task('default', [
  'clean:build',
  'images:build',
  'theme:build',
  'fonts:build',
  'scripts:build',
  'sass',
  'browserSync', 
  'watch'
  ], function(){
});





