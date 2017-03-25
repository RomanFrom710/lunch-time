'use strict';

const webpack = require('webpack');
const webpackConfig = require('../webpack.config');
const webpackDevMiddleware = require('koa-webpack-dev-middleware');
const webpackHotMiddleware = require('koa-webpack-hot-middleware');

const Koa = require('koa');
const koaStatic = require('koa-static');

const config = require('../config/app.config');


const app = new Koa();
app.name = 'Lunch Time client';

// Allowing to access client routes
app.use(async (context, next) => {
    const isHttpRequest = context.headers.accept && /text\/html/.test(context.headers.accept);

    if (context.method === 'GET' && isHttpRequest) {
        context.url = '/index.html';
    }

    await next();
});

if (process.env.NODE_ENV === 'development') {
    const webpackCompiler = webpack(webpackConfig);

    app
        .use(webpackDevMiddleware(webpackCompiler))
        .use(webpackHotMiddleware(webpackCompiler));
} else {
    app.use(koaStatic('./public'));
}

app.listen(config.get('endpoints:clientport'));
