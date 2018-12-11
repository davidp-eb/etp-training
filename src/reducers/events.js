import {combineReducers} from 'redux';

import {
    SEARCH,
    RESET
} from '../actions/events';

const searchEventsReducer = (state = [], {type, events}) => {
    let nextState = state;

    if (type == SEARCH) {
        nextState = events;
    }

    return nextState;
};

export default combineReducers({
    searchEventsReducer,
});
