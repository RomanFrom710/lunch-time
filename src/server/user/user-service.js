'use strict';

const mapper = require('object-mapper');
const _ = require('lodash');

const securityService = require('./security-service');
const userEnums = require('./user-enums');
const userRepository = require('./user-repository');
const config = require('../config');


exports.findById = function (id) {
    return userRepository.findById(id);
};

exports.findLocalByUsernameWithPassword = function (username) {
    return userRepository.findLocalByUsernameWithPassword(username);
};

exports.findOrCreateThirdPartyUser = function (profile) {
    const user = mapProfileToUserModel(profile);
    user.userType = userEnums.userType.user;
    return userRepository.findThirdPartyUser(user.authType, user.thirdPartyId)
        .then(userFromDb => {
            if (userFromDb) {
                return userFromDb;
            } else {
                return userRepository.createUser(user);
            }
        });
};

exports.registerLocalUser = function (localUserDto) {
    localUserDto.authType = 'local';
    localUserDto.userType = localUserDto.userType || userEnums.userType.user;
    // todo
};

exports.updateUserInfo = function (id, userDto) {
    const allowedFields = ['username', 'firstName', 'lastName', 'gender', 'photoUrl', 'place'];
    userDto = _.pick(userDto, allowedFields);

    return userRepository.updateUserInfo(id, userDto);
};

exports.updateAdmin = function () {
    const admin = config.get('admin');
    if (!(admin && admin.username && admin.password)) {
        return global.Promise.resolve(null);
    }

    return userRepository.findLocalByUsernameWithPassword(admin.username)
        .then(user => {
            if (user) {
                throw new Error('Admin already exists');
            } else {
                return securityService.hashPassword(admin.password);
            }
        })
        .then(hashedPassword => {
            const adminDto = {
                userType: userEnums.userType.admin,
                authType: 'local',
                username: admin.username,
                firstName: admin.username, // It's not personality, it's admin
                passwordHash: hashedPassword
            };
            return userRepository.createUser(adminDto);
        })
        .catch(() => { }); // At least we've tried
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
        'profileUrl': 'thirdPartyProfileUrl'
    };
    const mappedUser = mapper(profile, profileToUserTransform);
    if (profile.gender) {
        mappedUser.gender = userEnums.gender[profile.gender];
    }

    return mappedUser;
}
