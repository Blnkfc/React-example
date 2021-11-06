import React from "react";
import './Chat.css'
import Contact from "../Contacts/Contacts";
import Message from "./Message/Message";

const Chat = (props) => {
    return(
        <div className="chat">
            <Message name={`Sasha`} text={`I'm loosing my mind!!!`} />
        </div>
    )
}

export default Chat;