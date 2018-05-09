import * as TYPES from '../constans/actionTypes';
import initailState from "../initailState";

export function saveOperatorToStore(action) {

    return {
        type: TYPES.SET_OPERATOR_INDEX_TO_STORE,
        index: action.index,
    }
}



export function reducer(state = initailState, action) {
    const stateCopy = Object.assign({}, state);
    switch (action.type){
        case TYPES.SET_OPERATOR_INDEX_TO_STORE:
            stateCopy.operator = action.index;
            return stateCopy;
        default:
            return state
    }
}