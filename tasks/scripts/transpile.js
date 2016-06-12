const browserify = require('browserify');
const babelify = require('babelify');


module.exports = (gulp, done) => {
    return browserify({
        entries: 'src/assets/scripts/main.js',
        debug: true,
    }).transform(babelify, { presets: [ 'es2015' ] });
};
