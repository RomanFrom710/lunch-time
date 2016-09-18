'use strict';

const passport = require('passport');
const vk = require('./vk');

const routes = require('./routes');

passport.use(vk);

module.exports = {
    routes: routes
};
