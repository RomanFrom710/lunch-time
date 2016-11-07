'use strict';

const securityService = require('../../src/server/user/security-service');

describe('security service', function () {
    it('should verify valid passowrd', function (done) {
        const password = 'good-guy-password';

        securityService.hashPassword(password)
            .then(function (hash) {
                return securityService.verifyPassword(password, hash);
            })
            .then(function (result) {
                expect(result).toBe(true);
                done();
            });
    });

    it('should verify invalid password', function (done) {
        const password = 'another-good-guy-password';
        const wrongPassword = 'bad-guy-password';

        securityService.hashPassword(password)
            .then(function (hash) {
                return securityService.verifyPassword(wrongPassword, hash);
            })
            .then(function (result) {
                expect(result).toBe(false);
                done();
            });
    });
});
