import React from "react";
import './MyPosts.css'

const MyPosts = (props) => {
    return(
                <div className="post">
                    <div className="post-user">
                        <div className="post-user-img"> </div>
                        <div className="post-user-name">{props.name}</div>
                    </div>
                    <div className="post-body">
                        <div className="post-body-content">
                            <div className="post-body-content-text">
                                {props.message}
                            </div>
                        </div>
                        <div className="post-body-options">
                            <button className="post-body-options-like" onClick={() => {return props.likesCount+1}}> </button>
                            <div className="post-body-options-comment"> </div>
                            <div className="post-body-options-share"> </div>
                        </div>
                        <div className="post-body-stat">
                            <span >Likes: {props.likesCount}</span>
                            <span>Comments: {props.commentsCount}</span>
                        </div>
                    </div>
                </div>
    )
}

export default MyPosts;