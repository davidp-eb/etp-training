
import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {routerReducer} from 'react-router-redux';

import eventsReducer from './events';
import stepperReducer from './stepper';

export default combineReducers({
    routing: routerReducer,
    events: eventsReducer,
    stepper: stepperReducer,
    form: formReducer,
});
