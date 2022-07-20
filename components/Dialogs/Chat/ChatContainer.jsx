import React from "react";
import './Chat.css'

import {createMessageActionCreator, editMessageActionCreator} from "../../../redux/store";
import Chat from "./Chat";


const ChatContainer = (props) => {
/*    let message = props.chat.users[0].message
        .map (M => <Message message={M.text} />)

    let newMessage = React.createRef()*/

    let createMessage = () =>{
        /*let text = newMessage.current.value;*/
        props.dispatch(createMessageActionCreator())
    }
    let editMessage = (text) =>{
        props.dispatch(editMessageActionCreator(text))
    }


    return(<Chat editMessage={editMessage} createMessage={createMessage} chat={props.chat}/>
    )
}


export default ChatContainer;