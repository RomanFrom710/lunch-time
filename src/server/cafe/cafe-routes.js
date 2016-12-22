'use strict';

const router = require('koa-router')();

const config = require('../config');
const authMiddlewares = require('../auth/middleware');
const cafeService = require('./cafe-service');


router
    .post(config.get('app:links:cafe:add'), authMiddlewares.adminOnly, function* () {
        const cafe = this.request.body;
        yield cafeService.createCafe(cafe)
            .then(result => this.body = result);
    });


module.exports = router.routes();
