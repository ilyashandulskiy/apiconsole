import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import Block from "../components/block";
import LoginError from "../components/login-error";
import Form from "../components/ui/form";

function Login() {
    const [loginError, setLoginError] = useState<null | string>(null)
    const [loading, setLoading] = useState<boolean>(false);
    const dispatch = useDispatch()

    const onSubmit = (data : any) => {
        console.log(data)
        setLoading(true)
        setLoginError(null)

        setTimeout(() => {
            setLoading(false)
            setLoginError('dude error')
            dispatch({type: 'LOGIN', payload: 'ok'})
        },2000)
    }

    return ( 
        <div className="login">
            <Block>
                <p className="block__title">API консолька</p>
                {loginError ? <LoginError error={loginError} /> : null}
                <Form
                    callback={onSubmit}
                    isLoading = {loading}
                    data={[
                        { type: 'input', id: "login", label: "Логин", required: true},
                        { type: 'input', id: "sublogin", label: "Сублогин", required: false },
                        { type: 'password', id: "password", label: "Пароль", required: true },
                        { type: 'submit', id: "confirm", label: "Войти", required: false }
                    ]}
                />
            </Block>
        </div>
     );
}

export default Login;
