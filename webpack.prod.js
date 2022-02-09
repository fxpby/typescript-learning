const commonConfig = require('./webpack.common.js')
const { merge } = require('webpack-merge')

const prodConfig = {
  mode: 'production',
}

module.exports = merge(commonConfig, prodConfig)