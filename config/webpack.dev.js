'use strict';

const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const WebpackBrowserPlugin = require('webpack-browser-plugin');

const commonConfig = require('./webpack.common');
const appConfig = require('../src/server/config');


const devConfig = {
    entry: {
        hot: 'webpack-hot-middleware/client?reload=true',
    },
    output: {
        filename: '[name].js'
    },
    devtool: 'eval-cheap-module-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new WebpackBrowserPlugin({
            url: 'http://localhost',
            port: appConfig.get('endpoints:clientport')
        })
    ]
};

module.exports = webpackMerge(commonConfig, devConfig);
