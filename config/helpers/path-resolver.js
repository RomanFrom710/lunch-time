'use strict';

const path = require('path');
// We are in the config/helpers folder, but it's more comfortable
// to use paths that are relative to project root in webpack config.
const root = path.resolve(__dirname, '../..');

module.exports = function(pathToResolve) {
    return path.resolve(root, pathToResolve);
};
