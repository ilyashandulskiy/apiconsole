import React from "react";
import { useNavigate } from "react-router-dom";
import Block from "../components/block";
import LoginError from "../components/login-error";
import TextInput from "../components/ui/text-input";

function Login() {
    const navigate = useNavigate()
    return ( 
        <div className="login">
            <Block>
                <p className="block__title">API консолька</p>
                <LoginError />
                <TextInput label="Логин" required />
                <TextInput label="Сублогин" />
                <TextInput label="Пароль" type="password" required />
                <button onClick={() => navigate('/')}  type="button" className="btn">Войти</button>
            </Block>
        </div>
     );
}

export default Login;