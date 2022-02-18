    import React from 'react';
    import ReactDOM from 'react-dom';
    import App from './App';
    import reportWebVitals from './reportWebVitals';
    import {store} from "./redux/state";

    let rerenderEntireTree = (state) => {
        return ReactDOM.render(
            <React.StrictMode>
                <App state = {state} createPost={store.addPost.bind(store)} updatePostText={store.updatePostText.bind(store)} />
            </React.StrictMode>,
            document.getElementById('root')
        );
    }

    rerenderEntireTree(store.GetState());

    store.subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
