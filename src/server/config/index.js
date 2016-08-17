'use strict';

const nconf = require('nconf');


const commonConfig = {
    port: 3000,
    cookieKey: 'very-secret-key',
    db: {
        connectionString: 'mongodb://127.0.0.1/lunchtime'
    }
};

//todo: somewhy lowerCase env option doesn't work
module.exports = nconf
    .env({ separator: '__' })
    .defaults(commonConfig);
