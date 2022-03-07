import React from "react";  
import DropdownItem from "components/ui/dropdown-item";
import { HISTORY_DROPDOWN_OPTIONS } from "libs/constants";
import copyToClipboard from "libs/copy-to-clipboard";
import sendRequest from "libs/send-request";
import formatJSON from "libs/format-json";
import { useStore } from "store/store";
import { observer } from "mobx-react-lite";

function HistoryDropDown() {

    const { history, selectedItem, historyDropDown, setHistoryDropDown, setRequestText, setHistoryCopyAlert, removeHistoryItem } = useStore()
    const store = useStore()

    if (!historyDropDown) return null

    const onSelect = (id: number) => {
        setHistoryDropDown(null)
        
        switch (id) {
            case 0:
                setRequestText(formatJSON(history[selectedItem].request, false) || '')
                sendRequest(store)
                break;
            case 1:
                setHistoryCopyAlert(historyDropDown)
                copyToClipboard(history[selectedItem].request)
                break;
            case 3:
                removeHistoryItem()
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
            onMouseLeave={() => setHistoryDropDown(null)}
            style={{
                left: historyDropDown?.left,
                top: historyDropDown?.top,
            }}
        >
            <div className="history-dropdown-inner">
                {list}
            </div>
    </div>
     );
}

export default observer(HistoryDropDown);