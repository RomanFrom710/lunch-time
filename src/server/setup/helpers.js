'use strict';


exports.isDevelopmentEnv = function () {
    return process.env.NODE_ENV === 'development';
};

exports.isNodemonEvn = function () {
    return process.env.NODE_ENV === 'nodemon';
};

