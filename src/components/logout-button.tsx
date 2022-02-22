import React from "react";
import { useDispatch } from 'react-redux'
import { LOGIN } from "../store/types";

function LogoutButton() {
    const dispatch = useDispatch()

    const onLogout = () => {
        dispatch({ type: LOGIN, payload: null })
    }

    return ( 
        <button onClick={onLogout} type="button" className="logout-button">
            <p className="logout-button__text">Выйти</p>
            <img className="logout-button__image" alt="logout" src="/images/logout.png" />
        </button>
     );
}

export default LogoutButton;