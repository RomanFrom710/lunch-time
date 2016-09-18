'use strict';

const passport = require('passport');
const router = require('koa-router')();

router
    .get('/auth/vk', passport.authenticate('vkontakte'))
    .get('/auth/vk/callback', passport.authenticate('vkontakte'),
        function *(next) {
            console.log(this.state.user);
            yield next;
        });

module.exports = router.routes();
