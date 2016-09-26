'use strict';

const VkStrategy = require('passport-vkontakte').Strategy;

const config = require('../config');

const options = {
    clientID: config.get('keys:vk:id'),
    clientSecret: config.get('keys:vk:secret'),
    callbackURL: config.get('app:auth:links:vk:authCallback')
};

function verifyCallback (accessToken, refreshToken, profile, done) {
    done(null, profile);
}

module.exports = new VkStrategy(options, verifyCallback);
