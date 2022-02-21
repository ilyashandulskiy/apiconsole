import initState, { Istate } from './init-state';
import { HISTORY_DROPDOWN } from './types';
import { Idropdown } from '../types'

interface Iaction_HISTORY_DROPDOWN {
    type: 'HISTORY_DROPDOWN',
    payload: Idropdown | null
}

type Iaction = Iaction_HISTORY_DROPDOWN;

const reducer = (state: Istate = initState, action: Iaction): Istate => {
    
    switch (action.type) {
        case HISTORY_DROPDOWN:
            return {...state, HISTORY_DROPDOWN : action.payload}
    
        default:
            return {...state}
    }

}

export default reducer