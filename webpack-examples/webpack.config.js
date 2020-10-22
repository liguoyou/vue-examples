const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");
module.exports = {
  // webpack 执行构建入口
  // entry: "./src/index.js",
  // 多入口
  entry: {
    index: "./src/index.js",
    login: "./src/login.js",
  },

  // output: './dist', // 默认构建输出目录
  output: {
    // 将所有依赖的模块合并输出到 main.js
    // [name] 占位符, 文件的名称
    // 工程构建 hash, 模块 chunkhash 推荐, 文件内容 contenthash
    filename: "[name].[hash:8].js",
    // 构建输出目录 distribution 发行版
    path: path.resolve(__dirname, "./dist"),
  },

  // 运行环境:
  // none
  // development -> process.env.NODE_ENV = development
  // production -> process.env.NODE_ENV = production
  mode: "development",

  // 源代码与打包后的代码的映射关系，通过sourceMap定位到源代码
  devtool: "cheap-module-eval-source-map",

  // webpack-dev-server 配置
  devServer: {
    contentBase: "./dist", // 运行时打包的模块在内存中
    open: true, // 自动打开
    port: 8088, // 端口号
    hot: true, // 热模块更新
    hotOnly: true, // // 即便 HMR 不生效，浏览器也不自动刷新，就开启 hotOnly
    proxy: {
      // 代理映射
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true, // 跨域
      },
    },
  },

  module: {
    rules: [
      // loader 模块处理
      {
        test: /\.css$/,
        // loader 自右向左执行
        use: [
          {
            loader: "style-loader",
            options: {
              injectType: "singletonStyleTag", // 将所有的 style 标签合并成一个
            },
          },
          "css-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            // [ext] 资源模块的后缀名
            name: "[name].[hash:8].[ext]",
            outputPath: "./img/",
          },
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },

  // 插件
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack Examples", // ⽤来⽣成⻚面的 title 元素
      filename: "index.html", // 输出的 HTML ⽂件名，默认是 index.html, 也可以直接配置带有⼦目录。
      template: "./public/index.html", // 模板⽂文件路路径，支持加载器，⽐如 html!./index.html
      favicon: "./public/favicon.ico", // 添加特定的 favicon 路径到输出的 HTML 文件中。
    }),
    new CleanWebpackPlugin(),
    // HMR:热模块替换
    new webpack.HotModuleReplacementPlugin(),
  ],
};
