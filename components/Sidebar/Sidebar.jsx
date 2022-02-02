import React from "react";
import './Sidebar.css'
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return(
        <nav className="sidebar">
            <div className="sidebar-link"><NavLink to="/profile" activeClassName={"sidebar-link-active"}>
                Profile
            </NavLink></div>
            <div className="sidebar-link"><NavLink to="/dialogs" activeClassName={"sidebar-link-active"} >
                Messages
            </NavLink></div>
            <div className="sidebar-link"><NavLink to="/news" activeClassName={"sidebar-link-active"} >
                News
            </NavLink></div>
            <div className="sidebar-link"><a href="" >
                Music
            </a></div>
            <div className="sidebar-link"><a href=""  id={'settings'}>
                Settings
            </a></div>
        </nav>
    )
}
export default Sidebar;