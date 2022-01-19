import React from "react";
import './Profile.css'
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div className="content">
            <ProfileInfo profile={props.profile} />
            <Posts posts={props.posts} />
        </div>

    )
}

export default Profile;