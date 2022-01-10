import React from "react";
import './Contact.css'
import {NavLink} from "react-router-dom";

const Contacts = (props) =>{
    return(
        <div className="contact">
            <NavLink to={`/dialogs/`+props.name} activeClassName={`contact-active`}>
                <div className="contact-image"> </div>
                <div className="contact-info">
                    <div className="contact-info-name"> {props.name} </div>
                    <div className="contact-info-message"> {props.message} </div>
                </div>
            </NavLink>
        </div>
    )
}
 export default Contacts;