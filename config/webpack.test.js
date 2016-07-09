var ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;

var helper = require('./helper');

module.exports = {
    debug: true,

    context: helper.root('test'),

    entry: {
        'busy.spec': 'busy.spec.ts'
    },

    output: {
        path: helper.root('test'),
        filename: '[name].js'
    },

    resolve: {
        extensions: ['', '.ts', '.js'],
        root: helper.root('test'),
        modulesDirectories: ['node_modules']
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript'
            }
        ]
    },

    plugins: [
        new ForkCheckerPlugin()
    ]
};
