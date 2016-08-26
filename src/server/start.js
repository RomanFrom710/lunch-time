'use strict';

const koa = require('koa');
const koaRouter = require('koa-router');
const koaStatic = require('koa-static');
const koaBodyparser = require('koa-bodyparser');
const koaPassport = require('koa-passport');
const koaSession = require('koa-generic-session');
const KoaMongooseStore = require('koa-session-mongoose');

//todo: refactor, move some code to separate files
const mongoose = require('mongoose');
const passport = require('passport');
require('./auth');

const config = require('./config');

// mongodb
mongoose.connect(config.get('db:connectionString'));

// koa
const app = koa();
const router = koaRouter();
app.name = 'Lunch time'; // Just because I can.
app.keys = [config.get('keys:cookie')];

app
    .use(koaBodyparser())
    .use(koaSession({ store: new KoaMongooseStore() }))
    .use(koaPassport.initialize())
    .use(koaPassport.session());

if (process.env.NODE_ENV === 'production') {
    app.use(koaStatic('./public'));
} else {
    const webpack = require('webpack'); // todo: this part should be moved somewhere
    const webpackConfig = require('../../webpack.config');
    const webpackCompiler = webpack(webpackConfig);
    const webpackDevMiddleware = require('koa-webpack-dev-middleware')(webpackCompiler);
    const webpackHotMiddleware = require('koa-webpack-hot-middleware')(webpackCompiler);

    app
        .use(webpackDevMiddleware)
        .use(webpackHotMiddleware);
}

router
    .get('/auth/vk', passport.authenticate('vkontakte'))
    .get('/auth/vk/callback', passport.authenticate('vkontakte'),
        function *(next) {
            console.log(this.state.user);
            yield next;
        });

app.use(router.routes());

app.listen(config.get('port'));
