import React from "react";

interface Iprops {
    label?: string,
    placeholder?: string,
    readonly?: boolean
}

function AreaInput({ label, placeholder, readonly}: Iprops) {


    return ( 
        <div className="input-container area-container">
            <div className="input-container__header">
                {label ? <p className="input-container__label">{label}</p> : null}
            </div>
            <textarea readOnly={readonly} placeholder={placeholder} className="input area" />
        </div>
     );
}

export default AreaInput;