'use strict';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');

const priceSchema = require('./price-schema');
const dbExtensions = require('../shared/db-extensions');


const cafeSchema = new mongoose.Schema({
    name: { type: String, trim: true, required: true },
    address: { type: String, trim: true, required: true }, // todo: find a way to take it from geo without google API key
    description: { type: String, trim: true, required: true },

    place: { type: [Number], index: '2d', required: true },

    prices: { type: [priceSchema] }
}, {
    collection: 'cafes' // Mongoose thinks it must be 'caves'! No caves here!
});
dbExtensions.applyRemovePrivateFieldsTransform(cafeSchema);
dbExtensions.applyGeoTransform(cafeSchema, 'place');
cafeSchema.plugin(paginate);

module.exports = mongoose.model('cafe', cafeSchema);
