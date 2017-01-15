'use strict';

const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');

const commonConfig = require('./webpack.common');


const devConfig = {
    output: {
        filename: '[name].[chunkHash].js'
    },
    devtool: 'eval-cheap-module-source-map',
    plugins: [
        new WebpackCleanupPlugin()
    ]
};

module.exports = webpackMerge(commonConfig, devConfig);
