import React from "react";
import './MyPosts.css'

const MyPosts = () => {
    return(
                <div className="post">
                    <div className="post-user">
                        <div className="post-user-img"></div>
                        <div className="post-user-name">Random Name</div>
                    </div>
                    <div className="post-content">
                        <p className="post-content-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi enim esse iste itaque suscipit tempore.
                        </p>
                    </div>
                    <div className="post-options">
                        <button className="post-options-like">Like</button>
                        <button className="post-options-comment">Comm</button>
                        <button className="post-options-share">Share</button>
                    </div>
                </div>
    )
}

export default MyPosts;