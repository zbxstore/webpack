const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: "production",
    entry: {
        app:'./src/index.js',
        print: './src/print.js'
    },

    plugins:[
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: '输出管理'
        })

    ],

    output:{
        filename : "[name].bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    module:{
        rules:[
            //加载css
            {      
                test: /\.css$/,
                use:[
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