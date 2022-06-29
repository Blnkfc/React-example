import React from "react";
import './Contact.css'
import {NavLink} from "react-router-dom";

const Contacts = (props) =>{
    return(
        <NavLink to={"/dialogs/"+props.name} activeClassName="active" className={"navigation"}>
        <div className="contact">
                <div className="contact-image"> </div>
                <div className="contact-info">
                    <div className="contact-info-name"> {props.name}  </div>
                    <div className="contact-info-message"> {props.message} </div>
                </div>
        </div>
        </NavLink>
    )
}

 export default Contacts;