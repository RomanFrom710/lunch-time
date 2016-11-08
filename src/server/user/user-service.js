'use strict';

const mapper = require('object-mapper');

const userEnums = require('./user-enums');
const userRepository = require('./user-repository');
const config = require('../config');

updateAdmin(); // Do it every time when the server starts.


exports.findById = function (id) {
    return userRepository.findById(id);
};

exports.findByUsername = function (username) {
    return userRepository.findByUsername(username);
};

exports.upsertThirdPartyUser = function (profile) {
    const user = mapProfileToUserModel(profile);
    user.userType = userEnums.userType.user;
    return userRepository.upsertThirdPartyUser(user);
};

exports.registerLocalUser = function (localUserDto) {
    localUserDto.authType = 'local';
    localUserDto.userType = localUserDto.userType || userEnums.userType.user;
};

// Converts passport.js generic profile to user model.
function mapProfileToUserModel(profile) {
    const profileToUserTransform = {
        'id': 'thirdPartyId',
        'username': 'username',
        'name.givenName': 'firstName',
        'name.familyName': 'lastName',
        'photos[0].value': 'photoUrl',
        'provider': 'authType',
        'gender': 'gender',
        'profileUrl': 'thirdPartyProfileUrl'
    };
    return mapper(profile, profileToUserTransform);
}

function updateAdmin() {
    const admin = config.get('admin');
    if (admin && admin.username && admin.password) {

    }
}
