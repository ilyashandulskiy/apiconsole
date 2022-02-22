import React from "react";
import FullscreenButton from "./fullscreen-button";
import LogoutButton from "./logout-button";
import Profile from "./profile";

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

export default Header;