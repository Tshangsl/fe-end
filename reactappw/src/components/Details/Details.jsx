import React, { Component } from 'react';

class Details extends Component {
    constructor(props){
        super(props);
        this.state ={
            data:{}
        }
    }
    static getDerivedStateFormProps(nextProps,nextState){

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
