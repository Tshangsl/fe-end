// 引入React核心库
import React from 'react';
// 引入ReactDOM
import ReactDOM from 'react-dom';
import './index.css';
// 引入App组件
import App from './App';
import reportWebVitals from './reportWebVitals';

// 渲染APP到页面
ReactDOM.render(
  // 能检查app和app中包含的组件书写是否合理
  // webpack-dev-server 开启3000端口
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
