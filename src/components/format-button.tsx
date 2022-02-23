import React from "react";
import formatJSON from "libs/format-json";
import useAppSelector from "hooks/useAppSelector";
import { useDispatch } from "react-redux";
import { REQUEST_STATUS, REQUEST_TEXT } from "store/types";

function FormatButton() {
    const dispatch = useDispatch()
    const requestText = useAppSelector(state => state.REQUEST_TEXT)

    const onFormat = () => {
        const formated = formatJSON(requestText, false)

        if (formated === null) {
            dispatch({type: REQUEST_STATUS, payload: true})
        } else {
            dispatch({type: REQUEST_TEXT, payload: formated})
        }
    }
    
    return ( 
        <button onClick={onFormat} type="button" className="format-button">
            <img src="/images/format.png" alt="format" className="format-button__image" />
            <p className="format-button__text">Форматировать</p>
        </button>
     );
}

export default FormatButton;