import React, { Component } from 'react';

class Details extends Component {
    constructor(props){
        super(props);
        this.state ={
            data:{}
        }
    }
    // 静态方法中this不能使用 this是不存在的
    // 它应返回一个对象来更新state 如果返回null则不更新任何内容
    // 此方法用于罕见的用例即state的值在任何时候都取决于props
    static getDerivedStateFormProps(nextProps,nextState){
        console.log('nextProps',nextProps.match,'props',this);
        let result = {};
        fetch(`/data/course${this.props.match.params.id}.json`)
        .then(response => {
            return response.json()
        })
        // then里面return return出来的都是Promise对象
        .then(res => {
            console.log('res',res);
            if (res.error * 1 === 0) {
                result.data = res.data;
                return result
            } else {
                alert(res.errmsg);
            }
        })
        .catch(err => {
            console.log(err);
        })
        return result;
    }
    shouldComponentUpdate(nextProps,nextState){
       return nextProps.match.params.id !== this.props.match.params.id  || nextState.data.id !== this.state.data.id      
    }
    componentDidUpdate(){
        fetch(`/data/course${this.props.match.params.id}.json`)
        .then(response => {
            return response.json()
        })
        .then(res => {
            console.log('res',res);
            if (res.error * 1 === 0) {
                this.setState({
                    data: res.data
                })
            } else {
                alert(res.errmsg);
            }
        })
        .catch(err => {
            console.log(err);
        })
    }
    componentDidMount(){
        fetch(`/data/course${this.props.match.params.id}.json`)
        .then(response => {
            return response.json()
        })
        .then(res => {
            console.log('res',res);
            if (res.error * 1 === 0) {
                this.setState({
                    data: res.data
                })
            } else {
                alert(res.errmsg);
            }
        })
        .catch(err => {
            console.log(err);
        })
    }
    render() {
        // let {params} = this.props.match;
        // console.log(params);
        let {data} = this.state;
        return (
            <div>
                课程详情
                <p>课程ID:{data.id}</p>
                <p>课程名称:{data.title}</p>
                <p>课程介绍:{data.teacher}</p>
                <p>课程简介:{data.intro}</p>
            </div>
        );
    }
}

export default Details;
