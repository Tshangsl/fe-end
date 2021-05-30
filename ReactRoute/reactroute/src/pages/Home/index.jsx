import React, { Component } from 'react';
import { NavLink, Route ,Switch} from 'react-router-dom';

import News from './News'
import Message from './Message'

export default class Home extends Component {
    render() {
        // console.log('Home',this.props);
        return (
            <div>
                <NavLink to="/home/news"></NavLink>
                <NavLink to="/home/message"></NavLink>
                <h2>Message</h2>
                <ul>
                    <li>message1</li>
                    <li>message2</li>
                    <li>message3</li>
                </ul>
                {/* 注册路由 */}
                <Switch>
                    <Route path="/home/message" component={Message}></Route>
                    <Route path="/home/news" component={News}></Route>
                </Switch>
            </div>
        )
    }
}