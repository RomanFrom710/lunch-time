'use strict';

const mongoose = require('mongoose');

const dbExtensions = require('../shared/db-extensions');


const cafeSchema = new mongoose.Schema({
    name: { type: String, trim: true, required: true },
    address: { type: String, trim: true, required: true }, // todo: find a way to take it from geo without google API key
    description: { type: String, trim: true, required: true },

    place: { type: [Number], index: '2d', required: true }
}, {
    collection: 'cafes' // Mongoose thinks it must be 'caves'! No caves here!
});
dbExtensions.applyRemovePrivateFieldsTransform(cafeSchema);
dbExtensions.applyGeoTransform(cafeSchema, 'place');

module.exports = mongoose.model('cafe', cafeSchema);
