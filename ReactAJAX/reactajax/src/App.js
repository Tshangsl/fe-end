import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import axios from 'axios';

export default class App extends Component {

  getStuedentData = () => {
    // 脚手架中 配置代理 解决跨域问题
    // 1.package.json中配置proxy 会先在自己的服务器查找 如果有直接返回 而不会再此向其代理服务器请求
    axios.get('http://localhost:3000/api1/students').then(
      response =>{console.log('成功了',response.data)},
      error=>{console.log('失败'),error}
    )
  }

  render() {
    return (
      <div>
        <button onClick={this.getStuedentData}>点我获取学生数据</button>
      </div>
    )
  }
}