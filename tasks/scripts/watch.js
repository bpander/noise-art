const watchify = require('watchify');
const transpile = require('./transpile.js');
const gutil = require('gulp-util');

module.exports = (grunt, done) => {


    const bundler = watchify(transpile(grunt, done));

    bundler.bundle();

    bundler.on('update', () => {
        gutil.log('Rebuilding');
        bundler.bundle()
            .pipe(source('main.js'))
            .pipe(gulp.dest('dist/assets/scripts'));
    });

    return bundler;
};
