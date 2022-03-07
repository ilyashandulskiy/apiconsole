import { Istore } from "store/store"
import formatJSON from "./format-json"
import generateID from "./generate-id"

const afterResponse = (success: boolean, result: string, requestText: string, store: Istore) => {

    store.setLastResponse(false)
    
    store.setResponseText(formatJSON(JSON.stringify(result), false) || '')
    store.setResponseStatus(!success)
    store.setRequestPending(false)
    store.setHistory({
        title: JSON.parse(requestText).action as string,
        id: generateID(),
        status: success,
        request: requestText,
        response: result
    })
}

export default afterResponse