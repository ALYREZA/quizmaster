import { CLICK_ON_BUTTOM } from '../constans/actionTypes';
import initailState from '../initailState';

export function clickOnButtom(count) {
    return {
        type: CLICK_ON_BUTTOM,
        count
    };
}

export function reducer(state = initailState.quiz.score, action){
    switch(action.type){
        case CLICK_ON_BUTTOM:
            return [ ...state, action.count]
        default:
            return state;
    }
}