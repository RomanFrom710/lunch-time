'use strict';

const cafeRepository = require('./cafe-repository');


exports.findById = function (id) {
    return cafeRepository.findById(id);
};

exports.getAllCafeCoords = function () {
    return cafeRepository.getAllCafeCoords();
};


exports.createCafe = function (cafeDto) {
    return cafeRepository.createCafe(cafeDto);
};
