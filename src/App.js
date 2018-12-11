import React from 'react';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';


import ConnectedEvents from './containers/ConnectedEvents';
import EventList from './components/EventList';
import ConnectedStepper from './containers/ConnectedStepper';
import ConnectedStepperReact from './containers/ConnectedStepperReact';
import reducer from './reducers';

import './styles/styles.scss';


export default class App extends React.Component {
    constructor(props) {
        super(props);

        this._store = createStore(
            reducer,
            {},
            composeWithDevTools(
                applyMiddleware(...[thunk], createLogger({collapsed: true}))
            )
        );
    }

    render() {
        return (
            <Provider store={this._store}>
                <div>
                    {/*Stepper (redux):
                    <ConnectedStepper />

                    Stepper (react):
                    <ConnectedStepperReact />

                    Events (react):
                    <EventList data={events}/>*/}

                    Events (redux):
                    <ConnectedEvents />
                </div>
            </Provider>
        );
    }
}
