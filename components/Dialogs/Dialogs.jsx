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


const Dialogs = () => {
    return (
        <div className="dialogs">
            <div className="dialogs-contacts">
                <Contacts name={ContactsInfo[0].name} message={ContactsInfo[0].message}/>
                <Contacts name={ContactsInfo[1].name} message={ContactsInfo[1].message}/>
                <Contacts name={ContactsInfo[2].name} message={ContactsInfo[2].message}/>
                <Contacts name={ContactsInfo[3].name} message={ContactsInfo[3].message}/>
                <Contacts name={ContactsInfo[4].name} message={ContactsInfo[4].message}/>
                <Contacts name={ContactsInfo[5].name} message={ContactsInfo[5].message}/>
                <Contacts name={ContactsInfo[6].name} message={ContactsInfo[6].message}/>
                <Contacts name={ContactsInfo[7].name} message={ContactsInfo[7].message}/>
            </div>
            <div className="dialogs-chat">
                <Chat />
            </div>
        </div>
    )
}

export default Dialogs;