const gutil = require('gulp-util');
const env = require('../../build-env.js');

module.exports = (gulp, done) => {
    gutil.log('Building statics');
    return gulp.src(`${env.DIR_SRC}/**/*.html`).pipe(gulp.dest(env.DIR_DEST));
};
