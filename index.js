import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let contactsInfo = [
    {name: `Sasha`, message: `I'm losing my mind!!!`},
    {name: `Bread`, message: `Is that possible for you?`},
    {name: `King`, message: `Entertaining`},
    {name: `Clown`, message: `Are u free for now?`},
    {name: `Outer world`, message: `I can't stop laughing`},
    {name: `Lesly`, message: `I literally want to die`},
    {name: `Lily`, message: `As good as always`},
    {name: `Andrew`, message: `Bye`}
]
let chatMessages = [
    {name: `Sasha`, message: `I'm losing my mind!!!`, id: 0},
    {name: `Bread`, message: `Is that possible for you?`, id: 1},
    {name: `King`, message: `Entertaining`, id: 2},
    {name: `Clown`, message: `Are u free for now?`, id: 3},
    {name: `Outer world`, message: `I can't stop laughing`, id: 4},
    {name: `Lesly`, message: `I literally want to die`, id: 5},
    {name: `Lily`, message: `As good as always`, id: 6},
    {name: `Andrew`, message: `Bye`, id: 7}
]

let postInfo = [
    {name: `Alexandr`, message: `It's my first massage`, likesCount: `215`, commentsCount: `45`},
    {name: `Megan`, message: `It's my first massage`, likesCount: `478`, commentsCount: `67`},
    {name: `Ashley`, message: `It's my first massage`, likesCount: `20`, commentsCount: `2`},
]
let profileInfo = {name: "Pasha", secondName: "Zabuha", dayOfBirth: "11", monthOfBirth: "September", city: "Kyiv", education: "NAU", webSite: "https://www.instagram.com/pavuchara.jpg/"}


ReactDOM.render(
  <React.StrictMode>
    <App posts={postInfo} contactsInfo={contactsInfo} chatMessages={chatMessages} profile={profileInfo}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
