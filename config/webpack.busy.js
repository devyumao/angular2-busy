var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

var helper = require('./helper');

module.exports = {
    debug: false,

    context: helper.root('src'),

    entry: {
        'busy': 'style'
    },

    output: {
        path: helper.root('build'),
        filename: '[name].js'
    },

    resolve: {
        extensions: ['', '.js'],
        root: helper.root('src')
    },

    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'raw'
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('raw!postcss!less')
            }
        ]
    },

    postcss: [
        autoprefixer()
    ],

    plugins: [
        new ExtractTextPlugin('style/[name].css')
    ]
};
