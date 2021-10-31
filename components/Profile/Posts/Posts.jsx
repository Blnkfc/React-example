import React from "react";
import './Posts.css'
import MyPosts from "./MyPosts/MyPosts";

const Posts = () => {
    return(
        <div className={`posts`}>
            <MyPosts />
            <MyPosts />
            <MyPosts />
        </div>
    )
}

export default Posts;