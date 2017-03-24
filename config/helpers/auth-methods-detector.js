'use strict';


module.exports = function (config) {
    const isVkAuthAllowed = config.get('keys:vk:id') && config.get('keys:vk:secret');
    config.set('app:auth:vk', !!isVkAuthAllowed);
};
