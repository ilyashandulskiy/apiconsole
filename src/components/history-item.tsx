import React, { useRef } from "react";
import { useDispatch } from 'react-redux';
import { Idropdown } from '../types';
import { HISTORY_DROPDOWN } from '../store/types'


interface Iprops {
    isError?: boolean,
    title: string
}

function HistoryItem({ title, isError }: Iprops) {

    const dispatch = useDispatch();
    const ref = useRef<HTMLDivElement>(null);
    
    let statusClass = 'history-item__status history-item__status_';
    statusClass += !isError ? 'success' : 'error';

    const onDropdown = (cords: Idropdown) => {
        dispatch({type: HISTORY_DROPDOWN, payload: cords})
    }

    return ( 
        <button
            className="history-item-wrapper"
            type="button"
            onClick={() => ref.current ? onDropdown(ref.current.getBoundingClientRect()) : null}
        >
            <div ref={ref} className="history-item">
                <div className={statusClass} />
                <p className="history-item__title">{title}</p>
                <img
                    src="/images/drag-element.png"
                    alt="drag element"
                    className="history-item__drag-element"
                />
            </div>
        </button>
     );
}

export default HistoryItem;