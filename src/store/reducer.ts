import initState, { Istate } from './init-state';
import { HISTORY_DROPDOWN, LOGIN } from './types';
import { Idropdown } from '../types'
import { saveToLocalStorage } from '../libs/localstore';

interface Iaction_HISTORY_DROPDOWN {
    type: 'HISTORY_DROPDOWN',
    payload: Idropdown | null
}

interface Iaction_LOGIN {
    type: 'LOGIN',
    payload: string | null
}

type Iaction = Iaction_HISTORY_DROPDOWN | Iaction_LOGIN;

const reducer = (state: Istate = initState, action: Iaction): Istate => {
    
    switch (action.type) {
        case HISTORY_DROPDOWN:
            return { ...state, HISTORY_DROPDOWN: action.payload }
        
        case LOGIN:
            saveToLocalStorage('AUTH', action.payload)
            return {...state, LOGIN : action.payload}
    
        default:
            return {...state}
    }

}

export default reducer