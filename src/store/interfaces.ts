import { Idropdown } from "types";

interface Iaction_HISTORY_DROPDOWN {
    type: 'HISTORY_DROPDOWN',
    payload: Idropdown | null
}

interface Iaction_LOGIN {
    type: 'LOGIN',
    payload: string | null
}

interface Iaction_USERDATA {
    type: 'USERDATA',
    payload: {
        account: string,
        sublogin: string,
    } | null
}

interface Iaction_RESPONSE_TEXT {
    type: 'RESPONSE_TEXT',
    payload: string
}


interface Iaction_REQUEST_TEXT {
    type: 'REQUEST_TEXT',
    payload: string
}

interface Iaction_REQUEST_STATUS {
    type: 'REQUEST_STATUS',
    payload: boolean
}

interface Iaction_RESPONSE_STATUS {
    type: 'RESPONSE_STATUS',
    payload: boolean
}

interface Iaction_REQUEST_PENDING {
    type: 'REQUEST_PENDING',
    payload: boolean
}


type Iaction = Iaction_HISTORY_DROPDOWN | Iaction_LOGIN
    | Iaction_USERDATA | Iaction_RESPONSE_TEXT
    | Iaction_REQUEST_TEXT | Iaction_REQUEST_STATUS
    | Iaction_RESPONSE_STATUS | Iaction_REQUEST_PENDING;

export default Iaction