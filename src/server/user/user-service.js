'use strict';

const mapper = require('object-mapper');

const userEnums = require('./user-enums');
const userRepository = require('./user-repository');


exports.findById = function (id) {
    return userRepository.findById(id);
};

exports.upsertThirdPartyUser = function (profile) {
    const user = mapProfileToUserModel(profile);
    user.userType = userEnums.userType.user;
    return userRepository.upsertThirdPartyUser(user);
};


// Converts passport.js generic profile to user model.
function mapProfileToUserModel(profile) {
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
    return mapper(profile, profileToUserTransform);
}
