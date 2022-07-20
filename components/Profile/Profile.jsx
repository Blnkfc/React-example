import React from "react";
import './Profile.css'
import PostsContainer from "./Posts/PostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div className="content">
            <ProfileInfo inf={props.profile.profileInfo}/>
            <PostsContainer posts={props.profile.postsArray} dispatch={props.dispatch}/>
        </div>

    )
}

export default Profile;