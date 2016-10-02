'use strict';

const passport = require('koa-passport');

const vk = require('./vk');
const userService = require('../user/user-service');


passport.use(vk);

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    userService.findById(id)
        .then(user => done(null, user));
});

exports.routes = require('./auth-routes');
exports.authMiddleware = require('./auth-middleware');
