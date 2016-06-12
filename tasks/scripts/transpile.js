const aliasify = require('aliasify');
const browserify = require('browserify');
const babelify = require('babelify');
const env = require('../../build-env.js');


module.exports = (gulp, done) => {
    return browserify({
        entries: [`${env.DIR_SRC}/${env.SCRIPTS_PATH}/${env.SCRIPTS_ENTRY}`],
        cache: {},
        packageCache: {},
    }).transform(babelify, {
        presets: [ 'es2015' ]
    }).transform(aliasify, {
        aliases: {
            '~': `./${env.DIR_SRC}/${env.SCRIPTS_PATH}`
        }
    });
};
