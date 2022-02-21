import React from "react";

interface Iprops {
    label?: string;
    placeholder?: string;
}

function AreaInput({ label, placeholder}: Iprops) {


    return ( 
        <div className="input-container area-container">
            <div className="input-container__header">
                {label ? <p className="input-container__label">{label}</p> : null}
            </div>
            <textarea placeholder={placeholder} className="input area" />
        </div>
     );
}

export default AreaInput;