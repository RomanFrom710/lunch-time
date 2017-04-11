'use strict';

const authRoutes = require('../auth').routes;
const securityRoutes = require('../security/security-routes');
const userRoutes = require('../user/user-routes');
const cafeRoutes = require('../cafe/cafe-routes');


module.exports = function (app) {
    app
        .use(authRoutes)
        .use(securityRoutes)
        .use(userRoutes)
        .use(cafeRoutes);
};
