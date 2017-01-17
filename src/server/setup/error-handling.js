'use strict';

const helpers = require('./helpers');


module.exports = function (app) {
    app.use(function* (next) {
        try {
            yield next;
        } catch (err) {
            if (helpers.isDevelopmentEnv() || helpers.isNodemonEvn()) {
                console.error(err);
            }

            if (err.status && err.status < 500) {
                this.status = err.status;
                this.body = { error: err.message };
            } else {
                this.status = 500; // Better to keep it in secret
            }
        }
    });
};
