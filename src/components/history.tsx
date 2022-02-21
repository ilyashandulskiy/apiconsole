import React from "react";
import HistoryItem from "./history-item";

function History() {

    // for testing only
    const testArray = [
        { t: 'track.get', e: false },
        { t: 'issue.send', e: true },
        { t: 'pong', e: false },
        { t: 'track.get', e: true },
        { t: 'track.get', e: false },
        { t: 'issue.send', e: true },
        { t: 'pong', e: false },
        { t: 'track.get', e: true },
        { t: 'track.get', e: false },
        { t: 'issue.send', e: true },
        { t: 'pong', e: false },
        { t: 'track.get', e: true },
        { t: 'track.get', e: false },
        { t: 'issue.send', e: true },
        { t: 'pong', e: false },
        { t: 'track.get', e: true },
    ]

    return ( 
        <div className="history">
            <div className="history__list">
                {/* ONLY FOR TEST */}
                {testArray.map(item => <HistoryItem title={item.t} key={item.t} isError={item.e} />)}
            </div>
            <div className="history__fade" />
            <button type="button" className="clear-button">
                <img src="/images/clear.png" alt="clear" className="clear-button__image" />
            </button>
        </div>
     );
}

export default History;