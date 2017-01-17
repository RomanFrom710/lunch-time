'use strict';

const authRoutes = require('../auth').routes;
const userRoutes = require('../user/user-routes');
const cafeRoutes = require('../cafe/cafe-routes');


module.exports = function (app) {
    app
        .use(authRoutes)
        .use(userRoutes)
        .use(cafeRoutes);
};
