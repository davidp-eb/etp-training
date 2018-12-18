
import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import eventsReducer from './events';
import stepperReducer from './stepper';

export default combineReducers({
    events: eventsReducer,
    stepper: stepperReducer,
    form: formReducer,
});