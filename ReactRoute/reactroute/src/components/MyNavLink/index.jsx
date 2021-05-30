import React,{Component} from "react";
import {NavLink} from 'react-router-dom'

export default class MyNavLink extends Component{
    render(){
        // console.log('Header',this.props);
        return(
            <NavLink to="/home">Home</NavLink>
        )
    }
}