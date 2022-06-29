const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const ADD_POST = 'ADD-POST';

const profileReducer = (state, action) => {
    switch (action.type) {
        /* POST ADDER */
        case ADD_POST:
            let newPost = {
                id: 3,
                name: "Somebody",
                text: state.editPostText,
                likesCount: 0,
                commentsCount: 0
            }
            state.editPostText = '';
            state.postsArray.push(newPost);
            return state;
        /* POSTS FLUX CYCLER */
        case UPDATE_POST_TEXT:
            state.editPostText = action.text;
            return state;
        default:
            return state;
    }
}
export default profileReducer;