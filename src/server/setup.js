'use strict';
// todo: separate by files
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
    app.use(apiFallbackMiddleware);

    if (isDevelopmentEnv()) {
        const webpackCompiler = webpack(webpackConfig);

        app
            .use(webpackDevMiddleware(webpackCompiler))
            .use(webpackHotMiddleware(webpackCompiler));
    } else {
        app.use(koaStatic('./public'));
    }
};

exports.setupErrorHandling = function (app) {
    app.use(function* (next) {
        try {
            yield next;
        } catch (err) {
            if (isDevelopmentEnv() || isNodemonEvn()) {
                console.error(err);
            }

            if (err.status && err.status < 500) {
                this.status = err.status;
                this.body = { error: err.message };
            } else {
                this.status = 500; // Better to keep it in secret
            }
        }
    });
};


function* apiFallbackMiddleware(next) {
    const isApiRequest = this.url.startsWith('/' + config.get('app:links:prefix'));
    const isHttpRequest = this.headers.accept && /text\/html/.test(this.headers.accept);

    if (this.method === 'GET' && !isApiRequest && isHttpRequest) {
        this.url = '/index.html';
    }

    yield next;
}

function isDevelopmentEnv() {
    return process.env.NODE_ENV === 'development';
}

function isNodemonEvn() {
    return process.env.NODE_ENV === 'nodemon';
}
