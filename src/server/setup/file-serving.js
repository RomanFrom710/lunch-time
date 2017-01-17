'use strict';

const webpack = require('webpack');
const webpackConfig = require('../../../webpack.config');
const webpackDevMiddleware = require('koa-webpack-dev-middleware');
const webpackHotMiddleware = require('koa-webpack-hot-middleware');
const koaStatic = require('koa-static');

const helpers = require('./helpers');
const config = require('../config');


module.exports = function (app) {
    // Allowing to access client routes
    app.use(apiFallbackMiddleware);

    if (helpers.isDevelopmentEnv()) {
        const webpackCompiler = webpack(webpackConfig);

        app
            .use(webpackDevMiddleware(webpackCompiler))
            .use(webpackHotMiddleware(webpackCompiler));
    } else {
        app.use(koaStatic('./public'));
    }
};

function* apiFallbackMiddleware(next) {
    const isApiRequest = this.url.startsWith('/' + config.get('app:links:prefix'));
    const isHttpRequest = this.headers.accept && /text\/html/.test(this.headers.accept);

    if (this.method === 'GET' && !isApiRequest && isHttpRequest) {
        this.url = '/index.html';
    }

    yield next;
}