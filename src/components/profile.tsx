import { observer } from "mobx-react-lite";
import React from "react";
import { useStore } from "store/store";

function Profile() {
    
    const { userdata } = useStore()

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

export default observer(Profile);