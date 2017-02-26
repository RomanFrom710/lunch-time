'use strict';

const _ = require('lodash');
const faker = require('faker');

const userRepository = require('../../src/server/user/user-repository');
const mockUser = require('../helpers/mocks/user/mock-user');
const db = require('../helpers/db');


describe('user repository', function () {
    const localUser = mockUser.getLocalUser();
    const thirdPartyUser = mockUser.getThirdPartyUser();
    const localUserForComparing = _.omit(localUser, ['_id', 'passwordHash']);
    const thirdPartyUserForComparing = _.omit(thirdPartyUser, ['_id', 'passwordHash']);

    beforeAll(db.connectToTestDb);
    afterEach(db.dropTestDb);
    afterAll(db.disconnect);

    it('should create local user and find it by id', function (done) {
        userRepository.createUser(localUser)
            .then(() => userRepository.findById(localUser._id))
            .then(user => {
                expect(user).toEqual(jasmine.objectContaining(localUserForComparing));
                done();
            });
    });

    it('should create third party user and find it', function (done) {
        userRepository.createUser(thirdPartyUser)
            .then(() => userRepository.findThirdPartyUser(thirdPartyUser.authType, thirdPartyUser.thirdPartyId))
            .then(user => {
                expect(user).toEqual(jasmine.objectContaining(thirdPartyUserForComparing));
                done();
            });
    });

    it('should create local user and find it by username', function (done) {
        userRepository.createUser(localUser)
            .then(() => userRepository.findByUsername(localUser.username))
            .then(user => {
                expect(user).toEqual(jasmine.objectContaining(localUserForComparing));
                done();
            });
    });

    it('should create local user and find it by username with corresponding password', function (done) {
        userRepository.createUser(localUser)
            .then(() => userRepository.findLocalByUsernameWithPassword(localUser.username))
            .then(user => {
                expect(user.passwordHash).toEqual(localUser.passwordHash);
                done();
            });
    });

    it('should correctly update user info', function (done) {
        const newUserDto = {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName()
        };

        userRepository.createUser(localUser)
            .then(() => userRepository.updateUserInfo(localUser._id, newUserDto))
            .then(() => userRepository.findById(localUser._id))
            .then(user => {
                expect(user).toEqual(jasmine.objectContaining(newUserDto));
                done();
            });
    });
});
