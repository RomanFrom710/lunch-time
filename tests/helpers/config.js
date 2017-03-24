'use strict';

const nconf = require('nconf');

nconf.reset();
nconf.use('memory');

module.exports = nconf;
