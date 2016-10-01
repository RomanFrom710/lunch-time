'use strict';

const _ = require('lodash');

const User = require('./user-model');


exports.findOrCreate = function (user) {
    const query = _.pick(user, ['id', 'thirdPartyId', 'authType']);
    return User.findOneAndUpdate(
        query,
        user,
        { upsert: true, new: true }
    );
};
