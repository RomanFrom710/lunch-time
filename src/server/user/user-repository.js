'use strict';

const _ = require('lodash');

const User = require('./user-model');


exports.findById = function (id) {
    return User.findById(id);
};

exports.findByUsername = function (username) {
    return User.findOne({ username: username });
};

exports.findLocalByUsernameWithPassword = function (username) {
    return User
        .findOne({ username: username, authType: 'local' })
        .select('+passwordHash');
};

exports.upsertThirdPartyUser = function (user) {
    const query = _.pick(user, ['thirdPartyId', 'authType']);
    return User.findOneAndUpdate(
        query,
        user,
        { upsert: true, new: true }
    );
};

exports.createLocalUser = function (userDto) {
    return User.create(userDto);
};
