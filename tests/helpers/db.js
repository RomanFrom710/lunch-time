'use strict';

const mongoose = require('mongoose');

const config = require('../../src/server/config');


mongoose.Promise = global.Promise; // todo: remove after mongoose 5 will be released

exports.connectToTestDb = function (done) {
    const connectionString = config.get('db:testConnectionString');
    mongoose.connect(connectionString, done);
};

exports.disconnect = function (done) {
    mongoose.disconnect(done);
};

exports.dropTestDb = function (done) {
    mongoose.connection.db.dropDatabase(done);
};
