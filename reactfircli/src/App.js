// 这种书写形式 代表react文件中应该有多种暴露形式
import React, { Component } from 'react'

// 可以改名为index 默认为index 不用写
// import Hello from './components/Hello/Hello'
// import Welcome from './components/Welcome/Welcome'

import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

import './App.css';
// 引入文件规格 第三方最上面 自己的其次 样式最后

// Rreact脚手架中引入js和jsx都不用写后缀

// 创建外壳组件App并暴露
// App是所有组件的父组件 可以给任意子组件传递数据
export default class App extends Component {

  // 初始化状态
  state = {
    todos: [
      { id: '001', name: "吃饭", done: true },
      { id: '002', name: "睡觉", done: true },
      { id: '003', name: "看别人敲代码", done: true },
    ]
  }
  // addTodo用于添加一个todo 接收的参数是todo对象
  addTodo = (todoObj) => {
    // 获取原todo
    const { todos } = this.state;
    // 追加一个todo
    const newTodos = [todoObj, ...todos];
    // 更新状态
    this.setState({ todos: newTodos });
  }

  // updateTodos用于更新一个todo对象
  updateTodo = (id, done) => {
    // 获取状态中的todos
    const { todos } = this.state;
    // 匹配处理数据
    const newTodos = todos.map((todoObj) => {
      if (todoObj.id === id) return { ...todoObj, done }
      else return todoObj;
    })
    this.setState({ todos: newTodos });
  }

  // deleteTodo用于删除一个todo对象
  deleteTodo = (id) => {
    // 获取原来的todos
    const { todos } = this.state;
    //删除指定id的对象
    const newTodos = todos.filter((todoObj) => {
      return todoObj.id !== id;
    })
    this.setState({ todos: newTodos });
  }

  // checkAllTodo用于全选
  checkAllTodo = (done) => {
    // 获取原来的todos
    const { todos } = this.state;
    // 加工数据
    const newTodos = todos.map((todoObj) => {
      return { ...todoObj, done };
    })
    // 更新状态
    this.setState({todos:newTodos});
  }

  // clearAllDone清除所有已经完成的
  clearAllDone=()=>{
    // 获取原来的todos
    const {todos} = this.state;
    // 过滤数据
    const newTodos =  todos.filter((todoObj)=>{
      return !todoObj.done
    })
    // 更新状态
    this.setState({todos:newTodos});
  }

  render() {
    const { todos } = this.state;
    return (
      <div>
        <Header addTodo={this.addTodo} />
        <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
        <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
      </div>
    )
  }
}

