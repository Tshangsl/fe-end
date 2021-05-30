React AJAX
1.前置说明
    1.React本身只关注界面 并不包含发送AJAX请求的代码
    2.前端应用需要通过AJAX请求与后台进行交互(JSON数据)
    3.React应用中需要集成第三方AJAX库(或自己封装)
2.常用的AJAX请求库
    (React 尽量减少自己操作DOM 自己只是该状态 React帮助操作DOM)
    1.JQuery 比较重 如果需要另外引入 不建议使用(操作DOM)
    2.axios     轻量级 建议使用
        1.封装XmlHttpRequest对象的AJAX
        2.Promise对象
        3.可以用在浏览器端和Node服务器端

yarn add axios