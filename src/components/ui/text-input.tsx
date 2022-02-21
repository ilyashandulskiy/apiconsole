import React from "react";

interface Iprops {
    label?: string;
    placeholder?: string;
    type?: 'text' | 'password';
}

function TextInput({ label, placeholder, type = 'text' }: Iprops) {


    return ( 
        <div className="input-container">
            {label ? <p className="input__label">{label}</p> : null}
            <input type={type} placeholder={placeholder} className="input" />
        </div>
     );
}

export default TextInput;