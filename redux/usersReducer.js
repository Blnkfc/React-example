import users from "../components/Users/Users";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
    usersArray: [
        {id: 0, firstName: 'Sandra', secondName: 'Lexis', age: 21, city: 'Madrid', gender: 'Female', followed: false},
        {id: 1, firstName: 'Andrew', secondName: 'France', age: 21, city: 'Kyiv', gender: 'Male', followed: false},
        {id: 2, firstName: 'Kevin', secondName: 'Hart', age: 21, city: 'New York',gender: 'Male', followed: true}
    ]

}

let usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state, usersArray: state.usersArray.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        }
        case UNFOLLOW: {
            return {
                ...state, usersArray: state.usersArray.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        }
        case SET_USERS:
            return ({...state, usersArray: [...state.usersArray, action.users] })
        default:
            return state;
    }
}

export const followActionCreator = (userId) => ({type: FOLLOW, userId})
export const unfollowActionCreator = (userId) => ({type: UNFOLLOW, userId})
export const setUsersActionCreator = () => ({type: SET_USERS, users})

export default usersReducer;