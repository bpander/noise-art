
module.exports = (gulp, done) => {
    return gulp.watch('src/**/*.html', ['static:build']);
};
