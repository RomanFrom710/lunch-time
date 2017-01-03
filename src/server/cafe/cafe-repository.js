'use strict';

const Cafe = require('./cafe-model');


exports.findById = function (id) {
    return Cafe.findById(id);
};

exports.getAllCafeCoords = function () {
    return Cafe.find().select('id place');
};

exports.getAllCafes = function (query) {
    return Cafe.paginate({}, {
        page: query.page,
        limit: query.itemsPerPage
    });
};


exports.createCafe = function (cafeDto) {
    return Cafe.create(cafeDto);
};
