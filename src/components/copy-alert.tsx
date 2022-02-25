import React, { useEffect, useState } from "react";
import useAppSelector from "hooks/useAppSelector";

function CopyAlert() {
    const historyCopyAlert = useAppSelector(state => state.HISTORY_COPY_ALERT)
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

export default CopyAlert;