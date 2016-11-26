'use strict';

const router = require('koa-router')();

const config = require('../config');
const userService = require('./user-service');
const authMiddleware = require('../auth/middleware').userOnly;

router
    .post(config.get('app:links:user:profile:updatePlace'), authMiddleware, function* () {
        const userDto = { place: this.request.body };
        yield userService.updateUserInfo(this.passport.user.id, userDto)
            .then(newUser => {
                this.login(newUser);
                this.body = true;
            });
    });


module.exports = router.routes();
