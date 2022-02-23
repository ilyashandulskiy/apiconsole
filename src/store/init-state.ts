import { Idropdown } from "types";
import { loadFromLocalStore } from "libs/localstore";

export interface Istate {
    HISTORY_DROPDOWN: null | Idropdown,
    LOGIN: null | string,
    USERDATA: {
        account: string,
        sublogin: string,
    } | null
}

const initState : Istate = {
    HISTORY_DROPDOWN: null,
    LOGIN: loadFromLocalStore('AUTH'),
    USERDATA: null
}

export default initState