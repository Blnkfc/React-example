import React from "react";
import './Chat.css'
import Message from "./Message/Message";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavLink from "react-router-dom/es/NavLink";


const Chat = (props) => {
    let message = props.chat
        .map (M => <Message message={M.message} id={M.id}/>)
    return(<div className="chat">
        <Router>
                <Switch>
                    <div className="chat-area">
                        <Route path={"/dialogs/"+message.id}>{message.message}</Route>
                    </div>
                </Switch>
        </Router>
            <div className="chat-functionBar">
                <textarea className={`chat-functionBar-textBar`} placeholder={`Enter your message here`} name="" id="chatTextBar" cols="100%" rows="1"></textarea>
                <button className={`chat-functionBar-send`}>

                </button>
            </div>
        </div>

    )
}


export default Chat;