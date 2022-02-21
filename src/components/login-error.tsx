import React from "react";

function LoginError() {
    return ( 
        <div className="login-error">
            <img src="/images/meh.png" alt="meh" className="login-error__image" />
            <div className="login-error__content">
                <p className="login-error__title">Вход не вышел</p>
                <p className="login-error__reason">id: error/auth/failed, explain: wrong_credentials</p>
            </div>
        </div>
     );
}

export default LoginError;