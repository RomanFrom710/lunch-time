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

const apiFallbackMiddleware = async (context, next) => {
    const isApiRequest = context.url.startsWith('/' + config.get('app:links:prefix'));
    const isHttpRequest = context.headers.accept && /text\/html/.test(context.headers.accept);

    if (context.method === 'GET' && !isApiRequest && isHttpRequest) {
        context.url = '/index.html';
    }

    await next();
};
