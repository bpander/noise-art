const gutil = require('gulp-util');
const env = require('../../build-env.js');


module.exports = (gulp, done) => {
    const watcher = gulp.watch(`${env.DIR_SRC}/**/*.html`, [ 'static:build' ]);

    watcher.on('change', e => {
        gutil.log(`File ${e.path} was ${e.type}`);
    });

    return watcher;
};
