import React from "react";
import './Dialogs.css'
import Contacts from "./Contacts/Contacts";
import Chat from "./Chat/Chat";


const Dialogs = () => {
    return(
        <div className="dialogs">
            <div className="dialogs-contacts">
                <Contacts name={`Sasha`} message={`I'm loosing my mind!!!`} />
                <Contacts name={`Bread`} message={`Is that possible for you?`} />
                <Contacts name={`King`} message={`Entertaining`} />
                <Contacts name={`Clown`} message={`Are u free for now?`} />
                <Contacts name={`Outer world`} message={`I can't stop laughing`} />
                <Contacts name={`Lesly`} message={`I literally want to die`} />
                <Contacts name={`Lily`} message={`As good as always`} />
                <Contacts name={`Andrew`} message={`Bye`} />
            </div>
            <div className="dialogs-chat">
                <Chat />
            </div>
        </div>
    )
}

export default Dialogs;