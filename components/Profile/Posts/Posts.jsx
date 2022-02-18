import React from "react";
import './Posts.css'
import MyPosts from "./MyPosts/MyPosts";


const Posts = (props) => {

    let PostElements = props.posts
        .map (Post =>  <MyPosts name={Post.name} message={Post.text} likesCount={Post.likesCount} commentsCount={Post.commentsCount} id={Post.id}/>)
    let newPost = React.createRef();

    let createPost = () => {
        let text = newPost.current.value;
        props.createPost(text);
    }

    let editPost = () =>{
        let text = newPost.current.value;
        props.updatePostText(text);
    }


    return(
        <div className={`posts`}>
            <div className="content-posts">
                <textarea name="" id="Post" cols="140" rows="7" onChange={editPost} value={props.editPostText} ref={newPost}  />
                <button className={'content-posts-btn'} onClick={createPost}>Send</button>
            </div>
            {PostElements}
        </div>
    )
}

export default Posts;