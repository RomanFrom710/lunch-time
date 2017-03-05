'use strict';

const passport = require('koa-passport');

const vk = require('./vk');
const local = require('./local');
const userService = require('../user/user-service');


vk && passport.use(vk);
passport.use(local);

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    userService.findById(id)
        .then(user => done(null, user));
});

exports.routes = require('./routes');
exports.authMiddleware = require('./middleware');
