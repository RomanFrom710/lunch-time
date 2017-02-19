'use strict';

const _ = require('lodash');
const faker = require('faker');

const userEnums = require('../../../../src/server/user/user-enums');


exports.getLocalUser = function () {
    return {
        authType: 'local',
        created: faker.date.past(),
        firstName: faker.name.firstName(),
        gender: userEnums.gender.male,
        _id: '58408a9e4f928f02fc5b57af',
        lastName: faker.name.lastName(),
        passwordHash: faker.internet.password(),
        photoUrl: faker.internet.avatar(),
        username: faker.internet.userName(),
        userType: userEnums.userType.user
    };
};

exports.getThirdPartyUser = function () {
    const thirdPartyUser = _.clone(exports.getLocalUser());
    thirdPartyUser.authType = 'vkontakte';
    thirdPartyUser.thirdPartyProfileUrl = faker.internet.url();
    thirdPartyUser.thirdPartyId = faker.random.number().toString();
    delete thirdPartyUser.passwordHash;
    return thirdPartyUser;
};

exports.getPassportUser = function () {
    return {
        id: faker.random.number().toString(),
        username: faker.internet.userName(),
        name: {
            givenName: faker.name.firstName(),
            familyName: faker.name.lastName()
        },
        photos: [
            { value: faker.internet.avatar() }
        ],
        provider: 'vkontakte',
        profileUrl: faker.internet.url()
    }
};
