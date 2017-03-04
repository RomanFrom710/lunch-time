'use strict';

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
