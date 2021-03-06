'use strict';

const VkStrategy = require('passport-vkontakte').Strategy;

const userService = require('../user/user-service');
const config = require('../config');


const options = {
    clientID: config.get('keys:vk:id'),
    clientSecret: config.get('keys:vk:secret'),
    callbackURL: config.get('app:links:auth:vk:authCallback')
};

function verifyCallback (accessToken, refreshToken, profile, done) {
    userService.findOrCreateThirdPartyUser(profile)
        .then(user => done(null, user))
        .catch(err => done(err));
}

const hasVkKeys = options.clientID && options.clientSecret;
module.exports = hasVkKeys ? new VkStrategy(options, verifyCallback) : null;
