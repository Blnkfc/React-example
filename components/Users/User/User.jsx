import React from 'react'
import './User.css'

const User = (props) => {
    return(
        <div className="user">
        <div className="user-image"></div>
            <div className="user-info">
                <div className="user-info-name">
                    <div className="user-info-name-firstName">{props.firstName} </div>
                    <div className="user-info-name-secondName"> {props.secondName}</div>
                </div>
                <div className="user-info-bottomline">
                    <div className="user-info-bottomline-gender">I am a {props.gender}, </div>
                    <div className="user-info-bottomline-age">and {props.age} years old.</div>
                    <div className="user-info-bottomline-city">I live in {props.city}.</div>
                </div>
                <button className="user-info-follow">Follow</button>
            </div>
        </div>
    )
}
export default User;