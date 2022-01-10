import React from "react";
import './Posts.css'
import MyPosts from "./MyPosts/MyPosts";

const Posts = () => {
    return(
        <div className={`posts`}>
            <div className="content-posts">
                <label htmlFor="Post">My post</label>
                <textarea name="" id="Post" cols="140" rows="7" placeholder={'New post'}> </textarea>
                <button className={'content-posts-btn'}>Send</button>
            </div>
            <MyPosts id={`0`}/>
            <MyPosts id={`1`}/>
            <MyPosts id={`2`}/>
        </div>
    )
}

export default Posts;