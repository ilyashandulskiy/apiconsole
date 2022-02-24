import initState, { Istate } from 'store/init-state';
import {
    HISTORY_DROPDOWN, LOGIN, USERDATA, REQUEST_TEXT,
    RESPONSE_TEXT, REQUEST_STATUS, RESPONSE_STATUS,
    REQUEST_PENDING, HISTORY, REMOVE_HISTORY_ITEM,
    SELECTED_ITEM, CLEAR_HISTORY
} from 'store/types';
import Iaction from 'store/interfaces';
import { saveToLocalStorage } from 'libs/localstore';
import uniqueHistory from 'libs/unique-history';

const reducer = (state: Istate = initState, action: Iaction): Istate => {
    
    switch (action.type) {
        case HISTORY_DROPDOWN:
            return { ...state, HISTORY_DROPDOWN: action.payload }
        
        case LOGIN: {
            saveToLocalStorage('AUTH', action.payload)
            return { ...state, LOGIN: action.payload }
        }
        
        case USERDATA:
            return { ...state, USERDATA: action.payload }
    
        case HISTORY: {
            const newHistory = uniqueHistory(state.HISTORY, action.payload)
            saveToLocalStorage('HISTORY', JSON.stringify(newHistory))
            return { ...state, HISTORY: newHistory}
        }
        
        case SELECTED_ITEM: 
            return { ...state, SELECTED_ITEM: action.payload } 
        
        case CLEAR_HISTORY:
            saveToLocalStorage('HISTORY', '[]')
            return { ...state, HISTORY: [] } 
        
        case REMOVE_HISTORY_ITEM: {
            const newHistory = [...state.HISTORY]
            newHistory.splice(state.SELECTED_ITEM, 1);
            saveToLocalStorage('HISTORY', JSON.stringify(newHistory))
            return { ...state, HISTORY: newHistory }
        }
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