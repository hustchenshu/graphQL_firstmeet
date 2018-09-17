 

 vue.config.js
 configureWebpack:{
  target: 'node', // in order to ignore built-in modules like path, fs, etc.
  externals: [nodeExternals()], 
 },