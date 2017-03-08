'use strict';

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;

const resolvePath = require('./helpers/path-resolver');
const appConfig = require('./app.config').get('app');


module.exports = {
    entry: {
        vendor: './src/client/vendor.ts',
        app: './src/client/main.ts'
    },
    output: {
        path: resolvePath('./public')
    },
    resolve: {
        modules: [
            resolvePath('./'),
            resolvePath('./node_modules')
        ],
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /\.spec.ts$/,
                use: [
                    'awesome-typescript-loader',
                    'angular2-template-loader'
                ],
            },
            {
                test: /\.html$/,
                use: ['raw-loader']
            },
            {
                test: /\.less$/, // Vendor styles
                exclude: resolvePath('./src/client/app'),
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: 'less-loader',
                            query: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            },
            {
                test: /\.css$/, // Vendor styles
                exclude: resolvePath('./src/client/app'),
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            query: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            },
            {
                test: /\.less$/, // Component styles
                include: resolvePath('./src/client/app'),
                use: [
                    'raw-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|svg|ttf|png|jpg|jpeg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 3000
                    }
                }]
            },
            {
                test: /\.js$/,
                exclude: [ // Libs with sourcemap problems.
                    resolvePath('./node_modules/ng2-toastr'),
                    resolvePath('./node_modules/angular2-google-maps'),
                    resolvePath('./node_modules/ngx-popover'),
                    resolvePath('./node_modules/ngx-dropdown'),
                    resolvePath('./node_modules/ngx-modal'),
                    resolvePath('./node_modules/ng2-imageupload'),
                    resolvePath('./node_modules/ng2-interceptors')
                ],
                enforce: 'pre',
                use: ['source-map-loader']
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['app', 'vendor']
        }),
        new HtmlWebpackPlugin({
            template: './src/client/index.html'
        }),
        // Since ExtractTextPlugin is used only for vendor styles, it's better
        // to always get it enabled. We don't need HRM for vendor styles, but inserting
        // them into DOM takes a lot of resources.
        new ExtractTextPlugin({
            filename: '[name].[hash].css'
        }),
        new webpack.ContextReplacementPlugin( // Fixing warnings about dynamic requires in angular 2 code.
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            resolvePath('./src')
        ),
        new CheckerPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.ENV': JSON.stringify(process.env.NODE_ENV),
            'process.env.CONFIG': JSON.stringify(appConfig)
        })
    ]
};
