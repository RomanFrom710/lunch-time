'use strict';

const passport = require('koa-passport');
const router = require('koa-router')();

const config = require('../config');
const authEventName = config.get('app:auth:authEventName');

router
    .get('/auth', function *() {
        this.body = yield this.passport.user;
    })

    .get(config.get('app:auth:links:vk:auth'), passport.authenticate('vkontakte'))
    .get(config.get('app:auth:links:vk:authCallback'), passport.authenticate('vkontakte'),
        function *(next) {
            console.log(this.passport.user);
            this.body = `<script>window.opener.postMessage('${authEventName}', '*');window.close()</script>`;
            yield next;
        });

module.exports = router.routes();
