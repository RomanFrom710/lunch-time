'use strict';

const mongoose = require('mongoose');

const userEnums = require('../user/user-enums');


const registrationOfferSchema = new mongoose.Schema({
    userType: { type: Number, required: true, enum: Object.values(userEnums.userType) },
    token: { type: String, required: true }
});

module.exports = mongoose.model('registrationOffer', registrationOfferSchema);
