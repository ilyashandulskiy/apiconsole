import React from "react";  
import { useDispatch } from 'react-redux'
import useAppSelector from "../hooks/useAppSelector";
import DropdownItem from "./ui/dropdown-item";
import { HISTORY_DROPDOWN_OPTIONS } from "../libs/constants";
import { HISTORY_DROPDOWN } from "../store/types";

function HistoryDropDown() {

    const dispatch = useDispatch()
    const dropdown = useAppSelector(state => state.HISTORY_DROPDOWN)

    if (!dropdown) return null
    
    const list = HISTORY_DROPDOWN_OPTIONS.map(option => {

        if (option.type === 'line') return (
            <div key={option.id} className="history-dropdown__line" />
        )

        return (option.text ?
            <DropdownItem
                key={option.id}
                dangerous={option.dangerous}
                title={option.text}
            /> : null)
    })

    return ( 
        <div
            className="history-dropdown"
            onMouseLeave={() => dispatch({type: HISTORY_DROPDOWN, payload: null})}
            style={{
                left: dropdown?.left,
                top: dropdown?.bottom,
            }}
        >
            {list}
        </div>
     );
}

export default HistoryDropDown;