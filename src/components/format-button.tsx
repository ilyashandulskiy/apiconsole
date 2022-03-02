import React from "react";
import formatJSON from "libs/format-json";
import { useStore } from "store/store";
import { observer } from "mobx-react-lite";

function FormatButton() {
    const { requestText, setRequestStatus, setRequestText } = useStore()

    const onFormat = () => {
        const formated = formatJSON(requestText, false)

        if (formated === null) {
            setRequestStatus(true)
        } else {
            setRequestText(formated)
        }
    }
    
    return ( 
        <button onClick={onFormat} type="button" className="format-button">
            <img src="/images/format.png" alt="format" className="format-button__image" />
            <p className="format-button__text">Форматировать</p>
        </button>
     );
}

export default observer(FormatButton);