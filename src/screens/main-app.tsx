import React, { useEffect } from "react";
import { useDispatch } from 'react-redux'
import { sendsayUserData } from "api/sendsay";
import { USERDATA } from "store/types";
import Footer from "components/footer";
import Header from "components/header";
import History from "components/history";
import Request from "components/request"
import useAppSelector from "hooks/useAppSelector";


function MainApp() {
    const dispatch = useDispatch()
    const token = useAppSelector(state => state.LOGIN)

    useEffect(() => {
        sendsayUserData(token, dispatch)
            .then((userdata) => dispatch({type: USERDATA, payload: userdata}))
    }, [])
    

    return ( 
        <div className="main-app">
            <Header />
            <History />
            <Request />
            <Footer />
        </div>
     );
}

export default MainApp;

