import React, { Component } from 'react'
import './index.css'

// 状态中的数据驱动着页面展示
export default class Footer extends Component {
    // 全选checkbox的回调
    handleCheckAll = (event) => {
        this.props.checkAllTodo(event.target.checked)
    }
    // 清除所有已完成任务的回调
    handleClearAllDone=()=>{
        this.props.clearAllDone();   
    }
    render() {
        const { todos } = this.props;
        // 已完成的个数
        const doneCount = todos.reduce((pre, todo) => {
            return pre + (todo.done ? 1 : 0);
        }, 0)
        // 总数  
        const total = todos.length;
        return (
            <div className="todo-footer">
                <label htmlFor="">
                    {/* default checked只在第一次起作用 */}
                    {/* checked可多次更改 如果在react中写checked 则必须写onchange */}
                    <input type="checkbox" onChange={this.handleCheckAll} checked={doneCount === total && total !== 0 ? true : false} />
                </label>
                <span>
                    <span>已完成{doneCount}</span>/全部{total}
                </span>
                <button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成任务</button>
            </div>
        )
    }
}