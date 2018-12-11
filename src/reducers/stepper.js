import {combineReducers} from 'redux';

import {
    ADD,
    SUBTRACT,
    RESET
} from '../actions/stepper';

const value = (state = 0, {type}) => {
    let nextState = state;

    if (type === ADD) {
        nextState = nextState + 1;
    }

    if (type === SUBTRACT) {
        nextState = nextState - 1;
    }

    if (type === RESET) {
        nextState = 0;
    }

    return nextState;
};

export default combineReducers({
    value,
});
