import React from "react";
import './Dialogs.css'
import Contacts from "./Contacts/Contacts";
import Chat from "./Chat/Chat";

let ContactsInfo = [
    {name: `Sasha`, message: `I'm losing my mind!!!`},
    {name: `Bread`, message: `Is that possible for you?`},
    {name: `King`, message: `Entertaining`},
    {name: `Clown`, message: `Are u free for now?`},
    {name: `Outer world`, message: `I can't stop laughing`},
    {name: `Lesly`, message: `I literally want to die`},
    {name: `Lily`, message: `As good as always`},
    {name: `Andrew`, message: `Bye`}
]
let ChatMessages=[
    {name: `Sasha`, message: `I'm losing my mind!!!`, id: 0},
    {name: `Bread`, message: `Is that possible for you?`, id: 1},
    {name: `King`, message: `Entertaining`, id: 2},
    {name: `Clown`, message: `Are u free for now?`, id: 3},
    {name: `Outer world`, message: `I can't stop laughing`, id: 4},
    {name: `Lesly`, message: `I literally want to die`, id: 5},
    {name: `Lily`, message: `As good as always`, id: 6},
    {name: `Andrew`, message: `Bye`, id: 7}
]
let DialogsElements = ContactsInfo
    .map(Dialog => <Contacts name={Dialog.name} message={Dialog.message}/> )

const Dialogs = () => {
    return (
        <div className="dialogs">
            <div className="dialogs-contacts">
                {DialogsElements}
            </div>
            <div className="dialogs-chat">
                <Chat />
            </div>
        </div>
    )
}

export default Dialogs;