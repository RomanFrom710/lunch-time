'use strict';


module.exports = function (config) {
    if (config.get('keys:vk:id') && config.get('keys:vk:secret')) {
        config.set('app:auth:vk', true);
    }
};
