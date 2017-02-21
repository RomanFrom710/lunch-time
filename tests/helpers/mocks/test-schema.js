'use strict';

const mongoose = require('mongoose');
const faker = require('faker');


exports.getTestSchema = function () {
    return new mongoose.Schema({
        username: { type: String, trim: true, required: true },
        firstName: { type: String, trim: true, required: false },
        lastName: { type: String, trim: true, required: false },
        geo: { type: [Number], index: '2d', required: false }
    });
};

exports.getTestObject = function () {
    return {
        username: faker.internet.userName(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        geo: [faker.random.number(), faker.random.number()]
    };
};

exports.getTestObjectFromClient = function () {
    const testObject = exports.getTestObject();
    testObject.geo = {
        latitude: faker.random.number(),
        longitude: faker.random.number()
    };
    return testObject;
};
