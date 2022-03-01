import { Idropdown, IhistoryItem } from "types";
import { loadArrayFromLocalStore, loadFromLocalStore } from "libs/localstore";

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
    REQUEST_PENDING: boolean,
    HISTORY: IhistoryItem[],
    SELECTED_ITEM: number,
    LAST_RESPONSE: boolean,
    HISTORY_COPY_ALERT: Idropdown | null
}

const initState : Istate = {
    HISTORY_DROPDOWN: null,
    LOGIN: loadFromLocalStore('AUTH'),
    USERDATA: null,
    REQUEST_STATUS: false,
    REQUEST_TEXT: '',
    RESPONSE_TEXT: '',
    RESPONSE_STATUS: false,
    REQUEST_PENDING: false,
    HISTORY: loadArrayFromLocalStore('HISTORY'),
    SELECTED_ITEM: 0,
    LAST_RESPONSE: false,
    HISTORY_COPY_ALERT: null
}

export default initState