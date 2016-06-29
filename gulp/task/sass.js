// // sass.js taks

// // require modules
// var gulp = require('gulp');
// var sourcemaps = require('gulp-sourcemaps');
// var sass = require('gulp-sass');
// var autoprefixer = require('gulp-autoprefixer'); var browserSync = require('browser-sync');
// var plumber = require('gulp-plumber');
// var notify = require('gulp-notify');
// var gutil = require('gulp-util');

// gulp.task('sass', function(){
//     return  gulp.src(paths.styles.src + '**/*.scss')
       
//         .pipe(customPlumber('Error running Sass'))
        

//         // inititalizr sourcemap before anyother pluging that alter  files
//         .pipe(sourcemaps.init())
//         .pipe(sass({
//             includePaths: ['theme/bower_components'],
//             precision: 2
//         }))
//         .pipe(autoprefixer({
//           browsers: ['ie 8-9', 'last 2 versions']
//         }))
//         .pipe(sourcemaps.write('./'))
//         .pipe(gulp.dest(paths.styles.build))
//         .pipe(browserSync.reload({stream:true}))

        
// })


// gulp.task('sass:dist', function(){
//     return  gulp.src(paths.styles.src + '**/*.scss')
//         .pipe(customPlumber('Error Running Sass'))
//         // inititalizr sourcemap before anyother pluging that alter  files
//         .pipe(sourcemaps.init())
//         .pipe(sass({
//             includePaths: ['theme/bower_components'],
//             precision: 2,
//             outputStyle: 'compressed'
//         }))
//         .pipe(autoprefixer({
//           browsers: ['ie 8-9', 'last 2 versions']
//         }))
//         .pipe(sourcemaps.write('./'))
//         .pipe(gulp.dest(paths.styles.dist))
//         .pipe(browserSync.reload({stream:true}))
        
// })