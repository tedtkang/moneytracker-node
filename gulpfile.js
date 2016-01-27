'use strict';

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    jshint = require('gulp-jshint'),
    nodemon = require('gulp-nodemon');

var env = process.env.NODE_ENV || 'development';
/*
var defaultTasks = ['clean', 'jshint', 'csslint','serve','watch']; // initialize with development settings
if (env === 'production') { var defaultTasks = ['clean', 'cssmin', 'uglify', 'serve', 'watch'];}
if (env === 'test')       { var defaultTasks = ['env:test', 'karma:unit', 'mochaTest'];}
*/
// read gulp directory contents for the tasks...

// JS hint task
gulp.task('jshint', function() {
  gulp.src('./src/scripts/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('start', function () {
  nodemon({
    script: 'server.js'
  , ext: 'js html'
  , env: { 'NODE_ENV': 'development' }
  })
})

gulp.task('default', ['jshint', 'start'], function() {
  // place code for your default task here
});

/*
require('require-dir')('./gulp');
console.log('Invoking gulp -',env);
gulp.task('default', ['clean'], function (defaultTasks) {
  // run with paramater
  gulp.start(env);
});
*/