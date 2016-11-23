'use strict';

const authRoutes = require('./auth').routes;
const userRoutes = require('./user/user-routes');


module.exports = function (app) {
    app
        .use(authRoutes)
        .use(userRoutes);
};
