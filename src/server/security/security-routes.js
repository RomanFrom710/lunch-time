'use strict';

const router = require('koa-router')();

const config = require('../config');
const securityService = require('./security-service');
const authMiddleware = require('../auth/middleware');

router
    .get(config.get('links:security:verifyToken'), authMiddleware.anonOnly, async context => {
        context.body = await securityService.verifyToken(context.params.token);
    })
    .post(config.get('links:security:addOffer'), authMiddleware.adminOnly, async context => {
        const userType = context.request.body.userType;
        context.body = await securityService.addOffer(userType);
    });


module.exports = router.routes();
