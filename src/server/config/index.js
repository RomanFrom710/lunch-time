'use strict';

const nconf = require('nconf');


const commonConfig = {
    port: 3000,
    keys: {
        cookie: 'very-secret-key',
        vk: { // Just for development purposes
            id: 1,
            secret: 'key'
        }
    },
    db: {
        connectionString: 'mongodb://127.0.0.1/lunchtime'
    }
};

//todo: somewhy lowerCase env option doesn't work
module.exports = nconf
    .env({ separator: '__' })
    .defaults(commonConfig);
