import React from "react";
import './Message.css'

const Message = (props) => {
    return(
        <div className="message">
            <div className="message-img"> </div>
            <div className="message-info">
                <div className="message-info-text"> <span>{props.message}</span> </div>
            </div>
        </div>
    )
}

export default Message;