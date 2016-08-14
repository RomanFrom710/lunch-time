'use strict';

const nconf = require('nconf');

const commonConfig = {
    db: {
        connectionString: 'mongodb://127.0.0.1/lunchtime'
    }
};

module.exports = nconf
    .overrides(commonConfig)
    .env();
