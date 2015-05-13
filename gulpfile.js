var less = require('gulp-less');
var gulp = require('gulp');
var path = require('path');

// Compile Our Less
gulp.task('less', function() {
    return gulp.src(['spacing.less'])
        .pipe(less())
        .pipe(gulp.dest('.'));
});

// Default Task
gulp.task('default', ['less']);
