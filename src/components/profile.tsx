import React from "react";
import useAppSelector from 'hooks/useAppSelector'

function Profile() {
    
    const userdata = useAppSelector(state => state.USERDATA)

    if (userdata?.sublogin && userdata?.account) {
        if (userdata.account === userdata.sublogin) return (
            <div className="profile">
                <p className="profile__login">{userdata?.account}</p>
            </div>
        )
    }

    return ( 
        <div className="profile">
            <p className="profile__login">{userdata?.account}</p>
            <p className="profile__separator">:</p>
            <p className="profile__sublogin">{userdata?.sublogin}</p>
        </div>
     );
}

export default Profile;