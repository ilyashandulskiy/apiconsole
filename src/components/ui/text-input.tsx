import React from "react";

interface Iprops {
    label?: string;
    placeholder?: string;
    type?: 'text' | 'password';
    required? : boolean
}

function TextInput({ label, placeholder, type = 'text', required }: Iprops) {


    return ( 
        <div className="input-container">
            <div className="input-container__header">
                {label ? <p className="input-container__label">{label}</p> : null}
                {required ? null : <p className="input-container__optional">Опционально</p>}
            </div>
            <input type={type} placeholder={placeholder} className="input" />
        </div>
     );
}

export default TextInput;