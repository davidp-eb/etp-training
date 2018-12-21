import {connect} from 'react-redux';

import EventList from '../components/EventList';
import {
    searchEvent,
    reset
} from '../actions/events';

//Saco cosas del estado y las meto en propiedades
const _mapStateToProps = ({events}) => ({
    events: events.searchEventsReducer,
});

//Saco acciones y las paso como propiedades,
// las llamadas a las actions se hacen aca (por ejemplo las llamadas a la api)
const _mapDispatchToProps = {
    searchEvent,
    reset,
};

export default connect(
    _mapStateToProps,
    _mapDispatchToProps
)(EventList);
