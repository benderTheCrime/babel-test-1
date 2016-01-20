'use strict';

import gulp from 'gulp';

export default function registerGulpTasks(gulp) {
    gulp.task('test', function() {
        console.log('test passed');
    });
}

registerGulpTasks(gulp);