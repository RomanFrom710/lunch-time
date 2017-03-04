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

    it('should create local user and find it by id', async function (done) {
        await userRepository.createUser(localUser);
        const user = await userRepository.findById(localUser._id);
        expect(user).toEqual(jasmine.objectContaining(localUserForComparing));
        done();
    });

    it('should create third party user and find it', async function (done) {
        await userRepository.createUser(thirdPartyUser);
        const user = await userRepository.findThirdPartyUser(thirdPartyUser.authType, thirdPartyUser.thirdPartyId);
        expect(user).toEqual(jasmine.objectContaining(thirdPartyUserForComparing));
        done();
    });

    it('should create local user and find it by username', async function (done) {
        await userRepository.createUser(localUser);
        const user = await userRepository.findByUsername(localUser.username);
        expect(user).toEqual(jasmine.objectContaining(localUserForComparing));
        done();
    });

    it('should create local user and find it by username with corresponding password', async function (done) {
        await userRepository.createUser(localUser);
        const user = await userRepository.findLocalByUsernameWithPassword(localUser.username);
        expect(user.passwordHash).toEqual(localUser.passwordHash);
        done();
    });

    it('should correctly update user info', async function (done) {
        const newUserDto = {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName()
        };

        await userRepository.createUser(localUser);
        await userRepository.updateUserInfo(localUser._id, newUserDto);
        const user = await userRepository.findById(localUser._id);
        expect(user).toEqual(jasmine.objectContaining(newUserDto));
        done();
    });
});
