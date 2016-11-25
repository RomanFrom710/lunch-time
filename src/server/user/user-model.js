'use strict';

const mongoose = require('mongoose');

const dbExtensions = require('../shared/db-extensions');
// todo: add validation

const userSchema = new mongoose.Schema({
    username: { type: String, trim: true, required: true },
    firstName: { type: String, trim: true, required: false },
    lastName: { type: String, trim: true, required: false },
    gender: { type: String, required: false },

    photoUrl: { type: String, required: false },

    created: { type: Date, default: Date.now },
    userType: { type: String, required: true },

    authType: { type: String, required: true },
    thirdPartyId: { type: String, required: false },
    thirdPartyProfileUrl: { type: String, required: false },

    place: dbExtensions.getGeoFieldDescriptor({ required: false }),

    passwordHash: { type: String, required: false, select: false }
});
dbExtensions.applyRemovePrivateFieldsTransform(userSchema);

module.exports = mongoose.model('user', userSchema);
