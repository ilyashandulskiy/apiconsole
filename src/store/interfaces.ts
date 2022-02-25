import { Idropdown, IhistoryItem } from "types";

interface HISTORY_DROPDOWN {
    type: 'HISTORY_DROPDOWN',
    payload: Idropdown | null
}

interface LOGIN {
    type: 'LOGIN',
    payload: string | null
}

interface USERDATA {
    type: 'USERDATA',
    payload: {
        account: string,
        sublogin: string,
    } | null
}

interface RESPONSE_TEXT {
    type: 'RESPONSE_TEXT',
    payload: string
}

interface REQUEST_TEXT {
    type: 'REQUEST_TEXT',
    payload: string
}

interface REQUEST_STATUS {
    type: 'REQUEST_STATUS',
    payload: boolean
}

interface RESPONSE_STATUS {
    type: 'RESPONSE_STATUS',
    payload: boolean
}

interface REQUEST_PENDING {
    type: 'REQUEST_PENDING',
    payload: boolean
}

interface HISTORY {
    type: 'HISTORY',
    payload: IhistoryItem
}

interface CLEAR_HISTORY {
    type: 'CLEAR_HISTORY'
}

interface REMOVE_HISTORY_ITEM {
    type: 'REMOVE_HISTORY_ITEM'
}

interface SELECTED_ITEM {
    type: 'SELECTED_ITEM',
    payload: number
}

interface LAST_RESPONSE {
    type: 'LAST_RESPONSE',
    payload: boolean
}

interface HISTORY_COPY_ALERT {
    type: 'HISTORY_COPY_ALERT',
    payload: Idropdown | null
}

type Iaction = HISTORY_DROPDOWN | LOGIN
    | USERDATA | RESPONSE_TEXT
    | REQUEST_TEXT | REQUEST_STATUS
    | RESPONSE_STATUS | REQUEST_PENDING
    | HISTORY | REMOVE_HISTORY_ITEM
    | SELECTED_ITEM | CLEAR_HISTORY
    | LAST_RESPONSE | HISTORY_COPY_ALERT;

export default Iaction