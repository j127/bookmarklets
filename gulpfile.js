var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var notify = require('gulp-notify');
var addsrc = require('gulp-add-src');
var frep = require('gulp-frep');

var patterns = [
    {
        // Remove newlines
        pattern: /(\r\n|\n){2,}/g,
        replacement: ''
    }
];

gulp.task('build', function () {
    return gulp.src('hide_interstitials/hideInterstitials.js')
        .pipe(uglify())
        .pipe(addsrc.prepend('prefix.js')) 
        .pipe(concat('hideInterstitials.min.js'))
        .pipe(frep(patterns))
        .pipe(gulp.dest('build'))
        .pipe(notify({ message: 'Finished build'}));
});
