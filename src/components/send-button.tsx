import React from "react";
import Button from "components/ui/button";
import sendRequest from "libs/send-request";
import { useStore } from "store/store";
import { observer } from "mobx-react-lite";

function SendButton() {

    const store = useStore()

    const onSend = () => sendRequest(store)

    return ( 
        <Button
            onClick={onSend}
            loading={store.requestPending}
            text="Отправить"
         />
     );
}
export default observer(SendButton);