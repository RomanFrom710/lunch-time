'use strict';

const RegistrationOffer = require('./registration-offer-model');


exports.getByToken = function (token) {
    return RegistrationOffer.findOne({ token });
};

exports.addOffer = function (token, userType) {
    return RegistrationOffer.create({ token, userType });
};

exports.removeOffer = function (token) {
    return RegistrationOffer.remove({ token });
};
