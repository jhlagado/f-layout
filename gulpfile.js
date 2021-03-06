var gulp = require('gulp');
var runSequence = require('run-sequence');
var pump = require('pump');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');

gulp.task('sass', function (cb) {
     pump([
	gulp.src('src/*.scss'),
	sourcemaps.init(),
    	sass().on('error', sass.logError),
        sourcemaps.write('.', {includeContent: false, sourceRoot: '../src'}),
	    gulp.dest('css'),
     ],
     cb
   );
});

gulp.task('minify-css', function (cb) {
   pump([
         gulp.src('css/*.css'),
      	 sourcemaps.init({loadMaps: true}),
         cleanCSS({compatibility: 'ie11'}),
         rename({suffix: '.min' }),
         sourcemaps.write('.', {includeContent: false}),
         gulp.dest('dist')
     ],
     cb
   );
});

gulp.task('copy', function(){
    return gulp.src('css/*.*').pipe(gulp.dest('dist'));
});

// entry point - run tasks in a sequence
gulp.task('build', function (callback) {
    runSequence(
        'sass',
        'minify-css',
        'copy',
        function (error) {
            if (error) {
                console.log(error.message);
            } else {
                console.log('FINISHED SUCCESSFULLY');
            }
            callback(error);
        });
});

gulp.task('watch', ['build'], function () {
  gulp.watch('./src/*.scss', ['build']);
});

gulp.task('default', ['build']);
