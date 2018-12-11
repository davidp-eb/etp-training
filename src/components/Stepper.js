import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import Button from 'eventbrite_design_system/button/Button';
import Icon from 'eventbrite_design_system/icon/Icon';

export default class Stepper extends PureComponent {
    static propTypes = {
        value: PropTypes.number.isRequired,
        add: PropTypes.func.isRequired,
        subtract: PropTypes.func.isRequired,
        reset: PropTypes.func.isRequired,
    }

    render() {
        const {
            value,
            add,
            subtract,
            reset,
        } = this.props;

        return (
            <div className="eds-g-cell eds-g-cell-1-1">
                <div className="eds-g-cell-1-4 eds-l-mar-top-2">
                    <p className="eds-text-hs">{value}</p>
                </div>
                <div className="eds-g-cell-1-4 eds-l-mar-top-2">
                    <Button
                        onClick={add}
                    >
                        <Icon type="plus-chunky" />
                    </Button>
                </div>
                <div className="eds-g-cell-1-4 eds-l-mar-top-2">
                    <Button
                        onClick={subtract}
                    >
                        <Icon type="minus-chunky" />
                    </Button>
                </div>
                <div className="eds-g-cell-1-4 eds-l-mar-top-2">
                    <Button
                        onClick={reset}
                    >
                        <Icon type="refresh-chunky" />

                    </Button>
                </div>
            </div>
        );
    }
}