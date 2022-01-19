import React from "react";
import './Dialogs.css'
import Contacts from "./Contacts/Contacts";
import Chat from "./Chat/Chat";

const Dialogs = (props) => {
    let DialogsElements = props.contactsInfo
        .map(Dialog => <Contacts name={Dialog.name} message={Dialog.message}/> )

    return (
        <div className="dialogs">
            <div className="dialogs-contacts">
                {DialogsElements}
            </div>
            <div className="dialogs-chat">
                <Chat name={props.chatMessages.name} message={props.chatMessages.message}  />
            </div>
        </div>
    )
}

export default Dialogs;