const UPDATE_MESSAGE_TEXT = `UPDATE_MESSAGE_TEXT`
const ADD_MESSAGE = `ADD_MESSAGE`


const dialogsReducer = (state, action) => {
    switch (action.type){
        /* MESSAGE ADDER */
        case ADD_MESSAGE:
            let newMessage = {
                text: state.chatWindow.editMessageText
            }
            state.chatWindow.users[0].message.push(newMessage);
            state.chatWindow.editMessageText = ``;
            return state;
        /* MESSAGE FLUX CYCLER */
        case UPDATE_MESSAGE_TEXT:
            state.chatWindow.editMessageText = action.text;
            return state;
        default: return state
    }

}
export default dialogsReducer;