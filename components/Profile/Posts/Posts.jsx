import React from "react";
import './Posts.css'
import MyPosts from "./MyPosts/MyPosts";

const Posts = () => {
    return(
        <div className={`posts`}>
            <MyPosts commentsCount={`45`} likesCount={`215`} massage={`It's my first massage`}/>
            <MyPosts commentsCount={`67`} likesCount={`478`} massage={'This post is generated randomly'}/>
            <MyPosts commentsCount={`1`} likesCount={`19`} massage={`I'm a member of a white house`}/>
        </div>
    )
}

export default Posts;