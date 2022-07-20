import {applyMiddleware} from "redux";
import thunk from 'redux-thunk'
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import {configureStore} from "@reduxjs/toolkit";

/*let reducers = combineReducers({
    profileData: profileReducer,
    dialogs: dialogsReducer
})*/

let store = configureStore({
    reducer: {
        profileData: profileReducer,
        dialogs: dialogsReducer
    }
}, applyMiddleware(thunk))

export default store;