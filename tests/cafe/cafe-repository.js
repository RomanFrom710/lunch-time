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

    it('should create cafe and find it by id', function (done) {
        const cafe = mockCafe.getMockCafe();

        cafeRepository.createCafe(cafe)
            .then(() => cafeRepository.findById(cafe._id))
            .then(foundCafe => {
                expect(foundCafe).toEqual(jasmine.objectContaining(foundCafe));

                done();
            });
    });

    it('should get all cafes coords', function (done) {
        const total = 5;
        const cafes = mockCafe.getMockCafes(total);

        createCafes(cafes)
            .then(() => cafeRepository.getAllCafeCoords())
            .then(coords => {
                expect(coords.length).toBe(total);

                const cafesForCompare = _.pick(cafes, ['_id', 'place']);
                _.each(cafesForCompare, cafe => {
                    expect(coords).toContain(cafe);
                });

                done();
            });
    });

    it('should correctly handle pagination query', function (done) {
        const itemsPerPage = 4;
        const total = 10;
        const pages = [];
        const cafes = mockCafe.getMockCafes(total);

        createCafes(cafes)
            .then(() => cafeRepository.getAllCafes({ page: 1, itemsPerPage: itemsPerPage }))
            .then(result => {
                expect(result.total).toBe(total);

                const page1 = result.docs;
                expect(page1).toBeDefined();
                expect(page1.length).toBe(itemsPerPage);
                pages.push(page1);
            })
            .then(() => cafeRepository.getAllCafes({ page: 2, itemsPerPage: itemsPerPage }))
            .then(result => {
                const page2 = result.docs;
                expect(page2).toBeDefined();
                expect(page2.length).toBe(itemsPerPage);
                pages.push(page2);
            })
            .then(() => cafeRepository.getAllCafes({ page: 3, itemsPerPage: itemsPerPage }))
            .then(result => {
                const page3 = result.docs;
                expect(page3).toBeDefined();
                expect(page3.length).toBe(2);
                pages.push(page3);
            })
            .then(() => {
                const items = _.flatten(pages);
                const ids = _.map(items, '_id');
                const uniqIds = _.uniq(ids);
                expect(ids.length).toBe(uniqIds.length);

                done();
            });
    });


    function createCafes(cafes) { // todo: Implement creating a bunch of cafes in the repository.
        const createPromises = cafes.map(cafe => cafeRepository.createCafe(cafe));
        return global.Promise.all(createPromises);
    }
});
