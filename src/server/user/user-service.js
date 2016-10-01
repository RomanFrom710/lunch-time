'use strict';

const mapper = require('object-mapper');

const userEnums = require('./user-enums');
const userRepository = require('./user-repository');


exports.findOrCreate = function (profile) {
    const user = mapProfileToUserModel(profile);
    user.userType = userEnums.userType.user;
    return userRepository.findOrCreate(user);
};


const profileToUserTransform = {
    'id': 'thirdPartyId',
    'username': 'userName',
    'name.givenName': 'firstName',
    'name.familyName': 'lastName',
    'photos[0].value': 'photoUrl',
    'provider': 'authType',
    'gender': 'gender',
    'profileUrl': 'profileUrl'
};

function mapProfileToUserModel(profile) {
    return mapper(profile, profileToUserTransform);
}