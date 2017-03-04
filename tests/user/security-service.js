'use strict';

const securityService = require('../../src/server/user/security-service');


describe('security service', function () {
    it('should verify valid password', async function (done) {
        const password = 'good-guy-password';

        const hash = await securityService.hashPassword(password);
        const result = await securityService.verifyPassword(password, hash);
        expect(result).toBe(true);
        done();
    });

    it('should verify invalid password', async function (done) {
        const password = 'another-good-guy-password';
        const wrongPassword = 'bad-guy-password';

        const hash = await securityService.hashPassword(password);
        const result = await securityService.verifyPassword(wrongPassword, hash);
        expect(result).toBe(false);
        done();
    });
});
