import React from "react";

interface Iprops {
    isError?: boolean,
    title: string
}

function HistoryItem({ title, isError }: Iprops) {
    
    let statusClass = 'history-item__status history-item__status_';
    statusClass += !isError ?
        'success'
        :
        'error';

    return ( 
        <div className="history-item">
            <div className={statusClass} />
            <p className="history-item__title">{title}</p>
            <img src="/images/drag-element.png" alt="drag element" className="history-item__drag-element" />
        </div>
     );
}

export default HistoryItem;