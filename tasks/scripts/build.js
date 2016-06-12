const transpile = require('./transpile.js');
const source = require('vinyl-source-stream');


module.exports = (gulp, done) => {

    return transpile(gulp, done)
        .bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest('dist/assets/scripts'));
};
