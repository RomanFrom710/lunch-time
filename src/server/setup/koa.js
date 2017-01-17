'use strict';

const koaPassport = require('koa-passport');
const koaBodyparser = require('koa-bodyparser');
const koaSession = require('koa-generic-session');
const KoaMongooseStore = require('koa-session-mongoose');

const config = require('../config');


module.exports = function (app) {
    app.keys = [config.get('keys:cookie')];

    app
        .use(koaBodyparser())
        .use(koaSession({ store: new KoaMongooseStore() }))
        .use(koaPassport.initialize())
        .use(koaPassport.session());
};
