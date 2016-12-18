'use strict';

const router = require('koa-router')();

const config = require('../config');
const authMiddlewares = require('../auth/middleware');
const cafeService = require('./cafe-service');


router
    .post(config.get('app:links:cafe:add'), authMiddlewares.adminOnly(), function* () {

    });


module.exports = router.routes();
