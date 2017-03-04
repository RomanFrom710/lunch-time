'use strict';

const router = require('koa-router')();

const config = require('../config');
const userService = require('./user-service');
const authMiddleware = require('../auth/middleware').userOnly;

router
    .put(config.get('app:links:user:selfUpdate'), authMiddleware, async context => {
        const userDto = context.request.body;
        const newUser = await userService.updateUserInfo(context.state.user.id, userDto);
        context.login(newUser);
        context.body = newUser;
    });


module.exports = router.routes();
