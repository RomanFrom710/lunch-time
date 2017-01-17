'use strict';

const setupErrorHandling = require('./error-handling');
const setupFileServing = require('./file-serving');
const configureApp = require('./koa');
const applyRoutes = require('./routes');


module.exports = function (app) {
    setupErrorHandling(app);
    setupFileServing(app);
    configureApp(app);
    applyRoutes(app);
};
