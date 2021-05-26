import React,{Component} from 'react'
import './Hello.css'
/*
    功能界面的组件化编码流程(通用)
    1.拆分组件 拆分界面 抽取组件
    2.实现静态组件 使用组件实现静态页面效果
    3.实现动态组件
        1.动态显示初始化数据
            1.数据类型
            2.数据名称
            3.保存在哪个组件
        2.交互(从绑定事件监听开始)
    组件的组合使用 TodoLsit
    功能:组件化实现此功能
        1.显示所有的tabs列表
        2.输入文本 点击按钮显示到列表的首位 并清除输入的文件
*/
export default class Hello extends Component{
    render(){
        return (
            <h2 className="title">Hello React</h2>
        )
    }
}