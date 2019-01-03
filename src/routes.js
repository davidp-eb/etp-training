import React from 'react';
import {
    IndexRoute,
    Route,
    browserHistory,
    createMemoryHistory
} from 'react-router';

import ConnectedEvents from './containers/ConnectedEvents';
import ConnectedStepper from './containers/ConnectedStepper';
import ConnectedStepperReact from './containers/ConnectedStepperReact';
import ConnectedSearchForm from './containers/ConnectedSearchForm';
import EventsSearch from './components/EventsSearch';
import IndexView from './components/IndexView';

import {
    EVENTS_SEARCH_URL,
    REDUX_STEPPER_URL,
    BASE_URL
} from './constants/constants';

export const getRoutes = () => {

    const goToBaseUrl = (nextRouterState, replace) => {
        replace(BASE_URL);
    };

    return (
        <Route path={BASE_URL}>
            <IndexRoute component={IndexView} />
            <Route path={EVENTS_SEARCH_URL} component={EventsSearch} />
            <Route path={REDUX_STEPPER_URL} component={ConnectedStepper} />
            <Route path="*" onEnter={goToBaseUrl} />
        </Route>
    );
};