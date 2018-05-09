import * as TYPES from '../constans/actionTypes';
import initailState from "../initailState";

export function saveAnswerToStore(action){

    return{
        type: TYPES.SET_THE_ANSWER_OF_QUESTION,
        answer: action.answer
    }
}


export function reducer(state = initailState, action) {
    const stateCopy = Object.assign({}, state);
    switch (action.type){
        case TYPES.SET_THE_ANSWER_OF_QUESTION:
            stateCopy.correctAnswer = action.answer
            return stateCopy;
        default:
            return state;

    }

}