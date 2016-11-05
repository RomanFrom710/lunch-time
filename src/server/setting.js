'use strict';

const webpack = require('webpack');
const webpackConfig = require('../../webpack.config');
const webpackDevMiddleware = require('koa-webpack-dev-middleware');
const webpackHotMiddleware = require('koa-webpack-hot-middleware');

const koaStatic = require('koa-static');
const koaPassport = require('koa-passport');
const koaBodyparser = require('koa-bodyparser');
const koaSession = require('koa-generic-session');
const KoaMongooseStore = require('koa-session-mongoose');

const config = require('./config');


module.exports = function (app) {
    app.keys = [config.get('keys:cookie')];

    if (process.env.NODE_ENV === 'development') {
        const webpackCompiler = webpack(webpackConfig);

        app
            .use(webpackDevMiddleware(webpackCompiler))
            .use(webpackHotMiddleware(webpackCompiler));
    } else {
        app.use(koaStatic('./public'));
    }

    app
        .use(koaBodyparser())
        .use(koaSession({ store: new KoaMongooseStore() }))
        .use(koaPassport.initialize())
        .use(koaPassport.session());
};
