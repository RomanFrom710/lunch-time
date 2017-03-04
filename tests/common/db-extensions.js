'use strict';

const mongoose = require('mongoose');

const dbExtensions = require('../../src/server/shared/db-extensions');
const db = require('../helpers/db');
const testSchemaHelper = require('../helpers/mocks/test-schema');


describe('db extensions', function () {
    beforeAll(db.connectToTestDb);
    afterEach(db.dropTestDb);
    afterAll(db.disconnect);

    it('should hide db implementation details for the client', async function (done) {
        const testSchema = testSchemaHelper.getTestSchema();
        dbExtensions.applyRemovePrivateFieldsTransform(testSchema);

        const Test = mongoose.model('test1', testSchema);
        const testObject = testSchemaHelper.getTestObject();

        await Test.create(testObject);
        const response = await Test.find({});

        let result = response[0];
        expect(result).toBeDefined();
        result = result.toJSON();

        expect(result.__v).toBeUndefined();
        expect(result._id).toBeUndefined();
        expect(result.id).toBeDefined();

        done();
    });

    it('should convert client representation of coordinates to db array on create', async function (done) {
        const testSchema = testSchemaHelper.getTestSchema();
        dbExtensions.applyGeoTransform(testSchema, 'geo');

        const Test = mongoose.model('test2', testSchema);
        const testObject = testSchemaHelper.getTestObjectFromClient();

        await Test.create(testObject);
        const response = await Test.find({});

        let result = response[0];
        expect(result).toBeDefined();

        expect(result.geo[0]).toBe(testObject.geo.latitude);
        expect(result.geo[1]).toBe(testObject.geo.longitude);

        result = result.toJSON();
        expect(result.geo.latitude).toBe(testObject.geo.latitude);
        expect(result.geo.longitude).toBe(testObject.geo.longitude);

        done();
    });

    it('should convert client representation of coordinates to db array on update', async function (done) {
        const testSchema = testSchemaHelper.getTestSchema();
        dbExtensions.applyGeoTransform(testSchema, 'geo');

        const Test = mongoose.model('test3', testSchema);
        const testObject = testSchemaHelper.getTestObjectFromClient();
        const anotherTestObject = testSchemaHelper.getTestObjectFromClient();

        await Test.create(testObject);
        await Test.findOneAndUpdate({ firstName: testObject.firstName }, { $set: anotherTestObject });
        const response = await Test.find({});

        let result = response[0];
        expect(result).toBeDefined();

        expect(result.geo[0]).toBe(anotherTestObject.geo.latitude);
        expect(result.geo[1]).toBe(anotherTestObject.geo.longitude);

        result = result.toJSON();
        expect(result.geo.latitude).toBe(anotherTestObject.geo.latitude);
        expect(result.geo.longitude).toBe(anotherTestObject.geo.longitude);

        done();
    });
});
