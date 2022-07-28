import React from 'react';
import './Users.css'
import UserContainer from "./User/UserContainer";

let Users = (props) => {
    let UserElement = props.users.
    map(U => <UserContainer firstName={U.firstName} secondName={U.secondName} age={U.age} city={U.city} gender={U.gender}/>)

    return(<div className="users">
            <h2 className="users-title" >Find another users here:</h2>
            <div className="users-element">{UserElement}</div>
        </div>
    )
}

export default Users;