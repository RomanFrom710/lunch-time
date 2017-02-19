'use strict';

const _ = require('lodash');
const config = require('nconf');

const userService = require('../../src/server/user/user-service');
const userRepository = require('../../src/server/user/user-repository');

const mockSecurityService = require('../helpers/mocks/user/mock-security-service');
const mockUserRepository = require('../helpers/mocks/user/mock-user-repository');
const mockUser = require('../helpers/mocks/user/mock-user');


describe('user service', function () {
    const localUser = mockUser.getLocalUser();

    beforeEach(() => {
        mockSecurityService();
        mockUserRepository.mockWriting();
    });

    it('should create admin', function (done) {
        mockUserRepository.mockToFindNothing();

        const admin = {
            username: 'admin',
            password: 'admin'
        };
        config.set('admin', admin);

        userService.updateAdmin()
            .then(result => {
                expect(result).toBeTruthy();
                expect(userRepository.createUser).toHaveBeenCalled();
                expect(userRepository.createUser.calls.argsFor(0)[0])
                    .toEqual(jasmine.objectContaining({ username: admin.username }));
                done();
            });
    });
});
