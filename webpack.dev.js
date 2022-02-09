const commonConfig = require('./webpack.common.js')
const { merge } = require('webpack-merge')
const path = require('path')

const devConfig = {
  mode: "development",
  devServer: {
    static: path.join(__dirname, './dist'),
    hot: true,
    open: true, // 自动打开浏览器
    port: 9001
  }
}

module.exports = merge(commonConfig, devConfig)