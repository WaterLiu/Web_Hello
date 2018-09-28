const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: "development",
    devtool: 'eval-source-map',
    entry: __dirname + "/src/main.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    devServer: {
        contentBase: "./dist", //本地服务器所加载的页面所在的目录
        historyApiFallback: true, //不跳转
        inline: true //实时刷新
    },
    resolve: {
        alias: {
            "jquery": "jquery",
            "jquery-ui": "jquery-ui",
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    plugins: ['transform-runtime', 'transform-decorators-legacy'],
                    presets: ['es2015', 'react', 'stage-2']
                }
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']

            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?name=[path][name].[ext]'
            },
            {
                test:/\.(sass|scss)$/,
                use:['style-loader','css-loader','sass-loader']
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({ //下载Jquery库
            "$":"jquery",
            "jQuery":"jquery",
            "window.jQuery":"jquery"
        }),
        new CleanWebpackPlugin(
            // ['dist/main.*.js', 'dist/manifest.*.js',],　 //匹配删除的文件
            ['dist/bundle.js'],
            {
                root: __dirname,       　　　　　　　　　　//根目录
                verbose: true,        　　　　　　　　　　//开启在控制台输出信息
                dry: true        　　　　　　　　　　     //启用删除文件
            }
        )

    ]
};
