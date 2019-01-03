import React from 'react';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Router, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import {getRoutes} from './routes';


import EventList from './components/EventList';
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

        this._history = syncHistoryWithStore(browserHistory, this._store);
    }

    render() {
        const routes = getRoutes();

        return (
            <Provider store={this._store}>
                <Router history={this._history} routes={routes} />
            </Provider>
        );
    }
}
