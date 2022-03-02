import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { useStore } from "store/store";

function CopyAlert() {
    const { historyCopyAlert } = useStore()
    const [copyClass, setCopyClass] = useState<string>('copy-alert')

    useEffect(() => {
        if (historyCopyAlert) {
            setCopyClass('copy-alert copy-alert_animation')
            setTimeout(() => setCopyClass('copy-alert'), 1000)
        }
    }, [historyCopyAlert])
    

    return ( 
        <div
            className="copy-alert-wrapper"
            style={{top: historyCopyAlert?.top, left: historyCopyAlert?.left}}
        >
            <div className={copyClass}>
                <p className="copy-alert__text">Скопировано</p>
            </div>
        </div>
     );
}

export default observer(CopyAlert);