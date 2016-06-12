const gulp = require('gulp');
const gulpRequireTasks = require('gulp-require-tasks');


gulpRequireTasks({
    path: `${__dirname}/tasks`
});

gulp.task('build', [ 'scripts:build' ]);

gulp.task('watch', [ 'scripts:watch' ]);

gulp.task('default', [ 'build' ]);
