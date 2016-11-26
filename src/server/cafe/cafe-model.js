'use strict';

const mongoose = require('mongoose');

const dbExtensions = require('../shared/db-extensions');


const cafeSchema = new mongoose.Schema({
    name: String,
    place: { type: [Number], index: '2d', required: true }
});
dbExtensions.applyGeoTransform(cafeSchema, 'place');

module.exports = mongoose.model('cafe', cafeSchema);
