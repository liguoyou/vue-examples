const path = require("path");
// 输出最终生成的配置: vue inspect>webpack.config.output.js
module.exports = {
  publicPath: "/vue-examples", // 项目前缀
  devServer: {
    port: 8888, // 端口号
  },

  configureWebpack: {
    name: "VUE 项目最佳实例",
  },

  chainWebpack(config) {
    // 配置svg规则排除icons目录中svg文件处理
    config.module
      .rule("svg")
      .exclude.add(path.join(__dirname, "src/components/SvgIcon/icons"))
      .end();

    // 新增icons规则，设置svg-sprite-loader处理icons目录中的svg
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(path.join(__dirname, "src/components/SvgIcon/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({ symbolId: "icon-[name]" })
      .end();
  },
};
