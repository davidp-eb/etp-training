import React, {PureComponent} from 'react';

import Stepper from '../components/Stepper';

export default class StepperReact extends PureComponent {
    state = {
        value: 0,
    }

    _handleAdd = () => {
        this.setState(({value: oldValue}) => ({
            value: oldValue + 1,
        }));
    }

    _handleSubtract = () => {
        this.setState(({value: oldValue}) => ({
            value: oldValue - 1,
        }));
    }

    _handleReset = () => {
        this.setState({value: 0});
    }

    render() {
        const {value} = this.state;

        return (
            <Stepper
                value={value}
                add={this._handleAdd}
                subtract={this._handleSubtract}
                reset={this._handleReset}
            />
        );
    }
}