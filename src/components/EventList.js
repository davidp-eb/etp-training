import PropTypes from 'prop-types';
import React from 'react';

import EventItem from './EventItem';

export default class EventList extends React.PureComponent {
    static propTypes = {
        events: PropTypes.array.isRequired,
        searchEvent: PropTypes.func.isRequired
    }

    static defaultProps = {
        events: [],
    }

    componentDidMount() {
        const {searchEvent} = this.props;

        searchEvent();
    }

    render() {
        const {events} = this.props;

        const items = events.map(({id, image, name, primary_venue_with_places, ticket_availability, summary}, index) => {
            return (
                <EventItem
                    key={id}
                    name={name}
                    image={image}
                    address={primary_venue_with_places.address}
                    ticketAvailability={ticket_availability}
                    summary={summary}
                />
            );
        });

        return (
            <section className="events-list">
                {items}
            </section>
        )
    }
}