import React from "react";
import './Chat.css'
import Message from "./Message/Message";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavLink from "react-router-dom/es/NavLink";
import {createPostActionCreator, editMessageActionCreator} from "../../../redux/state";


const Chat = (props) => {
    let message = props.chat.users[0].message
        .map (M => <Message message={M.text} />)

    let newMessage = React.createRef()

    let createMessage = () =>{
        let text = newMessage.current.value;
        props.dispatch(createPostActionCreator())
    }
    let editMessage = () =>{
        let text = newMessage.current.value;
        props.dispatch(editMessageActionCreator(text))
    }


    return(<div className="chat">
            <div className="chat-messages">
                {message}
            </div>
            <div className="chat-functionBar">
                <textarea className={`chat-functionBar-textBar`} ref={newMessage} onChange={editMessage} value={props.chat.editMessageText} placeholder={`Enter your message here`} name="" id="chatTextBar" cols="100%" rows="1"> </textarea>
                <button onClick={createMessage} className={`chat-functionBar-send`}>

                </button>
            </div>
        </div>

    )
}


export default Chat;