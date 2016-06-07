var ExtractTextPlugin = require('extract-text-webpack-plugin');

var helper = require('./helper');

module.exports = {
    debug: true,

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
                loader: ExtractTextPlugin.extract('raw!less')
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin('style/[name].css')
    ]
};
