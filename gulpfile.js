const gulp = require('gulp');
const gulpRequireTasks = require('gulp-require-tasks');


gulpRequireTasks({
    path: `${__dirname}/tasks`
});

gulp.task('build', [ 'scripts:build', 'static:build' ]);

gulp.task('watch', [ 'scripts:watch', 'static:watch' ]);

gulp.task('default', [ 'static:build', 'watch' ]);
