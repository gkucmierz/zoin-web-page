
// gulpfile.js

let gulp = require('gulp');
let watch = require('gulp-watch');
let runSequence = require('run-sequence');



gulp.task('default', (callback) => runSequence('serve', callback));
