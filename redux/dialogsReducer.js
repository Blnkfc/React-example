const UPDATE_MESSAGE_TEXT = `UPDATE_MESSAGE_TEXT`
const ADD_MESSAGE = `ADD_MESSAGE`

let initialState = {
    contacts: [
        {id: `0`, name: `Sasha`, message: `I'm losing my mind!!!`},
        {id: `1`, name: `Bread`, message: `Is that possible for you?`},
        {id: `2`, name: `King`, message: `Entertaining`},
        {id: `3`, name: `Clown`, message: `Are u free for now?`},
        {id: `4`, name: `Outer world`, message: `I can't stop laughing`},
        {id: `5`, name: `Lesly`, message: `I literally want to die`},
        {id: `6`, name: `Lily`, message: `As good as always`},
        {id: `7`, name: `Andrew`, message: `Bye`}
    ],
    chatWindow: {
        users: [
            {
                user: `Sasha`,
                id: 1,
                message: [
                    {text: `I'm losing my mind!!!`},
                    {text: `I'm losing my mind!!!`},
                    {text: `I'm losing my mind!!!`},
                ]
            }
        ],
        editMessageText: ``
    }
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        /* MESSAGE ADDER */
        case ADD_MESSAGE: {
            let stateCopy = {...state};
            stateCopy.chatWindow = {...state.chatWindow};
            stateCopy.chatWindow.users = {...state.chatWindow.users};
            stateCopy.chatWindow.users.message = {...state.chatWindow.users.message};
            let newMessage = {
                text: state.chatWindow.editMessageText
            }
            stateCopy.chatWindow.users[0].message.push(newMessage);
            stateCopy.chatWindow.editMessageText = ``;
            return stateCopy;
        }
        /* MESSAGE FLUX CYCLER */
        case UPDATE_MESSAGE_TEXT: {
            let stateCopy = {...state}
            stateCopy.chatWindow = {...state.chatWindow};
            stateCopy.chatWindow.editMessageText = action.text;
            return stateCopy;
        }
        default:
            return state
    }

}
export default dialogsReducer;