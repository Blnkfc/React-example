import React from 'react';
import {createFollowActionCreator, createUnfollowActionCreator} from "../../../redux/store";
import User from "./User";

let UserContainer = (props) => {
    let follow = () => {
        props.dispatch(createFollowActionCreator())
    }
    let unfollow = () => {
        props.dispatch(createUnfollowActionCreator())
    }
    return <User follow={follow} unfollow={unfollow} firstName={props.firstName} secondName={props.secondName} age={props.age} city={props.city} gender={props.gender} />
}

export default UserContainer;