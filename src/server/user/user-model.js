'use strict';

const mongoose = require('mongoose');
// todo: add validation

const userSchema = new mongoose.Schema({
    userName: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: false },
    gender: { type: String, required: false },

    profileUrl: { type: String, required: false },
    photoUrl: { type: String, required: false },

    created: { type: Date, default: Date.now },
    userType: { type: String, required: true },
    authType: { type: String, required: true },
    thirdPartyId: { type: String, required: false },

    passwordHash: { type: String, required: false },
    passwordSalt: { type: String, required: false }
});

module.exports = mongoose.model('user', userSchema);
