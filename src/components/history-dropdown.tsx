import React from "react";  
import { useDispatch } from 'react-redux'
import useAppSelector from "hooks/useAppSelector";
import DropdownItem from "components/ui/dropdown-item";
import { HISTORY_DROPDOWN_OPTIONS } from "libs/constants";
import { HISTORY_DROPDOWN, REMOVE_HISTORY_ITEM } from "store/types";

function HistoryDropDown() {

    const dispatch = useDispatch()
    const dropdown = useAppSelector(state => state.HISTORY_DROPDOWN)

    if (!dropdown) return null

    const onSelect = (id: number) => {
        dispatch({type: HISTORY_DROPDOWN, payload: false})
        
        switch (id) {
            case 0:
                // execute
                break;
            case 1:
                // copy
                break;
            case 3:
                dispatch({type: REMOVE_HISTORY_ITEM})
                break;
            default:
                break;
        }
        
    }
    
    const list = HISTORY_DROPDOWN_OPTIONS.map(option => {

        if (option.type === 'line') return (
            <div key={option.id} className="history-dropdown__line" />
        )

        if (!option.text) return null

        return (
            <DropdownItem
                key={option.id}
                onSelect={() => onSelect(option.id)}
                dangerous={option.dangerous}
                title={option.text}
            />
        )
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