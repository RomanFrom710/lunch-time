'use strict';

const passport = require('koa-passport');

const vk = require('./vk');

passport.use(vk);

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

exports.routes = require('./auth-routes');
exports.authMiddleware = require('./auth-middleware');
