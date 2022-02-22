import React from "react";

function LogoutButton() {
    return ( 
        <button type="button" className="logout-button">
            <p className="logout-button__text">Выйти</p>
            <img className="logout-button__image" alt="logout" src="/images/logout.png" />
        </button>
     );
}

export default LogoutButton;