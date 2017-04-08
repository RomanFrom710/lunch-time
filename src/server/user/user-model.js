'use strict';

const mongoose = require('mongoose');

const dbExtensions = require('../shared/db-extensions');
const userEnums = require('./user-enums');


const userSchema = new mongoose.Schema({
    username: { type: String, trim: true, required: true },
    firstName: { type: String, trim: true, required: false },
    lastName: { type: String, trim: true, required: false },
    gender: { type: Number, required: false, enum: Object.values(userEnums.gender) },

    photoUrl: { type: String, required: false },

    created: { type: Date, default: Date.now },
    userType: { type: Number, required: true, enum: Object.values(userEnums.userType) },

    authType: { type: String, required: true },
    thirdPartyId: { type: String, required: false },
    thirdPartyProfileUrl: { type: String, required: false },

    place: { type: [Number], index: '2d', required: false },

    passwordHash: { type: String, required: false, select: false }
});
dbExtensions.applyRemovePrivateFieldsTransform(userSchema);
dbExtensions.applyGeoTransform(userSchema, 'place');

module.exports = mongoose.model('user', userSchema);
