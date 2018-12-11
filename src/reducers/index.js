
import {combineReducers} from 'redux';

import eventsReducer from './events';
import stepperReducer from './stepper';

export default combineReducers({
    events: eventsReducer,
    stepper: stepperReducer,
});