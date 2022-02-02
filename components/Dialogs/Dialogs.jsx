import React from "react";
import './Dialogs.css'
import Contacts from "./Contacts/Contacts";
import Chat from "./Chat/Chat";

const Dialogs = (props) => {
    /* PROPS FOR DIALOGS */
    let DialogsElements = props.dialogs.contacts
        .map(Dialog => <Contacts name={Dialog.name} message={Dialog.message} id={Dialog.id}/> )

    /* PROPS FOR CHAT */
    /*let ChatElements = props.dialogs.chat
        .map(C => <Chat name={C.name} message={C.message} id={C.id}/>)*/

    return (
        <div className="dialogs">
            <div className="dialogs-contacts">
                {DialogsElements}
            </div>
            <div className="dialogs-chat">
                <Chat  chat={props.dialogs.chat} />
                {/*{ChatElements}*/}
            </div>
        </div>
    )
}

export default Dialogs;