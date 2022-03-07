import { sendsayRequest } from "api/sendsay"
import { Istore } from "store/store"
import afterResponse from "./after-response"
import formatJSON from "./format-json"


const sendRequest = (store: Istore) => {

    if (formatJSON(store.requestText, true) !== null) {
        store.setRequestPending(true)
        sendsayRequest(store.auth, JSON.parse(store.requestText))
            .then((result: string) => afterResponse(true, result, store.requestText, store))
            .catch((error: string) => afterResponse(false, error, store.requestText, store))
    } else {
        store.setRequestStatus(true)
    }
}

export default sendRequest