'use strict';

const _ = require('lodash');
const mongoose = require('mongoose');

const dbExtensions = require('../shared/db-extensions');


const reviewSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    votes: [{
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        price: { type: Number, required: true },
        date: { type: Date, default: Date.now }
    }]
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});
dbExtensions.applyRemovePrivateFieldsTransform(reviewSchema);

reviewSchema.virtual('price').get(function () {
    if (this.votes.length === 0) {
        return 0;
    } else if (this.votes.length === 1) {
        return this.votes[0].price;
    }

    const sortedVotes = _.sortBy(this.votes, 'date');
    const halfOfVotes = _.slice(sortedVotes, sortedVotes.length / 2);
    return _.sumBy(halfOfVotes, 'price') / halfOfVotes.length;
});

module.exports = reviewSchema;
