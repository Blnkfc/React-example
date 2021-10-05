import React from "react";

const Profile = () => {
    return(
        <div className="content">
            <img src="https://static3.depositphotos.com/1000454/256/i/600/depositphotos_2567474-stock-photo-wide-panorama-of-french-alps.jpg" alt="Head of the page" className={'content-img'}/>
            <div className="content-profile">
                <div className="content-profile-picture">
                    <img src="https://pbs.twimg.com/profile_images/1388848157426073600/XssamqWG.jpg" alt="Profile picture" s/>
                </div>
                <div className="content-profile-information">
                    <div className="content-profile-information-name">
                        <p>Pasha Z.</p>
                    </div>
                    <div className="content-profile-information-birth">
                        <p>Date of birth: 12 September</p>
                    </div>
                    <div className="content-profile-information-city">
                        <p>City: Kyiv</p>
                    </div>
                    <div className="content-profile-information-education">
                        <p>Education: NAU</p>
                    </div>
                    <div className="content-profile-information-site">
                        <p>Web-site: <a href="">https://www.instagram.com/pavuchara.jpg/</a></p>
                    </div>
                </div>
            </div>
            <div className="content-posts">
                <label htmlFor="Post">My post</label>
                <textarea name="" id="Post" cols="140" rows="7" placeholder={'New post'}> </textarea>
                <button className={'content-posts-btn'}>Send</button>
            </div>
        </div>

    )
}

export default Profile;