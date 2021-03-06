import { FETCH_WEATHER } from '../actions/index';

export default function weatherReducer(state=[], action) {
    
    switch(action.type) {
        case FETCH_WEATHER:
            return [action.payload.data];
        default:
            return state;
    }
        
};