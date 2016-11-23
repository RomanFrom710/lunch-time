'use strict';

const router = require('koa-router')();

const config = require('../config');
const userService = require('./user-service');
const authMiddleware = require('../auth/middleware').userOnly;

router
    .post(config.get('app:links:user:profile:updatePlace'), authMiddleware, function* () {
        yield userService.updateUserInfo(this.request.body)
            .then(newUser => {
                this.login(newUser);
                return newUser;
            });
    });


module.exports = router.routes();
