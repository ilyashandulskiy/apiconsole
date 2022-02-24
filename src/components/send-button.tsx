import React from "react";
import { useDispatch } from "react-redux";
import useAppSelector from "hooks/useAppSelector";
import { sendsayRequest } from "api/sendsay";
import { REQUEST_STATUS, REQUEST_PENDING } from "store/types";
import formatJSON from "libs/format-json";
import afterResponse from "libs/after-response";
import Button from "components/ui/button";

function SendButton() {

    const token = useAppSelector(state => state.LOGIN)
    const requestText = useAppSelector(state => state.REQUEST_TEXT)
    const requestPending = useAppSelector(state => state.REQUEST_PENDING)

    const dispatch = useDispatch()

    const onSend = () => {

        if (formatJSON(requestText, true) !== null) {
            dispatch({type: REQUEST_PENDING, payload: true})
            sendsayRequest(token, JSON.parse(requestText))
                .then((result: string) => afterResponse(true, result, requestText, dispatch))
                .catch((error: string) => afterResponse(false, error, requestText, dispatch))
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