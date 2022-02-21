import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "../screens/login";
import MainApp from "../screens/main-app";
import Error404 from "../screens/errors/404";

function Navigation() {
    return ( 
        <Routes>
            <Route path="/" element={<MainApp />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Error404 />} />
        </Routes>
     );
}

export default Navigation