'use strict';

const _ = require('lodash');
const faker = require('faker');

const cafeRepository = require('../../src/server/cafe/cafe-repository');
const mockCafe = require('../helpers/mocks/cafe/mock-cafe');
const db = require('../helpers/db');


describe('cafe repository', function () {
    beforeAll(db.connectToTestDb);
    afterEach(db.dropTestDb);
    afterAll(db.disconnect);

    it('should create cafe and find it by id', async function (done) {
        const cafe = mockCafe.getMockCafe();

        await cafeRepository.createCafe(cafe);
        const foundCafe = await cafeRepository.findById(cafe._id);
        expect(foundCafe).toEqual(jasmine.objectContaining(foundCafe));
        done();
    });

    it('should get all cafes coords', async function (done) {
        const total = 5;
        const cafes = mockCafe.getMockCafes(total);

        await createCafes(cafes);
        const coords = await cafeRepository.getAllCafeCoords();
        expect(coords.length).toBe(total);

        const cafesForCompare = _.pick(cafes, ['_id', 'place']);
        _.each(cafesForCompare, cafe => {
            expect(coords).toContain(cafe);
        });

        done();
    });

    it('should correctly handle pagination query', async function (done) {
        const itemsPerPage = 4;
        const total = 10;
        const pages = [];
        const cafes = mockCafe.getMockCafes(total);

        await createCafes(cafes);
        const result1 = await cafeRepository.getAllCafes({ page: 1, itemsPerPage: itemsPerPage });
        expect(result1.docs).toBeDefined();
        expect(result1.docs.length).toBe(itemsPerPage);
        pages.push(result1.docs);

        const result2 = await cafeRepository.getAllCafes({ page: 2, itemsPerPage: itemsPerPage });
        expect(result2.docs).toBeDefined();
        expect(result2.docs.length).toBe(itemsPerPage);
        pages.push(result2.docs);

        const result3 = await cafeRepository.getAllCafes({ page: 3, itemsPerPage: itemsPerPage });
        expect(result3.docs).toBeDefined();
        expect(result3.docs.length).toBe(2);
        pages.push(result3.docs);

        const items = _.flatten(pages);
        const ids = _.map(items, '_id');
        const uniqIds = _.uniq(ids);
        expect(ids.length).toBe(uniqIds.length);

        done();
    });


    function createCafes(cafes) { // todo: Implement creating a bunch of cafes in the repository.
        const createPromises = cafes.map(cafe => cafeRepository.createCafe(cafe));
        return global.Promise.all(createPromises);
    }
});
