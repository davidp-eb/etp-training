import React, {PureComponent} from 'react';

import {ROUTER_LINK} from 'eventbrite_design_system/navListItem/constants';
import NavList from 'eventbrite_design_system/navList/NavList';

import {
    EVENTS_SEARCH_URL,
    REDUX_STEPPER_URL,
    BASE_URL
} from '../constants/constants';

const NAV_LIST_ITEMS = [
    {
        type: ROUTER_LINK,
        path: EVENTS_SEARCH_URL,
        content: 'Events Search',
        iconType: 'arrow-right',
    },
    {
        type: ROUTER_LINK,
        path: REDUX_STEPPER_URL,
        content: 'Redux Stepper',
        iconType: 'arrow-right',
    },
];

export default class IndexView extends PureComponent {
    render() {
        return (
            <div>
                <NavList items={NAV_LIST_ITEMS} />
            </div>
        );
    }
}