Redux
    是JS状态容器 提供可预测化的状态管理

Redux应用场景
    1.用户的使用方式复杂
    2.不同身份的用户有不同的使用方式(比如普通用户和管理员)
    3.多个用户之间可以协作
    4.与服务器大量加护 或使用了WebSocket
    5.View要从多个来源获取数据
安装
    npm install redux react-redux
Redux
    应用中所有的state都以一个对象树的形式存储在一个单一的store中
    唯一改变state的方法是触发action
    一个描述发生什么的对象
    为了描述action如何改变state树 你需要编写reducers
    React Component - action -dispatch(action)- store(previousStat,action) - Reducers(newState) -Store -(state)React Component

1.引入react-redux提供的provider组件 可以让容器组件拿到state(state来自store)
    <Provider store={store}></Provider>
2.store保存数据的地方
    import {createStore} from 'redux'

    const initialState = 0;
    //创建store 存储数据的地方
    const store = createStore(()=>{

    },initialState)

    export default store
3.Action
    Action本质上是JS的普通对象 我们约定 action内必须使用一个字符串类型的type字段来表示将要执行二点动作
    多数情况下 type会被定义为字符串常量
    当应用规模越来越大时 建议使用单独的模块或文件存放action
    const addTodo = (text)=>{
        return{
            type:'ADD_TODO',
            text
        }
    }
    export default addTodo;
4.Reducer
    1.Store收到Action以后 必须给出一个新的state 这样View才会发生变化 这种State的计算过程就叫做Reducer
    2.reducer就是一个纯函数 接受旧的state和action 返回新的state
    3.combineReducers()所做的只是生成一个函数 这个函数来调用你一系列reducer 每个reducer根据它们的key来筛选出state中的一部分数据并处理 然后这个生成的函数再将所有reducer的结果合并成一个大的对象
5.获取state
    Connect(react-redux提供的)
        store里能直接通过store.dispatch()调用dispatch()方法调用action
        但是多数情况下你会使用raect-redux提供的connect()帮助器来调用
    mapStateToProps 将State转化为props属性
    const mapStateToProps = state =>({
        todos:state.todos
    })
    mapStateToProps 将state转化为props属性
    const mapDispatchToProps = (dispatch)=>{
        return{
            add:()=>dispatch(add())
        }
    }