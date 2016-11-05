'use strict';

const nconf = require('nconf');

const resolveLinks = require('./helpers/link-resolver');


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
        auth: {
            authEventName: 'lt-authenticated', // Used for interaction between auth window and main app
        },
        links: {
            prefix: 'api',
            auth: {
                prefix: 'auth',
                info: '',
                logout: 'logout',
                vk: {
                    prefix: 'vk',
                    auth: '',
                    authCallback: 'callback'
                }
            }
        }
    }
};

commonConfig.app.links = resolveLinks(commonConfig.app.links);

//todo: update nconf when lowerCase option will be fixed
module.exports = nconf
    .env({ separator: '__' })
    .defaults(commonConfig);
