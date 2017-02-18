'use strict';

const _ = require('lodash');

const userEnums = require('../../src/server/user/user-enums');


const localUser = {
    authType: 'local',
    created: new Date('2016-10-22T10:11:34.359Z'),
    firstName: 'John',
    gender: userEnums.gender.male,
    _id: '58408a9e4f928f02fc5b57af',
    lastName: 'Doe',
    passwordHash: 'abc',
    photoUrl: 'https://pp.vk.me/c629231/v629231001/c543/FfB--bOEVOY.jpg',
    username: 'johnnn',
    userType: userEnums.userType.user
};

const thirdPartyUser = _.clone(localUser);
thirdPartyUser.authType = 'vkontakte';
thirdPartyUser.profileUrl = 'https://vk.com/id1';
thirdPartyUser.thirdPartyId = '1';
delete thirdPartyUser.passwordHash;


exports.getLocalUser = function () {
    return localUser;
};

exports.getThirdPartyUser = function () {
    return thirdPartyUser;
};
