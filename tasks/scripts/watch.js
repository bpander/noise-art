const gutil = require('gulp-util');
const source = require('vinyl-source-stream');
const watchify = require('watchify');
const transpile = require('./transpile.js');
const env = require('../../build-env.js');


module.exports = (gulp, done) => {

    const bundler = watchify(transpile(gulp, done));

    const bundle = () => {
        gutil.log('Bundling scripts');
        bundler
            .bundle()
            .on('error', gutil.log.bind(gutil, 'Browserify Error'))
            .pipe(source(env.SCRIPTS_ENTRY))
            .pipe(gulp.dest(`${env.DIR_DEST}/${env.SCRIPTS_PATH}`));
    };

    bundler.on('update', bundle);
    bundle();

    return bundler;
};
