var gulp = require('gulp');
var rimraf = require('gulp-rimraf');
var runSequence = require('run-sequence');
var uglify = require('gulp-uglify');
var pump = require('pump');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');

var paths = {
    dist: './dist',
    sourceFiles: ['./src/*'],
    toDelete: ['./dist/src','./dist/app','./dist/test'],
    distSourcesFiles: ['./dist/src/*']
};

gulp.task('clean', function () {
    return gulp.src(paths.dist, {read: false}).pipe(rimraf({force: true}));
});

gulp.task('copySources', function(){
    return gulp.src(paths.sourceFiles).pipe(gulp.dest(paths.dist));
});

gulp.task('copy', function(){
    return gulp.src(paths.distSourcesFiles).pipe(gulp.dest(paths.dist));
});

gulp.task('cleanup', function () {
    return gulp.src(paths.toDelete, {read: false}).pipe(rimraf({force: true}));
});

gulp.task('minify-css', function() {
  return gulp.src('styles/*.css')
    .pipe(cleanCSS({compatibility: 'ie11'}))
    .pipe(gulp.dest('dist'));
});

// gulp.task('compress', function (cb) {
//   pump([
//         gulp.src('src/*.js'),
//         uglify(),
// 		rename({ suffix: '.min' }),
//         gulp.dest('dist')
//     ],
//     cb
//   );
// });


// entry point - run tasks in a sequence
gulp.task('default', function (callback) {
    runSequence(
       'clean',
       'minify-css',
       'copySources',
        function (error) {
            if (error) {
                console.log(error.message);
            } else {
                console.log('FINISHED SUCCESSFULLY');
            }
            callback(error);
        });
});
