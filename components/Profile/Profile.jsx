import React from "react";
import './Profile.css'
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div className="content">
            <ProfileInfo info={props.profile.profileInfo}/>
            <Posts posts={props.profile.posts} />
        </div>

    )
}

export default Profile;