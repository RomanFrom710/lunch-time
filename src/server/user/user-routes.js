'use strict';

const router = require('koa-router')();

const config = require('../config');
const userService = require('./user-service');
const authMiddleware = require('../auth/middleware').userOnly;

router
    .put(config.get('app:links:user:selfUpdate'), authMiddleware, function* () {
        const userDto = this.request.body;
        yield userService.updateUserInfo(this.passport.user.id, userDto)
            .then(newUser => {
                this.login(newUser);
                this.body = newUser;
            });
    });


module.exports = router.routes();
