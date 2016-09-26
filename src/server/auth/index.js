'use strict';

const passport = require('koa-passport');

const vk = require('./vk');
const routes = require('./routes');

passport.use(vk);

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

module.exports = {
    routes: routes
};
