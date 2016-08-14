'use strict';

const mongoose = require('mongoose');

const cafeSchema = new mongoose.Schema({
    name: String,
    geo: { type: [Number], index: '2d' }
});

module.exports = mongoose.model('cafe', cafeSchema);
