'use strict';

const router = require('koa-router')();

const config = require('../config');
const authMiddlewares = require('../auth/middleware');
const cafeService = require('./cafe-service');


router
    .get(config.get('app:links:cafe:coords'), function* () {
        yield cafeService.getAllCafeCoords()
            .then(result => this.body = result);
    })
    .get(config.get('app:links:cafe:getAll'), function* () {
        const query = {
            page: +this.query.page,
            itemsPerPage: +this.query.itemsPerPage
        };

        yield cafeService.getAllCafes(query)
            .then(result => this.body = result);
    })
    .post(config.get('app:links:cafe:add'), authMiddlewares.adminOnly, function* () {
        const cafe = this.request.body;
        yield cafeService.createCafe(cafe)
            .then(result => this.body = result);
    });


module.exports = router.routes();
