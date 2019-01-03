import React, {PureComponent} from 'react';

import ConnectedEvents from '../containers/ConnectedEvents';
import ConnectedSearchForm from '../containers/ConnectedSearchForm';

export default class SearchForm extends PureComponent {
    render() {
        return (
            <div>
                <ConnectedSearchForm />
                <ConnectedEvents />
            </div>
        );
    }
}