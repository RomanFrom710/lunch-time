'use strict';

const passport = require('koa-passport');
const router = require('koa-router')();

const config = require('../config');
const authMiddleware = require('./auth-middleware');
const authEventName = config.get('app:auth:authEventName');


router
    .get(config.get('app:auth:links:info'), function* () {
        this.body = yield this.passport.user;
    })
    .post(config.get('app:auth:links:logout'), authMiddleware, function* () {
        this.logout();
        this.session = null;
        this.status = 200;
    })

    // vk
    .get(config.get('app:auth:links:vk:auth'), passport.authenticate('vkontakte'))
    .get(config.get('app:auth:links:vk:authCallback'), passport.authenticate('vkontakte'),
        function* (next) {
            this.body = `<script>window.opener.postMessage('${authEventName}', '*');window.close()</script>`;
            yield next;
        });

module.exports = router.routes();
