var webpackConfig = require('./webpack.test');

module.exports = function (config) {
    var karmaConfig = {
        basePath: '',
        frameworks: ['jasmine'],
        files: [{
            pattern: './config/karma-test-shim.js',
            watched: false
        }],
        preprocessors: {
            './config/karma-test-shim.js': ['webpack', 'sourcemap']
        },
        webpack: webpackConfig,
        webpackMiddleware: {
            stats: 'errors-only'
        },
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        singleRun: true
    };

    config.set(karmaConfig);
};
