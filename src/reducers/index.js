import {reducer as clickOnButtom} from '../actions/clickOnButtom'
import initailState from "../initailState";
import {reducer as saveOperatorToStore} from "../actions/setOperator";
import {reducer as saveNumbersToStore} from "../actions/setNumbers";
import {reducer as saveAnswerToStore} from '../actions/setAnswer';
import {reducer as chooseWrongAnswer} from '../actions/chooseWrongAnswer';
import {reducer as chooseCorrectAnswer} from '../actions/chooseCorrectAnswer';

const reducers = [
    clickOnButtom,
    saveOperatorToStore,
    saveNumbersToStore,
    saveAnswerToStore,
    chooseWrongAnswer,
    chooseCorrectAnswer
];
export default function reducer(state = initailState, action) {
    let newState;
    switch (action.type) {
        // Put global reducers here
        default:
            newState = state;
            break;
    }
    return reducers.reduce((s, r) => r(s, action), newState);
}