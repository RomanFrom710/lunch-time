'use strict';

const Cafe = require('./cafe-model');


exports.findById = function (id) {
    return Cafe.findById(id);
};

exports.getAllCafeCoords = function () {
    return Cafe.find().select('id place');
};


exports.createCafe = function (cafeDto) {
    return Cafe.create(cafeDto);
};
