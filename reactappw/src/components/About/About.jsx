import React, { Component } from 'react';
// import {Redirect} from "react-router-dom"

class About extends Component {
    // 使用脚手架 可以使用箭头函数解决this指向问题
    go = ()=>{
        // 编程式导航
        
        // this.props.history.goBack();
        // this.props.history.push('/course/27');
        // this.props.history.push({
        //     pathname:"/course",
        //     hash:'rea'
        // });
        this.props.history.replace("/about")
    }
    render() {
        console.log(this.props);
        let { search } = this.props.location;
        let params = new URLSearchParams(search);
        console.log(params.get('id'));
        console.log(params.get('age'));
        return (
            <div>
                <h1>关于我们</h1>
                {/* <Redirect to="/course"></Redirect> */}
                <button onClick={this.go}>go</button>
            </div>
        );
    }
}

export default About;
