'use strict';

const uuid = require('uuid');

const securityRepository = require('../../src/server/security/security-repository');
const mockOffer = require('../helpers/mocks/security/mock-offer');
const db = require('../helpers/db');


describe('security repository', function () {
    const offer = mockOffer.getMockOffer();

    beforeAll(db.connectToTestDb);
    afterEach(db.dropTestDb);
    afterAll(db.disconnect);

    it('should create offer and find it by its token', async function (done) {
        await securityRepository.addOffer(offer.token, offer.userType);
        const foundOffer = await securityRepository.getByToken(offer.token);
        expect(foundOffer.userType).toBe(offer.userType);
        done();
    });

    it('should not find anything by wrong token', async function (done) {
        await securityRepository.addOffer(offer.token, offer.userType);
        const foundOffer = await securityRepository.getByToken(uuid());
        expect(foundOffer).toBeFalsy();
        done();
    });
});
