SPA
1.单页Web应用(Single Page Web Application SPA)
2.整个应用只有一个完整的页面
3.点击页面中的链接不会刷新页面 只会做页面的局部刷新
4.数据都需要通过AJAX请求获取 并在前端异步请求

路由的理解
路由概念
1.一个路由就是一个映射关系{key:value}
2.key为路径 value可能是function(后端 处理客户端提交过来的一个请求o)或component
路由分类
1.后端路由
    1.理解 :value是function 用来处理客户端提交的请求
    2.注册路由:router.get(path,function(req,res))
    3.工作过程:当node接受到一个请求时 根据请求路径找到匹配的路由 调用路由中的函数来处理请求 返回响应数据
2.前端路由
    前端路由实现依赖BOM上面的history
        let history = History.createBrowserHistory();
        1.直接使用H5推出的history身上的API
        let history = History.createHashHistory();
        2.hash值(锚点)
            锚点跳转不会引起页面刷新 但可以留下历史记录
            兼容性好
    1.浏览器端路由 value是component 用于展示页面内容
    2.注册路由<Route path="/test" component=[Test]>
    3.工作过程:当浏览器的path变为/test时 当前路由组件就会变为Test组件
react-router理解
    react-router库有三种实现 分别给三种平台使用
        Web react-router-dom
        native
        any
    1.react的一个插件库
    2.专门用来实现一个SPA应用
    3.基于react的项目基本都会用到此库

    路由 Route
    路由器 Router

    路由器用于管理路由 多个路由需要一个路由器管理
    
    1.点击导航链接 引起路径变化
    2.路径的变化被前端路由器检测到 进行匹配组件 从而展示
react-router-dom相关API
    内置组件
        1.<BrowserRouter>
        2.<HashRouter>
        3.<Route>
        4.<Redirect>
        5.<Link>
        6.<NavLink>
        7.<Switch>
    其他
        1.history对象
        2.match对象
        3.withRouter函数
路由的基本使用
    1.明确好界面中的导航区 展示区
    2.导航区的a标签改为Link标签
        <Link to="/xxxxx">Demo</Link>
    3.展示区写Route标签进行路径匹配
        <Route path="/xxx" component={Demo}>
    4.<App>的最外侧包裹了一个<BrowserRouter>或<HashRouter>


安装
yarn add react-router-dom

路由组件 放在pages中 
一般组件 放在components中

路由组件和一般组件最大的区别
    路由组件会收到路由传递的三个非常重要的props
        history location match

路由组件&一般组件
    1.写法不同
        一般组件<Demo/>
        路由组件<Route path="/demo" component={Demo}/>
    2.存放位置不同
        一般组件components
        路由组件pages
    3.接收到的props
        一般组件:写组件标签时传递了什么 就能收到什么
        路由组件:接收到三个固定的属性 
            history
                go:f go(n)
                goBack:f goBack()
                goForward:f goForward()
                push:f push(path,state)
                replace:f replace(path,state)
            location
                pathname:"/about"
                search:""
                state:undefined
            match
                params:{}
                path:"/about"
                url:"/about"

NavLink与MyNavLink
    1.NavLink可以实现路由链接的高亮 通过activeClassName指定样式名
    2.标签体内容是一个特殊的标签属性
    3.通过this.props.chilren可以获取组件标签体内容

switch的使用
    1.通常情况下 path和component是一一对应的关系
    2.switch可以提高路由匹配效率(单一匹配)

解决多级路径刷新页面样式丢失的问题
    1.public/index.html 中 引入样式时不写./ 写/ 常用
    2.public/index.html 中 引入样式时不写./ 写%PUBLIC_URL%(常用) 只适用于React脚手架
    3.使用HashRouter

npm start/
yarn start 可等同

安装包时npm yarn两种包管理器不要混用

路由的严格匹配和模糊匹配
    1.默认使用的是模糊匹配([输入的路径]必须包含要[匹配的路径] 且顺序要一致)
    2.开启严格匹配:<Route exact={true} path="/about" component={About}>
    3.严格模式不要随便开启 需要再开 有些时候开启会导致无法继续匹配二级路由

Redirect的使用
    1.一般卸载所有路由注册的最下方 当所有路由都无法匹配到时 跳转到redirect指定的路由
    2.具体编程
        <Switch>
            <Route path="/about" component={About} />
            <Route path="/home" component={Home} />
            <Redirect to="/about"/>
          </Switch>








