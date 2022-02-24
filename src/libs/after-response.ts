import { Dispatch } from "redux"
import { HISTORY, REQUEST_PENDING, RESPONSE_STATUS, RESPONSE_TEXT } from "store/types"
import formatJSON from "./format-json"

const afterResponse = (success: boolean, result: string, requestText: string, dispatch: Dispatch) => {

    dispatch({
        type: RESPONSE_TEXT,
        payload: formatJSON(JSON.stringify(result), false)
    })
    dispatch({
        type: RESPONSE_STATUS,
        payload: !success
    })
    dispatch({
        type: REQUEST_PENDING,
        payload: false
    })
    dispatch({
        type: HISTORY, payload: {
            title: JSON.parse(requestText).action,
            status: success,
            request: requestText,
            response: result
        }
    })
}

export default afterResponse