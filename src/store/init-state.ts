import { Idropdown } from "../types";
import { loadFromLocalStore } from "../libs/localstore";

export interface Istate {
    HISTORY_DROPDOWN: null | Idropdown,
    LOGIN: null | string
}

const initState : Istate = {
    HISTORY_DROPDOWN: null,
    LOGIN: loadFromLocalStore('AUTH')
}

export default initState