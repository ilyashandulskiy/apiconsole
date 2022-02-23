import React from "react";
import { useDispatch } from "react-redux";
import useAppSelector from "hooks/useAppSelector";
import { sendsayRequest } from "api/sendsay";
import { RESPONSE_TEXT, RESPONSE_STATUS, REQUEST_STATUS, REQUEST_PENDING } from "store/types";
import formatJSON from "libs/format-json";
import Button from "./ui/button";

function SendButton() {

    const token = useAppSelector(state => state.LOGIN)
    const requestText = useAppSelector(state => state.REQUEST_TEXT)
    const requestPending = useAppSelector(state => state.REQUEST_PENDING)

    const dispatch = useDispatch()

    const onSend = () => {

        if (formatJSON(requestText, true) !== null) {
            dispatch({type: REQUEST_PENDING, payload: true})
            sendsayRequest(token, JSON.parse(requestText))
                .then((result: string) => {
                    dispatch({ type: RESPONSE_TEXT, payload: formatJSON(JSON.stringify(result), false) })
                    dispatch({ type: RESPONSE_STATUS, payload: false })
                    dispatch({type: REQUEST_PENDING, payload: false})
                })
                .catch((error: string) => {
                    dispatch({ type: RESPONSE_TEXT, payload: formatJSON(JSON.stringify(error), false) })
                    dispatch({ type: RESPONSE_STATUS, payload: true })
                    dispatch({type: REQUEST_PENDING, payload: false})
                })
        } else {
            dispatch({ type: REQUEST_STATUS, payload: true })
        }
    }

    return ( 
        <Button
            onClick={onSend}
            loading={requestPending}
            text="Отправить"
         />
     );
}
export default SendButton;