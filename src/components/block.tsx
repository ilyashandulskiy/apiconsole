import React from "react";

interface Iprops {
    children: (React.ReactElement | null)[]
}

function Block({ children } : Iprops) {
    return ( 
        <>
        <img className="logo logo_login" alt="logo" src="/images/logo_black.png" />
            <div className="block">
                { children }
            </div>
            <p className="github">@ilyashandulskiy</p>
        </>
     );
}

export default Block;