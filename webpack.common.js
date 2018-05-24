/* webpack通用配置 */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

//使用模块热替换

module.exports = {
    mode: "production",
    entry: {
        app: './src/index.js',
    },

    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: '输出管理'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()

    ],

    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            //加载css
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            //加载图片
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            //加载字体
        ]
    }
}