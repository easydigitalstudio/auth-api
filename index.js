require('./env');
require('babel-polyfill');
require('babel-core/register');
require('./app/server').default();
