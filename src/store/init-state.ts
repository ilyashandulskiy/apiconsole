import { Idropdown } from "../types";

export interface Istate {
    HISTORY_DROPDOWN: null | Idropdown
}

const initState : Istate = {
    HISTORY_DROPDOWN : null
}

export default initState