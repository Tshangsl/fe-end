import React, { Component } from 'react';

class Details extends Component {
    render() {
        let {params} = this.props.match;
        console.log(params);
        return (
            <div>
                课程详情
                <p>id:{params.id}</p>
            </div>
        );
    }
}

export default Details;
