import React from "react";
import './Posts.css'
import MyPosts from "./MyPosts/MyPosts";

const Posts = (props) => {
    let PostElements = props.posts
        .map(Post =>  <MyPosts name={Post.name} message={Post.message} likesCount={Post.likesCount} commentsCount={Post.commentsCount}/>)
    return(
        <div className={`posts`}>
            <div className="content-posts">
                <label htmlFor="Post">My post</label>
                <textarea name="" id="Post" cols="140" rows="7" placeholder={'New post'}> </textarea>
                <button className={'content-posts-btn'}>Send</button>
            </div>
            {PostElements}
        </div>
    )
}

export default Posts;