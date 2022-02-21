import React from "react";

interface Iprops {
    login: string;
    sublogin: string;
}

function Profile({login, sublogin} : Iprops) {
    return ( 
        <div className="profile">
            <p className="profile__login">{login}</p>
            <p className="profile__separator">:</p>
            <p className="profile__sublogin">{sublogin}</p>
        </div>
     );
}

export default Profile;