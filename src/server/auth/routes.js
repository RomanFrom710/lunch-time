'use strict';

const passport = require('koa-passport');
const router = require('koa-router')();

const config = require('../config');

router
    .get(config.get('app:links:vk:auth'), passport.authenticate('vkontakte'))
    .get(config.get('app:links:vk:authCallback'), passport.authenticate('vkontakte'),
        function *(next) {
            console.log(this.state.user);
            this.body = '<script>window.close()</script>';
            yield next;
        });

module.exports = router.routes();
