Vue 视图和数据双向绑定
React更注重组件及其状态的管理

相对于Vue React更加透明 没有过多的隐含逻辑(比如Vue的指令就是一种隐含逻辑) 更便于程序员理解程序的执行过程 当然 也更加复杂强大

React不是一个完整的MVC框架 最多可以认为是MVC中的V(View) 甚至React不非常认可MVC开发模式

React生态圈
    JSX 
        扩展了JS自身的语法 是React的基础 让我们可以在JS中写HTML标记语言 是一门独立的语言
    Flux
        React的数据流组件 可以实现组件间相互通信和数据共享
    Redux
        比Flux更加简单易用
    React-Router
        为单文件应用提供了路由功能 用url控制页面显示状态
    React-Native(RN)
        用React编写原生移动应用 flutter weex(基于Vue)
    React-server
        服务端渲染React组件

browser.js用于编译JSX
react.js react核心库 用来管理组件和状态
react-dom.js 用于渲染组件 依赖于react.js 所以必须放在react.js下面

不能辨别是CSS3中的class 还是JS中的类声明关键字class CSS3中的class用className代替 


React中的HTML代码不是真正的HTML 是一种JSX语法 绝大部分标签同HTML标签一样使用 
JSX不会真正创建DOM元素 JSX只是解析模板语法 创建虚拟DOM节点 需经由ReactDOM渲染才会呈现真正的DOM元素
JSX
    两个特殊属性
        class->className
        for->htmlFor
    必须要有一个唯一的父元素
    单标签必须闭合
    表达式/变量要用{} 能被识别成一个变量 不仅可以实现变量替代 可以直接把变量对象写到对应位置

模块化与组件化
    模块化
        是从代码的角度来进行分析的 把一些可复用的代码 抽离为单个的模块 便于项目的维护和开发
    组件化
        是从UI界面的角度来进行分析的 把一些可复用的UI元素抽离处理
        优点:
            随着项目规模的增大 手中的组件越来越多 很方便就能把现有的组件拼接成一个完整的页面

Vue与React的组件化实现
    Vue实现组件化
        通过.vue文件 创建对应的组件
        Template 结构
        script 行为
        style 样式
    React实现组件化
        React中有组件化的概念 但没有像Vue这样的组件模板文件 React中一切都是以JS来表示的

React中组件&Props
    (Vue中组件分为 全局组件/局部组件)
    组件分类
        函数组件(无状态组件)
        class组件(有状态组件)
    组件定义
        1.所有的组件都应该显示在页面中
        2.组件名必须首字母大写 否则会认为是HTML标签
        3.class组件必须继承自React.Component
        4.class组件必须有constructor做状态初始化
        5.class组件必须有render
    组件传参
        通过props来接受父组件通信

State&事件处理
    State(状态)
        1.如果组件内的属性需要修改 需要把属性存储在state中 状态一旦变化 组件就会重新渲染
        2.修改状态时不可以直接修改 需要调用setState()方法
        3.状态的初始化只能在方法constructor中
    Props
        是只读的不可修改(只能读取 不能写入)
    事件
        1.事件的命名需要采用小驼峰式 而不是纯小写eg:onclick=>onClick onblur=>onBlur
        2.使用JSX语法时需要传入一个函数作为事件的处理函数而不是一个字符串
        3.要注意自定义事件中的this指向问题 通过bind()方法修改this
        4.如果需要阻止浏览器的默认行为 需要使用preventDefault()方法 而不能使用return false

组件的引用和组件的通信
    组件引用
        ref:需要引用的组件 给组件起一个名字 也可以给一个元素起名 若ref重复后面则会覆盖前面
        refs：父级中引用所有ref组件
    组件间通信可分为
        父组件->子组件 ref
        子组件->父组件 props
        非父子组件
            同页面内:公共对象 共同父级中转
            跨域面:localStorage 服务器中转redux


条件渲染&列表渲染
    条件渲染
        if语句
        三目运算符
    列表渲染
        map遍历数组
        渲染时需要添加一个key key帮助react识别元素变化
        key一定是唯一的 通常会选择使用数据库的id

组件的重新渲染
    组件的状态需要使用setState方法 而不能直接修改 是因为我们直接修改以后组件没有重新渲染 
    如 直接写this.a修改时 组件不会重新渲染
    状态更新时 组件会重新渲染
组件的重新渲染 三种情况
    1.setState({})
    2.props改变
    3.forceUpdate

组件的生命周期
    函数组件是没有生命周期的
    React中每个class组件都有生命周期(钩子函数)
    1.render()方法是class组件中唯一必须实现的方法
    2.constructor(props)通过给this.state赋值对象来初始化内部state 为事件处理函数绑定实例
    3.componentDidMount 会在组件挂载后(插入DOM树中)立即调用
    4.componentDidUpdate(prevProps,prevState,snap)在更新后会被立即调用 首次渲染不会执行此方法
    5.shouldComponentUpdate(nextProps,nextState)
    6.componentWillUnmount()会在组件卸载及销毁之前直接调用
    7.static getDerivedStateFromProps()会在调用render方法之前调用 并且在初始挂载及后续更新都会被调用 
        它应返回一个对象来更新state 如返回null则不更新任何内容
    8.getSnaphotBeforeUpdate()在最近一次渲染输出(提交的DOM节点)之前调用 
        使得组件能在发生更改之前从DOM中捕获一些信息(如 滚动位置) 此生命周期的任何返回值将作为参数传递给componentDidUpdate()
生命周期的三个阶段(旧)
    1.初始化阶段 由ReactDOM.render()触发--初次渲染
        1.constructor()
        2.componentWillMount() 
        3.render()
        4.componentDidMount() 常用 页面一上来做点什么
            一般在这个钩子中做一些初始化的事情 
            例如 开启定时器 发起网络请求 订阅消息
    2.更新阶段 由组件内部this.setState()或父组件更新render函数
        1.shoudComponentUpdate()
        2.componentWillUpdate()
        3.render() 必要
        4.componentDidUpdate()
    3.卸载组件 由ReactDOM.unmountComponentAtNode()触发
        1.componentWillUnMount() 常用
            一般在这个钩子中做一些收尾的事
            关闭定时器 取消订阅消息
生命周期(新)
        常用的三个生命周期钩子
        render
        componentDidMount
        componentWillUnmount
    即将废弃的三个生命周期钩子
        componentWillMount
        componentWillWillRecieveProps
        componentDidUpdate
    新增的两个生命周期钩子
        getDerivedStateFromProps()
        getSnapshotBeforeUpdate()
    1.初始化阶段 由ReactDOM.render()触发 初次渲染
        1.constructor()
        2.getDerivedStateFromProps()
        3.render()
            React更新DOM和refs
        4.componentDidMount()
    2.更新阶段 由组件内部this.setState()或父组件重新render触发
        1.getDerivedStateFromProps()
        2.shouldComponentUpdate()
        3.render()
        4.getSnapshotBeforeUpdate()
            React更新DOM和refs
        5.componenDidUpdate()
    3.卸载组件 由ReactDOM.unmountComponentAtNode()触发
        1.componentWillUnmount()















