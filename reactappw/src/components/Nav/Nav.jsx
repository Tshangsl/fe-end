import React, { Component } from 'react'
import { Link, Route } from "react-router-dom"

import Banner from '../Banner/Banner'
import User from '../User/User'

export default class Nav extends Component {
    render() {
        return (
            <div>
                <h1>导航菜单</h1>
                <Link to={`${this.props.match.path}/banner`}>轮播图信息</Link>
                <Link to={`${this.props.match.path}/user`}>用户管理</Link>

                <Route path={`${this.props.match.path}/banner`} component={Banner}></Route>
                <Route path={`${this.props.match.path}/user`} component={User}></Route>
            </div>
        )
    }
}
