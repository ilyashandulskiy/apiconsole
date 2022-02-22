import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import History from "../components/history";
import HistoryDropDown from "../components/history-dropdown";
import Request from "../components/request"


function MainApp() {

    return ( 
        <div className="main-app">
            <Header />
            <History />
            <Request />
            <Footer />

            <HistoryDropDown />
        </div>
     );
}

export default MainApp;