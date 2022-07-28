const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const ADD_POST = 'ADD-POST';

let initialState = {
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
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        /* POST ADDER */
        case ADD_POST :
        {
            let newPost = {
                id: 3,
                name: "Somebody",
                text: state.editPostText,
                likesCount: 0,
                commentsCount: 0
            }
            let stateCopy = {...state};
            stateCopy.postsArray = [...state.postsArray];
            stateCopy.postsArray.push(newPost);
            stateCopy.editPostText = '';
            debugger;
            return stateCopy;
        }
        /* POSTS FLUX CYCLER */
        case UPDATE_POST_TEXT:
        {
            let stateCopy = {...state}
            /*return {...state, editPostText: action.text}*/

            stateCopy.editPostText = action.text;
            return stateCopy;
        }
        default:
            return state;
    }
}
export default profileReducer;