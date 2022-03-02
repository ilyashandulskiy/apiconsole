import { observer } from "mobx-react-lite";
import React from "react";
import { useStore } from "store/store";

function LogoutButton() {
    const { setAuth } = useStore()
    
    const onLogout = () => {
        setAuth(null)
    }

    return ( 
        <button onClick={onLogout} type="button" className="logout-button">
            <p className="logout-button__text">Выйти</p>
            <img className="logout-button__image" alt="logout" src="/images/logout.png" />
        </button>
     );
}

export default observer(LogoutButton);