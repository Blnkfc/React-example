import React from "react";
import './MyPosts.css'

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
                        <button className="post-options-like" onClick={() => {return props.likesCount+1}}> </button>
                        <div className="post-options-comment"> </div>
                        <div className="post-options-share"> </div>
                    </div>
                    <div className="post-stat">
                        <span >Likes: {props.likesCount}</span>
                        <span>Comments: {props.commentsCount}</span>
                    </div>
                </div>
    )
}

export default MyPosts;