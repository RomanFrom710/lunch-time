'use strict';

const webpack = require('webpack');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');

const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');

const prodConfig = {
    devtool: 'source-map',
    output: {
        filename: '[name].[chunkHash].js'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            comments: false,
            compress: { screw_ie8: true, warnings: false },
            mangle: { screw_ie8: true, keep_fnames: true }
        }),
        new WebpackCleanupPlugin()
    ]
};

module.exports = webpackMerge(commonConfig, prodConfig);
