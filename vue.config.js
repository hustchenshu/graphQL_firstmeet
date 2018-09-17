var nodeExternals = require('webpack-node-externals');

module.exports = {
 // 基本路径
 baseUrl: '/',
 // 输出文件目录
 runtimeCompiler: true,
 outputDir: 'dist',
 configureWebpack:{
  target: 'node', // in order to ignore built-in modules like path, fs, etc.
  externals: [nodeExternals()], 
 },
  pluginOptions: {
    apollo: {
      enableMocks: true,
      enableEngine: true
    }
  }
}
