var path = require('path');
var webpack = require('webpack');
var ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    debug: true,

    context: path.resolve('demo'),

    entry: {
        'vendor': 'vendor.ts',
        'main': 'main.ts'
    },

    output: {
        path: path.resolve('demo/asset'),
        filename: '[name].js'
    },

    resolve: {
        extensions: ['', '.ts', '.js'],
        root: path.resolve('demo'),
        modulesDirectories: ['node_modules']
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript',
                exclude: [/\.(spec|e2e)\.ts$/]
            },
            {
                test: /\.css$/,
                loader: 'raw'
            },
            {
                test: /\.less$/,
                loader: 'raw!less'
            },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            }
        ]
    },

    plugins: [
        new ForkCheckerPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor']
        }),
        new HtmlWebpackPlugin({
            template: 'index.html',
            inject: 'body',
            chunks: ['vendor', 'main']
        })
    ],

    devServer: {
        port: 8999,
        host: 'localhost',
        historyApiFallback: true,
        watchOptions: {
            aggregateTimeout: 300,
            // poll: 1000
        },
        outputPath: path.resolve('demo/asset')
    }
};
