import { observer } from "mobx-react-lite";
import React from "react";

interface Iprops {
    error: string
}

function LoginError({error} : Iprops) {
    return ( 
        <div className="login-error">
            <img src="/images/meh.png" alt="meh" className="login-error__image" />
            <div className="login-error__content">
                <p className="login-error__title">Вход не вышел</p>
                <p className="login-error__reason">{error}</p>
            </div>
        </div>
     );
}

export default observer(LoginError);