import initState, { Istate } from 'store/init-state';
import { HISTORY_DROPDOWN, LOGIN, USERDATA } from 'store/types';
import { Idropdown } from 'types'
import { saveToLocalStorage } from 'libs/localstore';

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

type Iaction = Iaction_HISTORY_DROPDOWN | Iaction_LOGIN | Iaction_USERDATA;

const reducer = (state: Istate = initState, action: Iaction): Istate => {
    
    switch (action.type) {
        case HISTORY_DROPDOWN:
            return { ...state, HISTORY_DROPDOWN: action.payload }
        
        case LOGIN:
            saveToLocalStorage('AUTH', action.payload)
            return { ...state, LOGIN: action.payload }
        
        case USERDATA:
            return {...state, USERDATA : action.payload}
    
        default:
            return {...state}
    }

}

export default reducer