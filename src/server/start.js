'use strict';

const koa = require('koa');
const koaStatic = require('koa-static');
const koaBodyparser = require('koa-bodyparser');
const koaSession = require('koa-generic-session');
const KoaMongooseStore = require('koa-session-mongoose');

//todo: refactor, move some code to separate files
const mongoose = require('mongoose');
const passport = require('koa-passport');

const config = require('./config');
const applyRoutes = require('./routes');


// mongodb
mongoose.Promise = global.Promise; // todo: remove after mongoose 5 will be released
mongoose.connect(config.get('db:connectionString'));

// koa
const app = koa();
app.name = 'Lunch time'; // Just because I can.
app.keys = [config.get('keys:cookie')];

app
    .use(koaBodyparser())
    .use(koaSession({ store: new KoaMongooseStore() }))
    .use(passport.initialize())
    .use(passport.session());

if (process.env.NODE_ENV === 'development') {
    const webpack = require('webpack'); // todo: this part should be moved somewhere
    const webpackConfig = require('../../webpack.config');
    const webpackCompiler = webpack(webpackConfig);
    const webpackDevMiddleware = require('koa-webpack-dev-middleware')(webpackCompiler);
    const webpackHotMiddleware = require('koa-webpack-hot-middleware')(webpackCompiler);

    app
        .use(webpackDevMiddleware)
        .use(webpackHotMiddleware);
} else {
    app.use(koaStatic('./public'));
}

applyRoutes(app);
app.listen(config.get('port'));
