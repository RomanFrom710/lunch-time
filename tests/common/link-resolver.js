'use strict';

const resolveLinks = require('../../config/helpers/link-resolver');
const config = require('../../src/server/config');


describe('link resolver', function () {
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
            }
        },
        another: {
            link: 'link'
        }
    };

    const endpoints = {
        apiUrl: 'http://site.com',
        apiPort: 81
    };

    config.set('links', links);
    config.set('endpoints', endpoints);
    resolveLinks(config);
    const newLinks = config.get('app:links');

    it('should not break anything', function () {
        expect(newLinks.auth).toBeDefined();
        expect(newLinks.auth.vk).toBeDefined();
        expect(newLinks.auth.vk.authCallback).toBeDefined();
    });

    it('should correctly add prefixes', function () {
        expect(newLinks.auth.logout).toBe('http://site.com:81/api/auth/logout');
        expect(newLinks.auth.vk.authCallback).toBe('http://site.com:81/api/auth/vk/callback');
    });

    it('should not add trailing slash for empty links', function () {
        expect(newLinks.auth.info).toBe('http://site.com:81/api/auth');
        expect(newLinks.auth.vk.auth).toBe('http://site.com:81/api/auth/vk');
    });

    it('should not change prefix properties', function () {
        expect(newLinks.prefix).toBe(links.prefix);
        expect(newLinks.auth.prefix).toBe(links.auth.prefix);
        expect(newLinks.auth.vk.prefix).toBe(links.auth.vk.prefix);
    });

    it('should correctly treat paths without prefix', function () {
        expect(newLinks.another.link).toBe('http://site.com:81/api/link');
    })
});
