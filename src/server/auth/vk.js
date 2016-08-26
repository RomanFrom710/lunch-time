'use strict';

const VkStrategy = require('passport-vkontakte').Strategy;
const config = require('../config');

const options = {
    clientID: config.get('keys:vk:id'),
    clientSecret: config.get('keys:vk:secret'),
    callbackURL: '/auth/vk/callback'
};

function verifyCallback (accessToken, refreshToken, profile, done) {
    console.log(profile);
}

module.exports = new VkStrategy(options, verifyCallback);
