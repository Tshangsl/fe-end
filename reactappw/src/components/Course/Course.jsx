import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Course extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }
    componentDidMount() {
        fetch('/data/courseList.json')
            .then(response => {
                return response.json()
            })
            .then(res => {
                if (res.errno * 1 === 0) {
                    this.setState({
                        list: res.data
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
        return (
            <div>
                <h1>课程目录</h1>
                <div>
                    <p>
                        {this.state.list.map(item => {
                            return <Link key={item.id} to={`/course/${item.id}`}>{item.title}|</Link>
                        })}
                    </p>
                </div>
            </div>
        );
    }
}

export default Course;
