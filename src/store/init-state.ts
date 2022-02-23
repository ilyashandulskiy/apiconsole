import { Idropdown } from "types";
import { loadFromLocalStore } from "libs/localstore";

export interface Istate {
    HISTORY_DROPDOWN: null | Idropdown,
    LOGIN: null | string,
    USERDATA: {
        account: string,
        sublogin: string,
    } | null,
    REQUEST_TEXT: string,
    REQUEST_STATUS: boolean,
    RESPONSE_TEXT: string,
    RESPONSE_STATUS: boolean,
    REQUEST_PENDING: boolean
}

const initState : Istate = {
    HISTORY_DROPDOWN: null,
    LOGIN: loadFromLocalStore('AUTH'),
    USERDATA: null,
    REQUEST_STATUS: false,
    REQUEST_TEXT: '',
    RESPONSE_TEXT: '',
    RESPONSE_STATUS: false,
    REQUEST_PENDING: false
}

export default initState