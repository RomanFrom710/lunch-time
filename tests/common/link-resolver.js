'use strict';

const resolveLinks = require('../../config/helpers/link-resolver');


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
        apiurl: 'http://site.com',
        apiport: 81
    };

    const resolvedLinks = resolveLinks(links, endpoints);
    const fullLinks = resolvedLinks.full;
    const relativeLinks = resolvedLinks.relative;

    it('should not break anything', function () {
        expect(fullLinks.auth).toBeDefined();
        expect(fullLinks.auth.vk).toBeDefined();
        expect(fullLinks.auth.vk.authCallback).toBeDefined();
    });

    it('should correctly add prefixes', function () {
        expect(fullLinks.auth.logout).toBe('http://site.com:81/api/auth/logout');
        expect(fullLinks.auth.vk.authCallback).toBe('http://site.com:81/api/auth/vk/callback');
        expect(relativeLinks.auth.vk.authCallback).toBe('/api/auth/vk/callback');
    });

    it('should not add trailing slash for empty links', function () {
        expect(fullLinks.auth.info).toBe('http://site.com:81/api/auth');
        expect(fullLinks.auth.vk.auth).toBe('http://site.com:81/api/auth/vk');
        expect(relativeLinks.auth.vk.auth).toBe('/api/auth/vk');
    });

    it('should not change prefix properties', function () {
        expect(fullLinks.prefix).toBe(links.prefix);
        expect(fullLinks.auth.prefix).toBe(links.auth.prefix);
        expect(fullLinks.auth.vk.prefix).toBe(links.auth.vk.prefix);
        expect(relativeLinks.auth.vk.prefix).toBe(links.auth.vk.prefix);
    });

    it('should correctly treat paths without prefix', function () {
        expect(fullLinks.another.link).toBe('http://site.com:81/api/link');
        expect(relativeLinks.another.link).toBe('/api/link');
    });
});
