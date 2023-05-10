import React from "react";
import './Nav.scss'
import {Link, NavLink} from "react-router-dom";

class Nav extends React.Component{
    render () {
        return(
            <div className="topnav">
                <NavLink to="/" activeClassName="active" className="topnav-list active" exact={true}>Home</NavLink>
                <NavLink to="/todo" activeClassName="active" className="topnav-list ">Todos</NavLink>
                <NavLink to="/about" activeClassName="active" className="topnav-list ">About</NavLink>
                <NavLink to="/user" activeClassName="active" className="topnav-list ">User</NavLink>
            </div>
        )
    }
}
export default Nav