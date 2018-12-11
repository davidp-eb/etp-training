import React from 'react';
import {mount} from 'enzyme';

import App from './App';

describe('Render the main App', () => {

    it('test', () => {
        const component = mount(
            <App />
        );

       expect(component).toMatchSnapshot();
    })


});
