'use strict';

const _ = require('lodash');

const User = require('./user-model');

exports.findOrCreate = function (profile) {
    const query = _.pick(profile, ['id', 'thirdPartyId', 'authType']);
    return User.findOneAndUpdate(
        query,
        profile,
        { upsert: true, new: true }
    );
};
