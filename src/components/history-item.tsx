import React, { useRef } from "react";
import { Idropdown } from 'types';
import formatJSON from "libs/format-json";
import { useStore } from "store/store";
import { observer } from "mobx-react-lite";

interface Iprops {
    isError: boolean,
    title: string,
    index: number
}

function HistoryItem({ title, isError, index }: Iprops) {

    const ref = useRef<HTMLDivElement>(null);
    const { history } = useStore()

    const { setSelectedItem, setHistoryDropDown, setLastResponse, setRequestText, setResponseText, setResponseStatus } = useStore()

    const {request, response, status} = history[index]
    
    
    const statusClass = !isError ?
        'history-item__status history-item__status_success'
        :
        'history-item__status history-item__status_error';

    const onDropdown = (cords: Idropdown) => {
        setSelectedItem(index)
        setHistoryDropDown(cords)
    }

    const onPreview = () => {
        setLastResponse(true)
        setRequestText(formatJSON(request, false) || '')
        setResponseText(formatJSON(JSON.stringify(response), false) || '')
        setResponseStatus(!status)
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

export default observer(HistoryItem);