import React from "react";
import './Chat.css'
import Message from "./Message/Message";
import {BrowserRouter as Router, Route} from "react-router-dom";


const Chat = (props) => {
    return(
        <Router>
            <div className="chat">
                <Route path={"/dialogs/"+props.name}> <Message message={props.message} /> </Route>
            </div>
        </Router>
    )
}


export default Chat;