import React from "react";
import './Contact.css'

const Contacts = (props) => {
    return(
        <div className="contact">
            <div className="contact-image"> </div>
            <div className="contact-info">
                <div className="contact-info-name"> {props.name} </div>
                <div className="contact-info-message"> {props.message} </div>
            </div>
        </div>
    )
}

export default Contacts;