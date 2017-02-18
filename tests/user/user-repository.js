'use strict';

const _ = require('lodash');

const userRepository = require('../../src/server/user/user-repository');
const userHelper = require('../helpers/user');
const db = require('../helpers/db');


describe('user repository', function () {
    const localUser = userHelper.getLocalUser();
    const userForComparing = _.omit(localUser, ['_id', 'passwordHash']);

    beforeAll(done => db.connectToTestDb(done));
    afterEach(done => db.dropTestDb(done));
    afterAll(done => db.disconnect(done));

    it('should create local user and find it by id', function (done) {
        userRepository.createLocalUser(localUser)
            .then(() => userRepository.findById(localUser._id))
            .then(user => expect(user).toEqual(jasmine.objectContaining(userForComparing)))
            .then(() => done());
    });

    it('should create local user and find it by username', function (done) {
        userRepository.createLocalUser(localUser)
            .then(() => userRepository.findByUsername(localUser.username))
            .then(user => expect(user).toEqual(jasmine.objectContaining(userForComparing)))
            .then(() => done());
    });

    it('should create local user and find it by username with corresponding password', function (done) {
        userRepository.createLocalUser(localUser)
            .then(() => userRepository.findLocalByUsernameWithPassword(localUser.username))
            .then(user => expect(user.passwordHash).toEqual(localUser.passwordHash))
            .then(() => done());
    });
});
