'use strict';

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

exports.findThirdPartyUser = function (authType, thirdPartyId) {
    const query = { authType, thirdPartyId };
    return User.findOne(query);
};


exports.createUser = function (userDto) {
    return User.create(userDto);
};

exports.updateUserInfo = function (id, userDto) {
    return User.findByIdAndUpdate(
        id,
        { $set: userDto },
        { new: true }
    );
};
