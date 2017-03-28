'use strict';

const uuid = require('uuid');
const faker = require('faker');
const mongoose = require('mongoose');

const userEnums = require('../../../../src/server/user/user-enums');

exports.getMockOffer = function () {
    return {
        _id: mongoose.Types.ObjectId(),
        token: uuid(),
        userType: faker.random.arrayElement(Object.values(userEnums.userType))
    };
};
