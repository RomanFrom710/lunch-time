'use strict';

const _ = require('lodash');
const faker = require('faker');

const userEnums = require('../../../../src/server/user/user-enums');


const localUser = {
    authType: 'local',
    created: faker.date.past(),
    firstName: faker.name.firstName(),
    gender: userEnums.gender.male,
    _id: '58408a9e4f928f02fc5b57af',
    lastName: faker.name.lastName(),
    passwordHash: 'abc',
    photoUrl: 'https://pp.vk.me/c629231/v629231001/c543/FfB--bOEVOY.jpg',
    username: faker.internet.userName(),
    userType: userEnums.userType.user
};

const thirdPartyUser = _.clone(localUser);
thirdPartyUser.authType = 'vkontakte';
thirdPartyUser.thirdPartyProfileUrl = 'https://vk.com/id1';
thirdPartyUser.thirdPartyId = faker.random.number().toString();
delete thirdPartyUser.passwordHash;


exports.getLocalUser = function () {
    return localUser;
};

exports.getThirdPartyUser = function () {
    return thirdPartyUser;
};
