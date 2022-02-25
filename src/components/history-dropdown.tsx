import React from "react";  
import { useDispatch } from 'react-redux'
import useAppSelector from "hooks/useAppSelector";
import DropdownItem from "components/ui/dropdown-item";
import { HISTORY_DROPDOWN_OPTIONS } from "libs/constants";
import { HISTORY_COPY_ALERT, HISTORY_DROPDOWN, REMOVE_HISTORY_ITEM, REQUEST_TEXT } from "store/types";
import copyToClipboard from "libs/copy-to-clipboard";
import sendRequest from "libs/send-request";
import formatJSON from "libs/format-json";

function HistoryDropDown() {

    const dispatch = useDispatch()
    const history = useAppSelector(state => state.HISTORY)
    const selected = useAppSelector(state => state.SELECTED_ITEM)
    const dropdown = useAppSelector(state => state.HISTORY_DROPDOWN)
    const token = useAppSelector(state => state.LOGIN)

    if (!dropdown) return null

    const onSelect = (id: number) => {
        dispatch({type: HISTORY_DROPDOWN, payload: false})
        
        switch (id) {
            case 0:
                dispatch({type: REQUEST_TEXT, payload: formatJSON(history[selected].request, false)})
                sendRequest(history[selected].request, token, dispatch)
                break;
            case 1:
                dispatch({type: HISTORY_COPY_ALERT, payload: dropdown})
                copyToClipboard(history[selected].request)
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
                top: dropdown?.top,
            }}
        >
            <div className="history-dropdown-inner">
                {list}
            </div>
    </div>
     );
}

export default HistoryDropDown;