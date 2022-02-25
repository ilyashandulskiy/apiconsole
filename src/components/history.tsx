import React from "react";
import useAppSelector from "hooks/useAppSelector";
import { useDispatch } from "react-redux";
import { IhistoryItem } from "types";
import HistoryItem from "components/history-item";
import { CLEAR_HISTORY } from "store/types";
import HistoryDropDown from "components/history-dropdown";
import CopyAlert from "components/copy-alert";

function History() {

    const history = useAppSelector(state => state.HISTORY)
    const dispatch = useDispatch()

    const onClear = () => {
        dispatch({type: CLEAR_HISTORY})
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

export default History;