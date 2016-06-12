const gutil = require('gulp-util');

module.exports = (gulp, done) => {
    gutil.log('Building static');
    return gulp.src('./src/**/*.html', {
        base: './src',
    }).pipe(gulp.dest('./dist'));
};
