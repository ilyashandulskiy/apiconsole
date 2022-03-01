import React, { useRef } from "react";
import { useDispatch } from 'react-redux';
import { Idropdown } from 'types';
import { HISTORY_DROPDOWN, LAST_RESPONSE, REQUEST_TEXT, RESPONSE_STATUS, RESPONSE_TEXT, SELECTED_ITEM } from 'store/types'
import useAppSelector from "hooks/useAppSelector";
import formatJSON from "libs/format-json";

interface Iprops {
    isError: boolean,
    title: string,
    index: number
}

function HistoryItem({ title, isError, index }: Iprops) {

    const dispatch = useDispatch();
    const ref = useRef<HTMLDivElement>(null);
    const items = useAppSelector(state => state.HISTORY)

    const {request, response, status} = items[index]
    
    
    const statusClass = !isError ?
        'history-item__status history-item__status_success'
        :
        'history-item__status history-item__status_error';

    const onDropdown = (cords: Idropdown) => {
        dispatch({
            type: SELECTED_ITEM,
            payload: index
        })
        dispatch({
            type: HISTORY_DROPDOWN,
            payload: cords
        })
    }

    const onPreview = () => {
        dispatch({
            type: LAST_RESPONSE,
            payload: true
        })
        dispatch({
            type: REQUEST_TEXT,
            payload: formatJSON(request, false)
        })
        dispatch({
            type: RESPONSE_TEXT,
            payload: formatJSON(JSON.stringify(response), false)
        })
        dispatch({
            type: RESPONSE_STATUS,
            payload: !status
        })
    }

    const dropdownHandler = () => {
        if (ref.current)
            onDropdown(ref.current.getBoundingClientRect())
    }

    return ( 
        
        <div ref={ref} className="history-item">

            <button
                className="history-item-wrapper"
                type="button"
                onClick={onPreview}
            >
                <div className={statusClass} />
                <p className="history-item__title">{title}</p>
            </button>
                
            <button
                className="history-item__menu-button"
                type="button"
                onClick={dropdownHandler}
            >
                <img
                    src="/images/drag-element.png"
                    alt="drag element"
                    className="history-item__drag-element"
                />
            </button>
        </div>
     );
}

export default HistoryItem;