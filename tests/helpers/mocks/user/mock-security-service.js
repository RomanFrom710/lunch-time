'use strict';

const securityService = require('../../../../src/server/security/security-service');

module.exports = function () {
    spyOn(securityService, 'hashPassword').and.callFake(password => password);
    spyOn(securityService, 'verifyPassword').and.callFake((password, hash) => password === hash);
};
