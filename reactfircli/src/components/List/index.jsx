import React, { Component } from 'react'
import propTypes from 'prop-types'
import Item from '../Item'
import './index.css'

export default class List extends Component {
    // 对接收的props进行 类型 必要性的限制
    static propTypes = {
        todos:propTypes.array.isRequired,
        updateTodo:propTypes.func.isRequired,
        deleteTodo:propTypes.func.isRequired
    }
    render() {
        const {todos,updateTodo,deleteTodo} = this.props;
        return (
            <div>
                <ul className="todo-main">
                    {
                        todos.map((todo)=>{
                            // return <Item key={todo.id} id={todo.id} name={todo.name} done={todo.done}/>;
                            return <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo}/>;
                        })
                    }
                </ul>
            </div>
        )
    }
}