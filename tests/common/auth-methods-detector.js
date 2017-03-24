'use strict';

const detectAuthMethods = require('../../config/helpers/auth-methods-detector');
const config = require('../helpers/config');


describe('auth methods detector', function () {
    it('should not allow auth if there are no keys for it', function () {
        config.set('keys:vk:id', null);
        config.set('keys:vk:secret', null);
        detectAuthMethods(config);
        const isVkAuthAllowed = config.get('app:auth:vk');
        expect(isVkAuthAllowed).toBeFalsy();
    });

    it('should allow auth if there are keys for it', function () {
        config.set('keys:vk', { id: 1, secret: 2 });
        detectAuthMethods(config);
        const isVkAuthAllowed = config.get('app:auth:vk');
        expect(isVkAuthAllowed).toBeTruthy();
    });
});
