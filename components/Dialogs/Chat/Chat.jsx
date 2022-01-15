import React from "react";
import './Chat.css'
import Message from "./Message/Message";
import {BrowserRouter as Router, Route} from "react-router-dom";
import ChatMessages from '../Dialogs'

const Chat = (props) => {
    return(
        <Router>
            <div className="chat">
                <Route path={"/dialogs/"+ChatMessages.name}> <Message message={ChatMessages.message} /> </Route>
            </div>
        </Router>
    )
}


export default Chat;