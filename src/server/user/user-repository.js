'use strict';

const _ = require('lodash');

const User = require('./user-model');


exports.findById = function (id) {
    return User.findById(id);
};

exports.upsertThirdPartyUser = function (user) {
    const query = _.pick(user, ['thirdPartyId', 'authType']);
    return User.findOneAndUpdate(
        query,
        user,
        { upsert: true, new: true }
    );
};