/* eslint-disable import/unambiguous */
const path = require('path');

const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const {name: workspaceName} = require('./package.json');

const TARGET = 'web';

const getBuildPath = () => path.resolve(__dirname, 'build');

const getDevtool = (target, env) => {
    if (target === 'web' && env === 'development') {
        return 'cheap-module-eval-source-map';
    }
    return 'source-map';
};

const getVendors = (target) => {
    let vendors = ['airbnb-js-shims/target/es2015'];

    if (target === 'web') {
        vendors = [...vendors, 'whatwg-fetch'];
    }

    return vendors;
};

const getModuleRules = (target, env) => {
    let rules = [
        {
            test: /\.js$/,
            use: 'babel-loader',
            exclude: /node_modules/,
        },
        {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader',
            ],
        },
        {
            test: /\.scss$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader',
            ],
        },
        {
            test: /\.json$/i,
            use: [
                'json-loader',
            ],
            exclude: /node_modules/,
        },
    ];

    return rules;
};

const getPlugins = (target, env) => {
    let plugins = [
        new webpack.EnvironmentPlugin({
            NODE_ENV: 'development',
            REACT_APP_TARGET: 'web',
        }),
        new HtmlWebPackPlugin({
            template: './public/index.html',
            filename: './index.html',
        }),
    ];

    return plugins;
};

module.exports = (env = process.env.NODE_ENV || 'development', target = 'web') => ({
    target: TARGET,
    devtool: getDevtool(TARGET, env),
    entry: {
        [workspaceName]: [
            ...getVendors(TARGET, env),
            path.resolve(__dirname, 'src/index.js'),
        ],
    },
    output: {
        path: getBuildPath(),
        filename: `[name].${TARGET}.js`,
    },
    module: {
        rules: [
            ...getModuleRules(TARGET, env),
        ],
    },
    plugins: [
        ...getPlugins(TARGET, env),
    ],
    stats: {
        all: false,
        warnings: true,
        errors: true,
        chunks: true,
        timings: true,
    },
});