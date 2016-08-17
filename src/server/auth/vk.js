'use strict';

const VkStrategy = require('passport-vkontakte').Strategy;
const config = require('../config');

const options = {
    clientID: config.get('keys:vk:clientid'),
    clientSecret: config.get('keys:vk:clientsecret'),
    callbackURL: '/auth/vk/callback'
};

function verifyCallback (accessToken, refreshToken, profile, done) {
    console.log(profile);
}

module.exports = new VkStrategy(options, verifyCallback);
