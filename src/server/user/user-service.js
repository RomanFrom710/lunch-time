'use strict';

const mapper = require('object-mapper');
const _ = require('lodash');

const securityService = require('./security-service');
const userEnums = require('./user-enums');
const userRepository = require('./user-repository');
const config = require('../config');

updateAdmin(); // Do it every time when the server starts.


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
                return userRepository.createThirdPartyUser(user);
            }
        });
};

exports.registerLocalUser = function (localUserDto) {
    localUserDto.authType = 'local';
    localUserDto.userType = localUserDto.userType || userEnums.userType.user;
};

exports.updateUserInfo = function (userDto) {
    const id = userDto.id;
    const allowedFields = ['username', 'firstName', 'lastName', 'gender', 'photoUrl', 'place'];
    userDto = _.pick(userDto, allowedFields);

    return userRepository.updateUserInfo(id, userDto);
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

// Creating admin user
function updateAdmin() {
    const admin = config.get('admin');
    if (admin && admin.username && admin.password) {
        userRepository.findLocalByUsernameWithPassword(admin.username)
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
                return userRepository.createLocalUser(adminDto);
            })
            .catch(() => { }); // At least we've tried
    }
}
