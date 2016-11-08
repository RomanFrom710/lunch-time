'use strict';

const passport = require('koa-passport');
const router = require('koa-router')();

const config = require('../config');
const authMiddleware = require('./middleware');
const authEventName = config.get('app:auth:authEventName');


router
    // common
    .get(config.get('app:links:auth:info'), function* () {
        this.body = this.passport.user;
        if (!this.body) {
            this.throw(401);
        }
    })
    .post(config.get('app:links:auth:logout'), authMiddleware, function* () {
        this.logout();
        this.session = null;
        this.status = 200;
    })

    // vk
    .get(config.get('app:links:auth:vk:auth'), passport.authenticate('vkontakte'))
    .get(config.get('app:links:auth:vk:authCallback'), passport.authenticate('vkontakte'),
        function* () {
            this.body = `<script>window.opener.postMessage('${authEventName}', '*');window.close()</script>`;
        })

    .get(config.get('app:links:auth:local:auth'), passport.authenticate('local',
        function* (err, user) {
            if (err) {
                this.throw(err);
            } else if (user) {
                this.body = user;
            } else {
                this.body = 'Wrong username or password!';
                this.throw(400);
            }
        }));

module.exports = router.routes();
