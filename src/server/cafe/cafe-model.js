'use strict';

const mongoose = require('mongoose');

const dbExtensions = require('../shared/db-extensions');


const cafeSchema = new mongoose.Schema({
    name: String,
    geo: dbExtensions.getGeoFieldDescriptor({ required: true })
});

module.exports = mongoose.model('cafe', cafeSchema);
