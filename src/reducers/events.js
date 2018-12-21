import {combineReducers} from 'redux';

import {
    SEARCH,
    RESET
} from '../actions/events';

const searchEventsReducer = (state = [], {type, payload}) => {
    let nextState = state;

    if (type == SEARCH) {
        nextState = payload;
    }

    return nextState;
};

export default combineReducers({
    searchEventsReducer,
});
