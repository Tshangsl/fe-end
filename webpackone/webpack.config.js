//common.js写法 用来获取绝对路径
const path = require('path');
//引入html-webpack-plugin插件
const HtmlPlugin = require('html-webpack-plugin');
//引入clean-webpack-plugin插件 解构的方式引入该插件
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
//引入mini-css-extract-plugin插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports={
    //开发环境配置 development production(上线 压缩) 默认production
    mode:'development',
    //入口文件的配置项
    entry: {
        index:'./src/index.js',
        main:'./src/main.js'
    },
    //出口文件配置项 只能识别绝对路径
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: "[name].js",
        publicPath: "http://localhost:8081/"
    },
    //服务与热更新
    devServer: {
        //设置基本目录结构
        contentBase:path.resolve(__dirname,'dist'),
        host:'localhost',
        port:8081,
        open:true
    },
    plugins: [
        new HtmlPlugin({
            //要打包的html模板路径和文件名称
            template: "./src/index.html",
            minify:{
                //各配置项
                   //对html文件进行压缩 去掉属性的双引号
                removeAttributeQuotes:true,
                //去掉所有的空格和换行
                // collapseWhitespace:true,
            },
            //处理浏览器缓存机制
            hash: true
        }),
        new MiniCssExtractPlugin({
            filename:'css/[name].css'
        })
    ],
    //配置loader
    module:{
        rules:[
            {
                //处理css文件
                test: /\.css$/,
                //先使用的放在后面
                // use:['style-loader','css-loader']
                use:[
                    //分离css要用到的
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                //处理css中的图片文件
                test:/\.png|jpg|gif$/,
                //只用一个loader可以不用写数组use 直接写对象
                use:[
                    {
                        loader:'url-loader',
                        options: {
                            // 把小于500B的文件打成Base64的格式写入css
                            limit:500,
                            outputPath:'images/',
                            esMoule:false
                        }
                    }
                ]
            },
            {
                //处理html中的图片文件
                test:/\.hml|html$/,
                loader:'html-withimg-loader'
            }
        ]
    }
}