import * as TYPES from '../constans/actionTypes';
import initailState from "../initailState";

export function saveNumbersToStore(action){
    return {
        type: TYPES.SET_NUMBER_TO_STORE,
        first: action.first,
        second: action.second
    }
}

export function reducer(state = initailState, action){
    const stateCopy = Object.assign({}, state);
    switch (action.type){
        case TYPES.SET_NUMBER_TO_STORE:
            stateCopy.firstNumber = action.first;
            stateCopy.secondNumber = action.second;
            return stateCopy;
        default:
            return state;

    }

}