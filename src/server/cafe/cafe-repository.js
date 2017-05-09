'use strict';

const Cafe = require('./cafe-model');


exports.findById = function (id) {
    return Cafe.findById(id);
};

exports.getAllCafeCoords = function () {
    return Cafe.find().select('id place');
};

exports.getAllCafes = function (query) {
    let mongoQuery = {};
    if (query.radius && query.coords) {
        mongoQuery = {
            place: {
                $nearSphere: query.coords,
                $maxDistance: query.radius
            }
        };
    }

    return Cafe.paginate(mongoQuery, {
        page: query.page,
        limit: query.itemsPerPage
    });
};


exports.createCafe = function (cafeDto) {
    return Cafe.create(cafeDto);
};
