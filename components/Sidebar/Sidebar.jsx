import React from "react";
import './Sidebar.css'

const Sidebar = () => {
    return(
        <nav className="sidebar">
            <div className="sidebar-link"><a href="" >
                Profile
            </a></div>
            <div className="sidebar-link"><a href="" >
                Messages
            </a></div>
            <div className="sidebar-link"><a href="" >
                News
            </a></div>
            <div className="sidebar-link"><a href="" >
                Music
            </a></div>
            <div className="sidebar-link"><a href="" id={'settings'}>
                Settings
            </a></div>
        </nav>
    )
}
export default Sidebar;