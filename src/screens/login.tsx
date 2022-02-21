import React from "react";
import Block from "../components/block";
import LoginError from "../components/login-error";
import TextInput from "../components/ui/text-input";

function Login() {
    return ( 
        <div className="login">
            <Block>
                <p className="block__title">API консолька</p>
                <LoginError />
                <TextInput label="Логин" required />
                <TextInput label="Сублогин" />
                <TextInput label="Пароль" type="password" required />
                <button type="button" className="btn">Войти</button>
            </Block>
        </div>
     );
}

export default Login;