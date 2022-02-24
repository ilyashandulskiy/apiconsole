import React from "react";

interface Iprops {
    loading?: boolean,
    onClick: () => void,
    text?: string
}

function Button({ loading, onClick, text }: Iprops) {
    
    const spinner = <img alt="spinner" src="/images/loader.png" className="spinner_button" />

    return ( 
        <button
            type="button"
            className="btn"
            onClick={loading ? () => null : onClick}
        >
            {loading ? spinner : text}
        </button>
     );
}

export default Button;