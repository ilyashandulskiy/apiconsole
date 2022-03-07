import { observer } from "mobx-react-lite";
import React from "react";

interface Iprops {
    title: string,
    dangerous: boolean,
    onSelect: () => void
}

function DropdownItem({ title, dangerous, onSelect }: Iprops) {

    let buttonClass = "dropdown-item";
    if(dangerous) buttonClass += " dropdown-item_dangerous"

    return ( 
        <button onClick={onSelect} type="button" className={buttonClass}>
            <p className="dropdown-item__text">
                {title}
            </p>
        </button>
     );
}

export default observer(DropdownItem);