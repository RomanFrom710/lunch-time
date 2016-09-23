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
    },
    app: { // This part is available in the client app too
        links: {
            vk: {
                auth: '/auth/vk',
                authCallback: '/auth/vk/callback'
            }
        }
    }
};

//todo: update nconf when lowerCase option will be fixed
module.exports = nconf
    .env({ separator: '__' })
    .defaults(commonConfig);
