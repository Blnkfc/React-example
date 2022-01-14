import React from "react";
import './Posts.css'
import MyPosts from "./MyPosts/MyPosts";

let PostInfo = [
    {name: `Alex`, message: `It's my first massage`, likesCount: `215`, commentsCount: `45`},
    {name: `Megan`, message: `It's my first massage`, likesCount: `478`, commentsCount: `67`},
    {name: `Ashley`, message: `It's my first massage`, likesCount: `20`, commentsCount: `2`},
]

    let PostElements = PostInfo
    .map(Post =>  <MyPosts name={Post.name} message={Post.message} likesCount={Post.likesCount} commentsCount={Post.commentsCount}/>)

const Posts = () => {
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