'use strict';

const cafeRepository = require('./cafe-repository');
const config = require('../config');


exports.findById = function (id) {
    return cafeRepository.findById(id);
};

exports.getAllCafeCoords = function () {
    return cafeRepository.getAllCafeCoords();
};

exports.getAllCafes = function (query) {
    query.page = query.page || 1;
    query.itemsPerPage = query.itemsPerPage || config.get('app:cafe:itemsPerPage');

    return cafeRepository.getAllCafes(query)
        .then(result => {
            return { data: result.docs, total: result.total }
        });
};


exports.createCafe = function (cafeDto) {
    return cafeRepository.createCafe(cafeDto);
};
