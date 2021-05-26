import './App.css';


// 这种书写形式 代表react文件中应该有多种暴露形式
import React,{Component} from 'react'

// 可以改名为index 默认为index 不用写
import Hello from './components/Hello/Hello'
import Welcome from './components/Welcome/Welcome'

// Rreact脚手架中引入js和jsx都不用写后缀

// 创建外壳组件App并暴露
export default class App extends Component {
  render(){
    return (
      <div>
        <Hello/>
        <Welcome/>
      </div>
    )
  }
}

