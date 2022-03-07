import React, { useEffect } from "react";
import { sendsayUserData } from "api/sendsay";
import Footer from "components/footer";
import Header from "components/header";
import History from "components/history";
import Request from "components/request"
import { useStore } from "store/store";
import { observer } from "mobx-react-lite";


function MainApp() {
    const { auth, setUserdata } = useStore()
    const store = useStore()

    useEffect(() => {
        sendsayUserData(auth, store)
            .then((userdata) => setUserdata(userdata))
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

export default observer(MainApp);

