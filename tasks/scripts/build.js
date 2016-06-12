const source = require('vinyl-source-stream');
const transpile = require('./transpile.js');
const env = require('../../build-env.js');


module.exports = (gulp, done) => {

    const bundler = transpile(gulp, done);
    return bundler
        .bundle()
        .pipe(source(env.SCRIPTS_ENTRY))
        .pipe(gulp.dest(`${env.DIR_DEST}/${env.SCRIPTS_PATH}`));

};
