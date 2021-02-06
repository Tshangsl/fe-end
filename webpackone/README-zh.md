基于node

//-y webpack默认设置
npm init -y

//项目目录下局部安装webpack 和webpackone两个插件
npm install -D webpack webpack-cli 局部安装

//项目目录下新建两个文件夹 src文件夹 dist文件夹
//项目目录下手动创建一个webpack.config.js文件
webpack.config.js中配置 入口文件 出口文件

//package.json文件中scripts中添加"build": "webpack",
//直接运行webpack无法找到 因为其在node_modules中
执行npm run build 相当于 执行 npm run webpack

//1.安装该插件 每次构建先删除dist再重新打包dist文件夹 
new CleanWebpackPlugin()
npm install clean-webpack-plugin --save-dev

//webpack打包html文件和css文件
//webpack文件只能识别js文件 为打包html文件和css文件 
//2.打包html文件
//下载插件 webpack.config.js文件中引入该插件
npm install html-webpack-plugin --save-dev

//3.服务与热更新插件
//同webpack一样 安装到了node_modules 需要在scripts中加自定义命令
npm install --save-dev webpack-dev-server

//3.服务与热更新 版本不兼容报错 Error: Cannot find module 'webpack-cli/bin/config-yargs' 解决方法
//卸载 用cnpm好像会报错
npm uninstall webpack webpack-cli webpack-dev-server
//安装指定版本
npm install webpack@4.43.0 webpack-cli@3.3.12 webpack-dev-server@3.11.0 -D
//再启动运行项目
npm run dev

//4.打包css文件 安装两个loader
css-loader 将css插入到页面的style标签
style-loader 处理css文件中的url url挂载到js中
npm install --save-dev css-loader
npm install --save-dev style-loader
//创建css文件 在js文件中使用import引入该文件

//5.插件 实现css分离 
//达到效果 虽然css文件仍然是在js文件中引入的 但是做到了样式分离
npm install --save-dev mini-css-extract-plugin

//6.css文件引入图片 webpack不能处理图片类型文件 通过publicPath设置绝对路径
npm install --save-dev file-loader url-loader

//7.html文件中图片打包
npm install html-withimg-loader --save-dev
