import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "screens/login";
import MainApp from "screens/main-app";
import Error404 from "screens/errors/404";
import { useStore } from "store/store";
import { observer } from "mobx-react-lite";

function Navigation() {

    const { auth } = useStore()

    if (!auth) return ( 
        <Routes>
            <Route path="*" element={<Login />} />
        </Routes>
     );

    return ( 
        <Routes>
            <Route path="/" element={<MainApp />} />
            <Route path="*" element={<Error404 />} />
        </Routes>
     );
}

export default observer(Navigation)