import {connect} from 'react-redux';

import EventList from '../components/EventList';
import {
    search,
    reset
} from '../actions/events';

const _mapStateToProps = ({events}) => ({
    events: events.searchEventsReducer,
});

const _mapDispatchToProps = {
    search,
    reset,
};

export default connect(
    _mapStateToProps,
    _mapDispatchToProps
)(EventList);
