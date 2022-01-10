import React from "react";
import './Profile.css'
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <div className="content">
            <ProfileInfo name={"Pasha"} secondName={"Zabuha"} dayOfBirth={"12"} monthOfBirth={"September"} city={"Kyiv0"} education={"NAU"} webSite={"https://www.instagram.com/pavuchara.jpg/"}/>
            <Posts/>
        </div>

    )
}

export default Profile;