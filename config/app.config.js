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
        cafe: {
            itemsPerPage: 15
        },
        map: {
            initialPoint: { // Minsk
                latitude: 53.904692,
                longitude: 27.561523
            },
            initialZoom: 12,
            increasedZoom: 15
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
                },
                local: {
                    prefix: 'local',
                    auth: ''
                }
            },
            user: {
                prefix: 'user',
                selfUpdate: ''
            },
            cafe: {
                prefix: 'cafe',
                add: '',
                getAll: '',
                coords: 'coords',
                one: {
                    prefix: ':id',
                    get: '',
                    image: 'image'
                }
            }
        }
    }
};

commonConfig.app.links = resolveLinks(commonConfig.app.links);

module.exports = nconf
    .env({ separator: '__', lowerCase: true })
    .defaults(commonConfig);
