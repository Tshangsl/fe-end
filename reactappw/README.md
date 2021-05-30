路由基础知识
    react-router相关的四大组件
        react-router 核心库
        react-router-dom react-router的dom绑定版 只需安装这个 核心库会自动绑定
        react-router-native react-native用的 跨端开发 app端开发
        react-router-config 静态配置辅助库
    路由三大对象
        Router
            路由对象 包裹在所有路由逻辑(链接 配置)之外 只有在router中的内容才可以使用react-router
            三种模式
                BrowerRouter
                    基于H5的history API 直接以path形式呈现
                HashRouter
                    基于location.hash 页面不刷新
                MemoryRouter
                    路由状态保存在内存 刷新页面会消失(刷新回到首页的应用)
        Route
            路由配置 非常类似于Vue的路由表
        Link
            路由跳转 类似于vue的link
路由安装
    React中需要手动进行路由安装
    npm install react-router-dom -D
    yarn add react-router-dom -D 
基本路由
    Link
    Route
    Switch
React中路由默认是模糊匹配的
    可在Link中加入exact关键字 精确匹配
Switch仅会渲染它所包裹的route当中最先匹配到的那个页面 
    使用该组件要注意Link组件摆放顺序
路由的传参
    fetch
    url 
        传参 <Route path="/course/:id" component={Details}>
        获取参数 this.props.match  
    Link
        传参
        获取参数
            this.props.location
            this.props.history.location