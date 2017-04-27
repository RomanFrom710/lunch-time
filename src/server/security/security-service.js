'use strict';

const bcrypt = require('bcryptjs');
const uuid = require('uuid');

const securityRepository = require('./security-repository');

const saltRounds = 10;


exports.hashPassword = function (password) {
    // bcrypt salts password itself and returns string with
    // both hash and salt. So we shouldn't worry about it.
    return bcrypt.hash(password, saltRounds);
};

exports.verifyPassword = function (password, hash) {
    return bcrypt.compare(password, hash);
};

exports.verifyToken = async function (token) {
    const offer = await securityRepository.getByToken(token);
    return (offer && offer.userType) || null;
};

exports.addOffer = async function (userType) {
    const token = uuid();
    await securityRepository.addOffer(token, userType);
    return token;
};

exports.removeOffer = function (token) {
    return securityRepository.removeOffer(token);
};
