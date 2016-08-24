'use strict';

const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');

const devConfig = {

};

module.exports = webpackMerge(commonConfig, devConfig);
