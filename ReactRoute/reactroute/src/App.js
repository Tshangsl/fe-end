import './App.css';
// 路由器分两种 BrowerRouter HashRouter
import React, { Component } from 'react';
// 多个暴露
import { NavLink, Route, Switch ,Redirect} from 'react-router-dom';

// 路由组件
import Home from './pages/Home';
import About from './pages/About';
// 一般组件
import Header from './components/Header'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {/* 在React中靠路由链接切换组件 编写路由链接*/}
        <NavLink to="/about" >About</NavLink>
        <NavLink to="/home">Home</NavLink>
        {/* <MyNavLink></MyNavLink> */}
        <div>
          {/* 注册路由 */}
          {/* 被Switch包裹后 不会再向下匹配路由 */}
          {/* exact={true}/exact开启精准匹配 */}
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/home" component={Home} />
            {/* 最后谁都没匹配上 匹配Redirect */}
            <Redirect to="/about"/>
          </Switch>
        </div>
      </div>
    )
  }
}