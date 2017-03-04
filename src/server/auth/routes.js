'use strict';

const passport = require('koa-passport');
const router = require('koa-router')();

const config = require('../config');
const authMiddlewares = require('./middleware');

const authEventName = config.get('app:auth:authEventName');


router
    // common
    .get(config.get('app:links:auth:info'), context => {
        context.body = context.state.user;
        if (!context.body) {
            context.throw(401);
        }
    })
    .post(config.get('app:links:auth:logout'), context => {
        context.logout();
        context.session = null;
        context.body = true;
    })

    // vk
    .get(config.get('app:links:auth:vk:auth'), authMiddlewares.anonOnly, passport.authenticate('vkontakte'))
    .get(config.get('app:links:auth:vk:authCallback'), passport.authenticate('vkontakte'), context => {
        context.body = `<script>window.opener.postMessage('${authEventName}', '*');window.close()</script>`;
    })

    // local
    .post(config.get('app:links:auth:local:auth'), authMiddlewares.anonOnly, (context, next) => {
        return passport.authenticate('local', (err, user) => {
            if (err) {
                context.throw(err);
            } else if (user) {
                context.body = user;
                return context.login(user);
            } else {
                context.throw(400, 'Wrong username or password!');
            }
        })(context, next);
    });

module.exports = router.routes();
