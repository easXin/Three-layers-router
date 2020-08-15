import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class MyNavLink extends Component{
    render(){
         // this.props 将外部传进来的全给 NavLink
        return <NavLink {...this.props} activeClassName="activeClass" />;
    }
}