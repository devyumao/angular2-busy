var webpack = require('webpack');
var ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var autoprefixer = require('autoprefixer');

var helper = require('./helper');

module.exports = {
    debug: true,

    context: helper.root('demo'),

    entry: {
        'vendor': 'vendor.ts',
        'main': 'main.ts'
    },

    output: {
        path: helper.root('demo/asset'),
        filename: 'js/[name].js'
    },

    resolve: {
        extensions: ['', '.ts', '.js'],
        root: helper.root('demo'),
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
                loader: 'raw!postcss!less'
            },
            {
                test: /\.html$/,
                loader: 'raw'
            }
        ]
    },

    postcss: [
        autoprefixer()
    ],

    plugins: [
        new ForkCheckerPlugin(),

        new webpack.optimize.CommonsChunkPlugin({
            name: ['main', 'vendor']
        }),

        new HtmlWebpackPlugin({
            template: 'index.html',
            inject: 'body',
            chunks: ['vendor', 'main']
        }),

        new CopyWebpackPlugin([
            {
                from: helper.root('node_modules/bootstrap/dist/css/bootstrap.min.css'),
                to: 'css/'
            },
            {
                from: helper.root('build/style/busy.css'),
                to: 'css/'
            }
        ])
    ],

    devServer: {
        port: 8999,
        host: 'localhost',
        historyApiFallback: true,
        watchOptions: {
            aggregateTimeout: 300
        },
        outputPath: helper.root('demo/asset')
    }
};
