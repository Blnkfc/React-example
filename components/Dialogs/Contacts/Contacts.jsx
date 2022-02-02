import React from "react";
import './Contact.css'
import {NavLink} from "react-router-dom";
import ChatMessages from '../Dialogs'

const Contacts = (props) =>{
    return(
        <div className="contact">
            <NavLink to={`/dialogs/`+props.id} activeClassName={`contact-active`}>
                <div className="contact-image"> </div>
                <div className="contact-info">
                    <div className="contact-info-name"> {props.name}  </div>
                    <div className="contact-info-message"> {props.message} </div>
                </div>
            </NavLink>
        </div>
    )
}

 export default Contacts;