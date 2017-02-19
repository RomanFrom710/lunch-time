'use strict';

const userRepository = require('../../../../src/server/user/user-repository');
const mockUser = require('./mock-user');


const localUserPromise = global.Promise.resolve(mockUser.getLocalUser());
const nullPromise = global.Promise.resolve(null);

exports.mockWriting = function () {
    spyOn(userRepository, 'createUser').and.returnValue(localUserPromise);
};

exports.mockToFindNothing = function () {
    mockToFind(nullPromise);
};

exports.mockToFindUser = function () {
    mockToFind(localUserPromise);
};


function mockToFind(result) {
    spyOn(userRepository, 'findLocalByUsernameWithPassword').and.returnValue(result);
    spyOn(userRepository, 'findById').and.returnValue(result);
    spyOn(userRepository, 'findByUsername').and.returnValue(result);
    spyOn(userRepository, 'findThirdPartyUser').and.returnValue(result);
}
