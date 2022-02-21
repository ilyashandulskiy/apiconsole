import React from "react";
import TextInput from "../components/ui/text-input";

function Login() {
    return ( 
        <div className="login">
            <img className="logo logo_login" alt="logo" src="/images/logo_black.png" />
            <div className="block">
                <p className="block__title">API консолька</p>
                <TextInput label="Логин" required />
                <TextInput label="Сублогин" />
                <TextInput label="Пароль" type="password" required />
                <button type="button" className="btn">Войти</button>
            </div>
            <p className="github">@link-to-your-github</p>
        </div>
     );
}

export default Login;