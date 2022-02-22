import React from "react";

interface Iprops {
    title: string,
    dangerous: boolean
}

function DropdownItem({ title, dangerous }: Iprops) {

    let buttonClass = "dropdown-item";
    if(dangerous) buttonClass += " dropdown-item_dangerous"

    return ( 
        <button type="button" className={buttonClass}>
            <p className="dropdown-item__text">
                {title}
            </p>
        </button>
     );
}

export default DropdownItem;