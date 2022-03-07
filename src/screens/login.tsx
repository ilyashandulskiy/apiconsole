import React, { useState } from "react";
import Block from "components/block";
import LoginError from "components/login-error";
import Form from "components/ui/form";
import { sendsayLogin } from "api/sendsay";
import { LOGIN_FORM } from 'libs/constants'
import { useStore } from "store/store";
import { observer } from "mobx-react-lite";

interface IsubmitData {
    login: string,
    password: string,
    sublogin: string,
}

function Login() {
    const [loginError, setLoginError] = useState<null | string>(null)
    const [loading, setLoading] = useState<boolean>(false);
    const { setAuth } = useStore()

    const loginErrorPopup = loginError ? <LoginError error={loginError} /> : null;

    const onSubmit = (data : IsubmitData) => {
        setLoading(true)
        sendsayLogin(data)
            .then((token: string) => setAuth(token))
            .catch((error: string) => {
                setLoading(false)
                setLoginError(error)
            })
    }

    return ( 
        <div className="login">
            <Block>
                <p className="block__title">API консолька</p>
                {loginErrorPopup}
                <Form
                    callback={({ login, sublogin, password }) =>
                        onSubmit({ login, sublogin, password })}
                    isLoading={loading}
                    data={LOGIN_FORM}
                />
            </Block>
        </div>
     );
}

export default observer(Login);
