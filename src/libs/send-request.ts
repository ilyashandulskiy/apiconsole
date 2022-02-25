import { sendsayRequest } from "api/sendsay"
import { Dispatch } from "redux"
import { REQUEST_PENDING, REQUEST_STATUS } from "store/types"
import afterResponse from "./after-response"
import formatJSON from "./format-json"


const sendRequest = (requestText: string, token: string | null, dispatch: Dispatch) => {

    if (formatJSON(requestText, true) !== null) {
        dispatch({type: REQUEST_PENDING, payload: true})
        sendsayRequest(token, JSON.parse(requestText))
            .then((result: string) => afterResponse(true, result, requestText, dispatch))
            .catch((error: string) => afterResponse(false, error, requestText, dispatch))
    } else {
        dispatch({ type: REQUEST_STATUS, payload: true })
    }
}

export default sendRequest