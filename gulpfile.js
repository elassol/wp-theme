var gulp         = require('gulp');
var gutil        = require('gulp-util');
var autoprefixer = require('gulp-autoprefixer');
var sass         = require ('gulp-sass');
var plumber      = require('gulp-plumber');
var notify       = require('gulp-notify'); 
var browserSync  = require('browser-sync'); 
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
var sourcemaps   = require('gulp-sourcemaps');
var fs           = require('fs');
var handlebars   = require('gulp-compile-handlebars');
var rename       = require('gulp-rename');
var jscs         = require('gulp-jscs');
var uglify       = require('gulp-uglify'); 
var requireDir   = require('require-dir');

// Require gulp tasks from task directory
requireDir('./gulp/task');


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

}



// ==========================================================
// NEW THEME
// ==========================================================


// Not working just yet

gulp.task('new', function() {

  gulp.src('templates/*.hbs')
      .pipe(handlebars(args.theme_name))
      .pipe(rename(fileName + ".css"))
      .pipe(gulp.dest('./'));

});




// ==========================================================
// TASK COPY PHP FILES TO BUID
// ==========================================================


// All the theme tasks in one for build and dist folders
gulp.task('theme:build', ['copyPhp', 'copyLanguages', 'copystyle', 'screenshot:build']);

gulp.task('theme:dist', ['copyPhp:dist', 'copyLanguages:dist', 'copystyle:dist', 'screenshot:dist']);

// Copy php files
gulp.task('copyPhp', function(){
  return gulp.src(basePaths.src + '**/*.php')
    .pipe(customPlumber('Error PHP'))
    .pipe(gulp.dest(basePaths.build))
    .pipe(browserSync.reload({stream:true}))    
});

gulp.task('copyPhp:dist', function(){
  return gulp.src(basePaths.src + '**/*.php')
    .pipe(gulp.dest(basePaths.dist))  
});

// copy all lenguages files
gulp.task('copyLanguages', function(){
  return gulp.src(basePaths.src + 'languages/**/*')
    .pipe(gulp.dest(basePaths.build + 'languages/'));
});

gulp.task('copyLanguages:dist', function(){
  return gulp.src(basePaths.src + 'languages/**/*')
    .pipe(gulp.dest(basePaths.dist + 'languages/'));
});


// copy style.css 
gulp.task('copystyle', function(){
  return gulp.src(basePaths.src + 'style.css')
    .pipe(gulp.dest(basePaths.build));
});

gulp.task('copystyle:dist', function(){
  return gulp.src(basePaths.src + 'style.css')
    .pipe(gulp.dest(basePaths.dist));
});

// copy screenshot.png to theme root

gulp.task('screenshot:build', function(){
  return gulp.src(basePaths.src + 'screenshot.png')
    .pipe(gulp.dest(basePaths.build))  
});

gulp.task('screenshot:dist', function(){
  return gulp.src(basePaths.src + 'screenshot.png')
    .pipe(gulp.dest(basePaths.dist))  
});





// ==========================================================
// STYLES TASK
// ==========================================================

gulp.task('sass', function(){
    return  gulp.src(paths.styles.src + '**/*.scss')
       
        .pipe(customPlumber('Error running Sass'))
        

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
        .pipe(browserSync.reload({stream:true}))

        
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
        .pipe(browserSync.reload({stream:true}))
        
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
  return gulp.src(paths.images.src + '/**/*.{jpg,png,jpeg,gif}')
    .pipe(gulp.dest(paths.images.build));
});

// Optimize images in the `dist` folder (slow)
gulp.task('images:dist', function(){

  return gulp.src([paths.images.src + '/**/*.{jpg,png,jpeg,gif}'])
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
    .pipe(sourcemaps.init())
    .pipe(concat('main.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.scripts.build))
    .pipe(browserSync.reload({stream:true}))
});

gulp.task('scripts:dist', function(){
  return gulp.src(paths.scripts.src + '**/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('main.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.scripts.dist))
    .pipe(rename('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(paths.scripts.dist))
});

gulp.task('lint:js', function() {

  return gulp.src(paths.scripts.src + '**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail', {
      ignoreWarning: true,
      ignoreInfo: true
    }))
    // Adding JSCS to lint:js task
    .pipe(jscs({
      fix: true,
      configPath: '.jscsrc'
    }))
    .pipe(gulp.dest(paths.scripts.src))

});


// GULP USEREF FOR CONCACT SCRIPTS ONLY WORKS IN HTML

// gulp.task('bundles', function(){
//   return gulp.src('theme/src/*.html')
//     .pipe(useref())
//     // // Minifies only if it's a JavaScript file
//     .pipe(gulp.dest('theme/build'))
// });

// gulp.task('bundles:dist', function(){
//   return gulp.src('theme/src/*.html')
//     .pipe(useref())
//     // // Minifies only if it's a JavaScript file
//     .pipe(gulpIf('*.js', uglify()))
//     .pipe(gulp.dest('theme/build'))
// });




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
    return del([
      basePaths.build + '**/*'
    ], callback);
});

// cleaning process
gulp.task('clean:dist', function(callback){
    return del([
      basePaths.dist + '**/*'
    ], callback);
});







// ==========================================================
//  WATCH TASK
// ==========================================================
 
gulp.task('watch', ['browserSync'], function(){ 
    gulp.watch(basePaths.src + 'sass/**/*.scss', ['sass']);
    gulp.watch(basePaths.src + 'js/**/*.js', ['scripts:build']);
    gulp.watch(basePaths.src + '**/*.php', ['copyPhp'], browserSync.reload);
    gulp.watch('theme/js/**/*.js', ['jshint']);
})



// ==========================================================
//  BUILD TASK WITH WATCH
// ==========================================================

// Consolidated dev pahse task for build folder

gulp.task('default', function(callback) {
  runSequence(
    'clean:build',
    ['images:build', 'theme:build'],
    'fonts:build',
    ['sass', 'scripts:build'],
    ['browserSync', 'watch'],
    callback);
});

  









