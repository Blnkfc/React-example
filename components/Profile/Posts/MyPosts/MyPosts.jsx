import React from "react";
import './MyPosts.css'

const MyPosts = (props) => {
    return(
                <div className="post">
                    <div className="post-user">
                        <div className="post-user-img"></div>
                        <div className="post-user-name">Random Name</div>
                    </div>
                    <div className="post-content">
                        <p className="post-content-text">
                            {props.massage}
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