'use strict';

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const userService = require('../user/user-service');
const securityService = require('../user/security-service');

const strategyOptions = {
    usernameField: 'username',
    passwordField: 'password'
};

function verifyCallback(username, password, done) {
    let savedUser;

    userService.findByUsername(username)
        .then(user => {
            if (user) {
                savedUser = user;
                return securityService.verifyPassword(password, user.passwordHash);
            } else {
                done(null, false);
            }
        })
        .then(isValid => isValid ? done(null, savedUser) : done(null, false))
        .catch(err => done(err));
}

module.exports = new LocalStrategy(strategyOptions, verifyCallback);
