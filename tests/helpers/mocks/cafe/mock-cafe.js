'use strict';

const faker = require('faker');
const mongoose = require('mongoose');


exports.getMockCafe = function () {
    return {
        _id: mongoose.Types.ObjectId(),
        name: faker.company.companyName(),
        address: faker.address.streetAddress(),
        description: faker.lorem.words(10),
        place: {
            latitude: +faker.address.latitude(),
            longitude: +faker.address.longitude()
        }
    };
};

exports.getMockCafes = function (count) {
    return Array(count).fill(null).map(exports.getMockCafe);
};
