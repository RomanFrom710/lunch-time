'use strict';

const cafeRepository = require('./cafe-repository');


exports.findById = function (id) {
    return cafeRepository.findById(id);
};


exports.createCafe = function (cafeDto) {
    return cafeRepository.createCafe(cafeDto);
};
