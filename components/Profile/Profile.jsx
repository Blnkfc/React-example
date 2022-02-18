import React from "react";
import './Profile.css'
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div className="content">
            <ProfileInfo inf={props.profile.profileInfo}/>
            <Posts posts={props.profile.postsArray} createPost={props.createPost} updatePostText={props.updatePostText}/>
        </div>

    )
}

export default Profile;