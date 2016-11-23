'use strict';

const mongoose = require('mongoose');

const adjustJsonTransform = require('../shared/db-extensions').adjustJsonTransform;
// todo: add validation

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    firstName: { type: String, required: false },
    lastName: { type: String, required: false },
    gender: { type: String, required: false },

    photoUrl: { type: String, required: false },

    created: { type: Date, default: Date.now },
    userType: { type: String, required: true },

    authType: { type: String, required: true },
    thirdPartyId: { type: String, required: false },
    thirdPartyProfileUrl: { type: String, required: false },

    place: { type: [Number], index: '2d', required: false },

    passwordHash: { type: String, required: false, select: false }
});
adjustJsonTransform(userSchema);

module.exports = mongoose.model('user', userSchema);
