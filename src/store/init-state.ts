import { Idropdown } from "../types";

export interface Istate {
    HISTORY_DROPDOWN: null | Idropdown,
    LOGIN: null | string
}

const initState : Istate = {
    HISTORY_DROPDOWN: null,
    LOGIN: null
}

export default initState