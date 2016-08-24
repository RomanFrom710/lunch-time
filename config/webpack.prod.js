'use strict';

const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');

const prodConfig = {

};

module.exports = webpackMerge(commonConfig, prodConfig);
