'use strict';

const nconf = require('nconf');

const resolveLinks = require('./helpers/link-resolver');
const detectAuthMethods = require('./helpers/auth-methods-detector');


const commonConfig = {
    endpoints: {
        apiurl: 'http://localhost',
        apiport: 81,
        clientport: 3000
    },
    keys: {
        cookie: 'very-secret-key'
    },
    db: {
        connectionstring: 'mongodb://127.0.0.1/lunchtime',
        testconnectionstring: 'mongodb://127.0.0.1/testlunchtime'
    },
    app: { // This part is available in the client app too
        auth: {
            authEventName: 'lt-authenticated' // Used for interaction between auth window and main app.
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
        }
    }
};

const links = {
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
            auth: '',
            register: 'register'
        }
    },
    user: {
        prefix: 'user',
        selfUpdate: ''
    },
    security: {
        prefix: 'security',
        addOffer: '',
        verifyToken: ':token'
    },
    cafe: {
        prefix: 'cafe',
        add: '',
        getAll: '',
        coords: 'coords',
        one: {
            prefix: ':id',
            get: ''
        },
        price: {
            prefix: 'price',
            add: ':id'
        }
    }
};

nconf
    .use('memory')
    .env({ separator: '__', lowerCase: true })
    .defaults(commonConfig);

detectAuthMethods(nconf);

const resolvedLinks = resolveLinks(links, nconf.get('endpoints'));
nconf.set('links', resolvedLinks.relative);
nconf.set('app:links', resolvedLinks.full);

module.exports = nconf;
