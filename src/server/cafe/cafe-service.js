'use strict';

const _ = require('lodash');

const cafeRepository = require('./cafe-repository');
const config = require('../config');


exports.findById = function (id) {
    return cafeRepository.findById(id);
};

exports.getAllCafeCoords = function () {
    return cafeRepository.getAllCafeCoords();
};

exports.getAllCafes = async function (query) {
    query.page = query.page || 1;
    query.itemsPerPage = query.itemsPerPage || config.get('app:cafe:itemsPerPage');

    const cafes = await cafeRepository.getAllCafes(query);
    return {
        data: cafes.docs,
        total: cafes.total
    };
};


exports.createCafe = function (cafeDto) {
    return cafeRepository.createCafe(cafeDto);
};

exports.addPriceInfo = async function (priceDto) { // todo: move db code to repository
    const cafe = await cafeRepository.findById(priceDto.cafeId);
    const existingPrice = _.find(cafe.prices, _.pick(priceDto, 'name'));
    if (existingPrice) {
        const existingVote = _.find(existingPrice, _.pick(priceDto, 'user'));
        if (existingVote) {
            existingVote.date = Date.now();
            existingVote.price = priceDto.price;
        } else {
            existingPrice.votes.push(_.pick(priceDto, ['user', 'price']));
        }
    } else {
        cafe.prices.push({
            name: priceDto.name,
            votes: [_.pick(priceDto, ['user', 'price'])]
        });
    }

    await cafe.save();
    return true;
};
