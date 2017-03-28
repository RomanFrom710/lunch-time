'use strict';

const bcrypt = require('bcryptjs');

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
    return offer.userType || null;
};
