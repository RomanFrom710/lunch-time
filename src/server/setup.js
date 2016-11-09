'use strict';

const webpack = require('webpack');
const webpackConfig = require('../../webpack.config');
const webpackDevMiddleware = require('koa-webpack-dev-middleware');
const webpackHotMiddleware = require('koa-webpack-hot-middleware');

const koaHistoryApiFallback = require('koa-history-api-fallback');
const koaStatic = require('koa-static');
const koaPassport = require('koa-passport');
const koaBodyparser = require('koa-bodyparser');
const koaSession = require('koa-generic-session');
const KoaMongooseStore = require('koa-session-mongoose');

const config = require('./config');


exports.configureApp = function (app) {
    app.keys = [config.get('keys:cookie')];

    app
        .use(koaBodyparser())
        .use(koaSession({ store: new KoaMongooseStore() }))
        .use(koaPassport.initialize())
        .use(koaPassport.session());
};

exports.setupFileServing = function (app) {
    // Allowing to access client routes
    app.use(koaHistoryApiFallback());

    if (isDevelopmentEnv()) {
        const webpackCompiler = webpack(webpackConfig);

        app
            .use(webpackDevMiddleware(webpackCompiler))
            .use(webpackHotMiddleware(webpackCompiler));
    } else {
        app.use(koaStatic('./public'));
    }
};

exports.setErrorHandling = function (app) {
    app.use(function* (next) {
        try {
            yield next;
        } catch (err) {
            if (isDevelopmentEnv()) {
                console.error(err);
            }

            if (err.status && err.status < 500) {
                this.status = err.status;
                this.body = err.message; // Better to keep it in secret
            } else {
                this.status = 500;
            }
        }
    });
};

function isDevelopmentEnv() {
    return process.env.NODE_ENV === 'development';
}
