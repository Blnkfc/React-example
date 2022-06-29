import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const ADD_POST = 'ADD-POST';
const UPDATE_MESSAGE_TEXT = `UPDATE_MESSAGE_TEXT`
const ADD_MESSAGE = `ADD_MESSAGE`

export let store = {
    _state: {

        /* PROFILE */
        profileData: {
            postsArray: [
                {id: 0, name: `Alexandr`, text: `It's my first massage!`, likesCount: 215, commentsCount: 45},
                {id: 1, name: `Megan`, text: `Random stuff to take some space and see the look of the post when it wraps on the next line and understand what to do with that, this should be enough to take the whole space on the first line, i could just increase font size but this solution is for the weak people`, likesCount: 525, commentsCount: 67},
                {id: 2, name: `Ashley`, text: `It's my first massage`, likesCount: 20, commentsCount: 2},
            ],
            profileInfo: {
                firstName: "Pasha",
                secondName: "Zabuha",
                dayOfBirth: `12`,
                monthOfBirth: "September",
                city: "Kyiv",
                education: "NAU",
                webSite: "https://www.instagram.com/pavuchara.jpg/"},
            editPostText: " "
        },
        /* DIALOGS */
        dialogs: {
            contacts: [
                {id: `0`, name: `Sasha`, message: `I'm losing my mind!!!`},
                {id: `1`, name: `Bread`, message: `Is that possible for you?`},
                {id: `2`, name: `King`, message: `Entertaining`},
                {id: `3`,name: `Clown`, message: `Are u free for now?`},
                {id: `4`, name: `Outer world`, message: `I can't stop laughing`},
                {id: `5`, name: `Lesly`, message: `I literally want to die`},
                {id: `6`, name: `Lily`, message: `As good as always`},
                {id: `7`, name: `Andrew`, message: `Bye`}
            ],
            chatWindow: {
                users: [
                    {user: `Sasha`,
                    id: 1,
                    message: [
                        {text: `I'm losing my mind!!!`},
                        {text: `I'm losing my mind!!!`},
                        {text: `I'm losing my mind!!!`},
                    ]}
                ],
                editMessageText: ``
            }

        }
    },

/*{name: `Sasha`, message: `I'm losing my mind!!!`, id: `0`},
{name: `Bread`, message: `Is that possible for you?`, id: `1`},
{name: `King`, message: `Entertaining`, id: `2`},
{name: `Clown`, message: `Are u free for now?`, id: `3`},
{name: `Outer world`, message: `I can't stop laughing`, id: `4`},
{name: `Lesly`, message: `I literally want to die`, id: `5`},
{name: `Lily`, message: `As good as always`, id: `6`},
{name: `Andrew`, message: `Bye`, id: `7`}*/

    GetState() {
      return this._state;
    },

    /* SUBSCRIBER */
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    _callSubscriber() {
        alert('Oops, an error broke everything');
    },

    dispatch(action){
        this._state.profileData = profileReducer(this._state.profileData, action);
        this._state.dialogs = dialogsReducer(this._state.dialogs, action);
        this._callSubscriber(this._state);
    },

}

    /* ACTION CREATORS */
    export const editPostActionCreator = (text) => {
        return {type: UPDATE_POST_TEXT, text: text}
    }

    export const createPostActionCreator = () => {
        return {type: ADD_POST}
    }

    export const editMessageActionCreator = (text) => {
        return {type: UPDATE_MESSAGE_TEXT, text: text}
    }

    export const createMessageActionCreator = () => {
        return {type: ADD_MESSAGE}
    }