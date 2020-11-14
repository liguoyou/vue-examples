const path = require('path');
// 输出最终生成的配置 命令: vue inspect>webpack.config.output.js
module.exports = {
  publicPath: '/vue-examples', // 项目前缀
  devServer: {
    port: 8888, // 自定义端口号
  },

  // webpack-merge
  configureWebpack: {
    // 项目名称
    name: 'VUE 项目最佳实例',
  },

  // webpack-chain
  chainWebpack(config) {
    // 配置 svg 规则排除 svgs 目录
    config.module
      .rule('svg')
      .exclude.add(path.join(__dirname, 'src/assets/svgs'))
      .end();

    // 新增 icons 规则，设置 svg-sprite-loader 处理 svgs 目录中的 .svg 文件
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(path.join(__dirname, 'src/assets/svgs'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({ symbolId: 'icon-[name]' })
      .end();
  },
};
