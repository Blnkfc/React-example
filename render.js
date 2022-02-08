import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost} from "./redux/state";



export let rerenderEntireTree = (state) => {
     return ReactDOM.render(
        <React.StrictMode>
            <App state={state} createPost={addPost}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
/*
export default rerenderEntireTree();*/
