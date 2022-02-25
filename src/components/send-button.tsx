import React from "react";
import { useDispatch } from "react-redux";
import useAppSelector from "hooks/useAppSelector";
import Button from "components/ui/button";
import sendRequest from "libs/send-request";

function SendButton() {

    const token = useAppSelector(state => state.LOGIN)
    const requestText = useAppSelector(state => state.REQUEST_TEXT)
    const requestPending = useAppSelector(state => state.REQUEST_PENDING)

    const dispatch = useDispatch()

    const onSend = () => sendRequest(requestText, token, dispatch)

    return ( 
        <Button
            onClick={onSend}
            loading={requestPending}
            text="Отправить"
         />
     );
}
export default SendButton;