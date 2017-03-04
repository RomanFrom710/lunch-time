'use strict';

const _ = require('lodash');
const config = require('nconf');

const userEnums = require('../../src/server/user/user-enums');
const userService = require('../../src/server/user/user-service');
const userRepository = require('../../src/server/user/user-repository');

const mockSecurityService = require('../helpers/mocks/user/mock-security-service');
const mockUserRepository = require('../helpers/mocks/user/mock-user-repository');
const mockUser = require('../helpers/mocks/user/mock-user');


describe('user service', function () {
    beforeEach(() => {
        mockSecurityService();
        mockUserRepository.mockWriting();
    });

    it('should create admin', async function (done) {
        mockUserRepository.mockToFindNothing();

        const admin = {
            username: 'admin',
            password: 'admin'
        };
        config.set('admin', admin);

        const result = await userService.updateAdmin();
        expect(result).toBeTruthy();
        expect(userRepository.createUser).toHaveBeenCalled();
        expect(userRepository.createUser.calls.argsFor(0)[0])
            .toEqual(jasmine.objectContaining({ username: admin.username }));
        done();
    });

    it('should update only allowed properties', async function (done) {
        const localUser = mockUser.getLocalUser();
        const anotherLocalUser = mockUser.getLocalUser();

        await userService.updateUserInfo(localUser._id, anotherLocalUser);
        expect(userRepository.updateUserInfo).toHaveBeenCalled();
        const [id, userDto] = userRepository.updateUserInfo.calls.argsFor(0);

        expect(id).toEqual(localUser._id);
        expect(anotherLocalUser).toEqual(jasmine.objectContaining(userDto));
        expect(userDto.userType).toBeUndefined();
        expect(userDto.passwordHash).toBeUndefined();
        done();
    });

    it('should create third party user if it does not exist', async function (done) {
        mockUserRepository.mockToFindNothing();
        const passportUser = mockUser.getPassportUser();

        await userService.findOrCreateThirdPartyUser(passportUser);
        expect(userRepository.createUser).toHaveBeenCalled();
        const userDto = userRepository.createUser.calls.argsFor(0)[0];

        expect(userDto).toEqual(jasmine.objectContaining({
            userType: userEnums.userType.user,
            authType: passportUser.provider,
            username: passportUser.username,
            thirdPartyProfileUrl: passportUser.profileUrl,
            firstName: passportUser.name.givenName,
            lastName: passportUser.name.familyName,
            thirdPartyId: passportUser.id,
            photoUrl: passportUser.photos[0].value
        }));
        done();
    });

    it('should return third party user if it already exists', async function (done) {
        mockUserRepository.mockToFindThirdPartyUser();
        const passportUser = mockUser.getPassportUser();

        await userService.findOrCreateThirdPartyUser(passportUser);
        expect(userRepository.createUser).not.toHaveBeenCalled();
        done();
    });

    it('should find user by id', async function (done) {
        mockUserRepository.mockToFindLocalUser();
        const localUser = mockUser.getLocalUser();

        const user = await userService.findById(localUser._id);
        expect(user).toBeDefined();
        expect(userRepository.findById).toHaveBeenCalledWith(localUser._id);
        done();
    });

    it('should find local user by username with password', async function (done) {
        mockUserRepository.mockToFindLocalUser();
        const localUser = mockUser.getLocalUser();

        const user = await userService.findLocalByUsernameWithPassword(localUser.username);
        expect(user).toBeDefined();
        expect(user.passwordHash).toBeDefined();
        expect(userRepository.findLocalByUsernameWithPassword).toHaveBeenCalledWith(localUser.username);
        done();
    });
});
