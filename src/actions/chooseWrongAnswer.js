import * as TYPES from '../constans/actionTypes';
import initailState from "../initailState";

export function chooseWrongAnswer(action) {
    return {
        type: TYPES.CHOOSE_WRONG_ANSWER
    }
}


export function reducer(state = initailState, action) {
    const stateCopy = Object.assign({}, state);
    switch (action.type){

        case TYPES.CHOOSE_WRONG_ANSWER:
            if(stateCopy.level > 0){
                stateCopy.level = 0
            }
            if(stateCopy.score > 0){
                stateCopy.score = stateCopy.score - 50
            }
            return stateCopy;
        default:
            return state;

    }
}