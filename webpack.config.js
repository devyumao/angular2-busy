/**
 * @file Webpack config
 * @author yumao<yuzhang.lille@gmail.com>
 */

// Look in ./config folder for webpack.[type].js
switch (process.env.NODE_ENV) {
    case 'demo':
        module.exports = require('./config/webpack.demo');
        break;
    case 'test':
        module.exports = require('./config/webpack.test');
        break;
    case 'busy':
    default:
        module.exports = require('./config/webpack.busy');
}
