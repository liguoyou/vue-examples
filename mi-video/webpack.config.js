const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/main.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    devServer: {
        contentBase: '/dist',
        open: true, // 自动在浏览器中打开服务
    },
    resolve: {
        "extensions": ['.ts', '.js', '.json']
    },
    module: {
        rules: [
            // 全局的css解析
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                exclude: [
                    path.resolve(__dirname, 'src/components'),
                ],
            },
            // 组件模块的css解析
            {
                test: /\.css$/,
                use: ['style-loader', {
                    loader: 'css-loader',
                    options: {
                        // modules: true,
                        modules: {
                            localIdentName: 'g-[local]--[hash:base64:5]'
                        },
                    },
                }],
                include: [
                    path.resolve(__dirname, 'src/components'),
                ],
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg)$/,
                use: ['file-loader'],
            },
            {
                test: /\.ts$/,
                use: ['ts-loader'],
                exclude: /node_modules/,
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin(),
    ],
    mode: 'development',
}