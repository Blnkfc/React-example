import React from "react";
import './Dialogs.css'
import Contacts from "./Contacts/Contacts";
import Chat from "./Chat/Chat";
import NavLink from "react-router-dom/es/NavLink";

const Dialogs = (props) => {
    /* PROPS FOR DIALOGS */
    let DialogsContacts = props.dialogs.contacts
        .map(Dialog => <NavLink to={`/dialogs/`+Dialog.id} activeClassName={`contact-active`} > <Contacts name={Dialog.name} message={Dialog.message} id={Dialog.id}/> </NavLink> )

    /* PROPS FOR CHAT */
    /*let ChatElements = props.dialogs.chatWindow
        .map(C => <Chat chat={C.users}/> )*/

    return (
        <div className="dialogs">
            <div className="dialogs-contacts">
                {DialogsContacts}
            </div>
            <div className="dialogs-chat">

                <Chat dispatch={props.dispatch} chat={props.dialogs.chatWindow}  />

                {/*{ChatElements}*/}
            </div>
        </div>
    )
}

export default Dialogs;