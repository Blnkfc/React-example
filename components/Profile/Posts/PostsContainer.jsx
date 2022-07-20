import React from "react";
import './Posts.css'
import {createPostActionCreator, editPostActionCreator} from "../../../redux/store";

import Posts from "./Posts";



const PostsContainer = (props) => {
    let addPost = () => {
        props.dispatch(createPostActionCreator());
    }

    let editPost = (text) =>{
        props.dispatch(editPostActionCreator(text));
    }
    return (<Posts editPost={editPost} createPost={addPost} posts={props.posts}/>);
}
export default PostsContainer;