import React from "react";
import { IhistoryItem } from "types";
import HistoryItem from "components/history-item";
import HistoryDropDown from "components/history-dropdown";
import CopyAlert from "components/copy-alert";
import { useStore } from "store/store";
import { observer } from "mobx-react-lite";

function History() {

    const { history, clearHistory } = useStore()

    const onClear = () => {
        clearHistory()
    }

    return ( 
        <div className="history">
            <HistoryDropDown />
            <CopyAlert />
            <div className="history__list">
                {history.map((item: IhistoryItem, index) =>
                    <HistoryItem
                        index={index}
                        title={item.title}
                        key={item.id}
                        isError={!item.status}
                    />
                )}
            </div>
            <div className="history__fade" />
            <button onClick={onClear} type="button" className="clear-button">
                <img src="/images/clear.png" alt="clear" className="clear-button__image" />
            </button>
        </div>
     );
}

export default observer(History);