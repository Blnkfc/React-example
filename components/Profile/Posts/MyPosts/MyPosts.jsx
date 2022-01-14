import React from "react";
import './MyPosts.css'

/*let PostInfo = [
    {name: `Alex`, massage: `It's my first massage`, likesCount: `215`, commentsCount: `45`},
    {name: `Megan`, massage: `It's my first massage`, likesCount: `478`, commentsCount: `67`},
    {name: `Ashley`, massage: `It's my first massage`, likesCount: `20`, commentsCount: `2`},
]*/
/*
let PostsElements = PostInfo
    .map(Post => <MyPosts name={Post.name} message={Post.message} likesCount={Post.likesCount} commentsCount={Post.commentsCount} />)
*/

const MyPosts = (props) => {
    return(
                <div className="post">
                    <div className="post-user">
                        <div className="post-user-img"></div>
                        <div className="post-user-name">{props.name}</div>
                    </div>
                    <div className="post-content">
                        <p className="post-content-text">
                            {props.message}
                        </p>
                    </div>
                    <div className="post-options">
                        <div className="post-options-like"></div>
                        <div className="post-options-comment"></div>
                        <div className="post-options-share"></div>
                    </div>
                    <div className="post-stat">
                        <span>Likes: {props.likesCount}</span>
                        <span>Comments: {props.commentsCount}</span>
                    </div>
                </div>
    )
}

export default MyPosts;