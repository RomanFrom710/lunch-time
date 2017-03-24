'use strict';

const setupErrorHandling = require('./error-handling');
const configureApp = require('./koa');
const applyRoutes = require('./routes');


module.exports = function (app) {
    setupErrorHandling(app);
    configureApp(app);
    applyRoutes(app);
};
