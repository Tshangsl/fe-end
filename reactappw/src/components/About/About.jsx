import React, { Component } from 'react';

class About extends Component {
    render() {
        console.log(this.props);
        let { search } = this.props.location;
        let params = new URLSearchParams(search);
        console.log(params.get('id'));
        console.log(params.get('age'));
        return (
            <div>
                关于我们
            </div>
        );
    }
}

export default About;
