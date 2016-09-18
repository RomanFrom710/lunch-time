'use strict';

const auth = require('./auth');

module.exports = function (app) {
    app.use(auth.routes);
};
