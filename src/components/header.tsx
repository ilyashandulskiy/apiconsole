import React from "react";
import FullscreenButton from "components/fullscreen-button";
import LogoutButton from "components/logout-button";
import Profile from "components/profile";
import { observer } from "mobx-react-lite";

function Header() {
    return ( 
        <div className="header">
            <div className="header__left-side">
                <img className="logo" alt="logo" src="/images/logo_black.png" />
                <p className="header__title">API-консолька</p>
            </div>
            <div className="header__right-side">
                <Profile />
                <LogoutButton />
                <FullscreenButton />
            </div>
        </div>
     );
}

export default observer(Header);