import {connect} from 'react-redux';

import Stepper from '../components/Stepper';
import {
    add,
    subtract,
    reset
} from '../actions/stepper';

const _mapStateToProps = ({stepper}) => ({
    value: stepper.value,
});

const _mapDispatchToProps = {
    add,
    subtract,
    reset,
};

export default connect(
    _mapStateToProps,
    _mapDispatchToProps,
)(Stepper);
