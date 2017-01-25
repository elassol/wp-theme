// ==========================================================
// Project Configuration
// ==========================================================

var project = 'my-theme';

global.basePaths = {
    src: 'theme/src/',
    build: 'theme/build/',
    dist: 'theme/dist/',
    bower: 'theme/bower_components/'
},
paths = {
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

// global.paths = {
//   images: {
//     src: basePaths.src + 'images/',
//     build: basePaths.build + 'images/',
//     dist: basePaths.dist + 'images/'
//   },
//   scripts: {
//     src: basePaths.src + 'js/',
//     build: basePaths.build + 'js/',
//     dist: basePaths.dist + 'js/'
//   },
//   styles: {
//     src: basePaths.src + 'sass/',
//     build: basePaths.build + 'css/',
//     dist: basePaths.dist + 'css/'
//   }
// };