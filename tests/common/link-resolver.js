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
        }
    };

    const newLinks = resolveLinks(links);

    it('should not break anything', function () {
        expect(newLinks.auth).toBeDefined();
        expect(newLinks.auth.vk).toBeDefined();
        expect(newLinks.auth.vk.authCallback).toBeDefined();
    });

    it('should correctly add prefixes', function () {
        expect(newLinks.auth.logout).toBe('/api/auth/logout');
        expect(newLinks.auth.vk.authCallback).toBe('/api/auth/vk/callback');
    });

    it('should not add trailing slash for empty links', function () {
        expect(newLinks.auth.info).toBe('/api/auth');
        expect(newLinks.auth.vk.auth).toBe('/api/auth/vk');
    });

    it('should not change prefix properties', function () {
        expect(newLinks.prefix).toBe(links.prefix);
        expect(newLinks.auth.prefix).toBe(links.auth.prefix);
        expect(newLinks.auth.vk.prefix).toBe(links.auth.vk.prefix);
    });
});
