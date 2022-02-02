import React from "react";
import './Posts.css'
import MyPosts from "./MyPosts/MyPosts";

const Posts = (props) => {
    let PostElements = props.posts
        .map(Post =>  <MyPosts name={Post.name} message={Post.text} likesCount={Post.likesCount} commentsCount={Post.commentsCount}/>)
    let newPost = React.createRef();
    let addPost = () => {
        let text = newPost.current.value;
        alert(text);
    }
    return(
        <div className={`posts`}>
            <div className="content-posts">
                <label htmlFor="Post">My post</label>
                <textarea name="" id="Post" cols="140" rows="7" placeholder={'New post'} ref={newPost}> </textarea>
                <button className={'content-posts-btn'} onClick={addPost}>Send</button>
            </div>
            {PostElements}
        </div>
    )
}

export default Posts;