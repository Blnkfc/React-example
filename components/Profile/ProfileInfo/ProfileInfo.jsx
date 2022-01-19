import React from "react";
import "./ProfileInfo.css"

const ProfileInfo = (props) =>{

    return<div className="content">
        <div className="content-cap">
            <img
                src="https://static3.depositphotos.com/1000454/256/i/600/depositphotos_2567474-stock-photo-wide-panorama-of-french-alps.jpg"
                alt="Head of the page" className={'content-cap-img'}/>
        </div>
        <div className="content-profile">
            <div className="content-profile-picture">
                {/*<img src="https://pbs.twimg.com/profile_images/1388848157426073600/XssamqWG.jpg" alt="Profile picture" s/>*/}
            </div>
            <div className="content-profile-information">
                <div className="content-profile-information-name">
                    <p>{props.profile.name+" "+props.profile.secondName}</p>
                </div>
                <div className="content-profile-information-birth">
                    <p>{`Date of birth: `+props.profile.dayOfBirth+" "+props.profile.monthOfBirth}</p>
                </div>
                <div className="content-profile-information-city">
                    <p>{`City: `+props.profile.city}</p>
                </div>
                <div className="content-profile-information-education">
                    <p>{`Education: `+props.profile.education}</p>
                </div>
                <div className="content-profile-information-site">
                    <p>Web-site: <a href="">{props.profile.webSite}</a></p>
                </div>
            </div>
        </div>
    </div>
    }

    export default ProfileInfo;