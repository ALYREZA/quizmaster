import * as TYPES from '../constans/actionTypes'
import initailState from "../initailState";

export function setCorrectAnswer(action) {
    return {
        type: TYPES.CHOOSE_CORRECT_ANSWER
    }
}

export function reducer(state = initailState, action) {
    const stateCopy = Object.assign({}, state);
    switch (action.type){
        case TYPES.CHOOSE_CORRECT_ANSWER:

            const newLevel = stateCopy.level + 1;
            const newScore = stateCopy.score + 100;
            stateCopy.level = newLevel;
            stateCopy.score = newScore;

            return stateCopy;
        default:
            return state;

    }
}