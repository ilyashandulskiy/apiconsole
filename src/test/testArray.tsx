import React from "react";
import HistoryItem from "../components/history-item";

const testArray = [
    { t: 'track.get', e: false, k: '12312' },
    { t: 'issue.send', e: true, k: '12sdfsdf312' },
    { t: 'pong', e: false, k: '12sfsdff312' },
    { t: 'track.get', e: true, k: '112312' },
    { t: 'track.get', e: false, k: '1231d2' },
    { t: 'issue.send', e: true, k: '1211312' },
    { t: 'pong', e: false, k: '12v312' },
    { t: 'track.get', e: true, k: '12bbbb312' },
    { t: 'track.get', e: false, k: '12qqe312' },
    { t: 'issue.send', e: true, k: '12ll312' },
    { t: 'pong', e: false, k: '122' },
    { t: 'track.get', e: true, k: '333' },
    { t: 'track.get', e: false, k: 'flf' },
    { t: 'issue.send', e: true, k: 'wqw' },
    { t: 'pong', e: false, k: 'weee' },
    { t: 'track.get', e: true, k: '111pp' },
].map(item =>
    <HistoryItem
        title={item.t}
        key={item.k}
        isError={item.e}
    />
)

export default testArray