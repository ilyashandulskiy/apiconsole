import initState, { Istate } from 'store/init-state';
import { HISTORY_DROPDOWN, LOGIN, USERDATA, REQUEST_TEXT, RESPONSE_TEXT, REQUEST_STATUS, RESPONSE_STATUS, REQUEST_PENDING } from 'store/types';
import Iaction from 'store/interfaces';
import { saveToLocalStorage } from 'libs/localstore';

const reducer = (state: Istate = initState, action: Iaction): Istate => {
    
    switch (action.type) {
        case HISTORY_DROPDOWN:
            return { ...state, HISTORY_DROPDOWN: action.payload }
        
        case LOGIN:
            saveToLocalStorage('AUTH', action.payload)
            return { ...state, LOGIN: action.payload }
        
        case USERDATA:
            return { ...state, USERDATA: action.payload }
        
        case REQUEST_PENDING:
            return { ...state, REQUEST_PENDING: action.payload }
        
        case REQUEST_STATUS:
            return { ...state, REQUEST_STATUS: action.payload }
    
        case RESPONSE_STATUS:
            return { ...state, RESPONSE_STATUS: action.payload }
        
        case REQUEST_TEXT:
            return { ...state, REQUEST_TEXT: action.payload, REQUEST_STATUS: false }
        
        case RESPONSE_TEXT:
            return { ...state, RESPONSE_TEXT: action.payload }
    
        default:
            return {...state}
    }

}

export default reducer