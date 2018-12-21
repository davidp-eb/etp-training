export const SEARCH = 'SEARCH';
export const RESET = 'RESET';
import {data} from '../data/events'; // llamar endpoint
import { SubmissionError } from 'redux-form';
import {filter, includes} from 'lodash';

const events = data.events.map(({
    id,
    image,
    name,
    primary_venue_with_places,
    ticket_availability,
    summary,
}) => {
    return {
        id,
        image,
        name,
        primary_venue_with_places,
        ticket_availability,
        summary,
    }
});

// add api calls.
export const searchEvent = (payload = events) => ({type: SEARCH, payload});
export const reset = () => ({type: RESET});

export const localSearchEvents = ({search} = {}) => (dispatch) => (
    Promise.resolve().then(() => {
        let filteredEvents = events;

        if (search === "David") {
            throw new SubmissionError({
                search: 'Please enter the name of the event!!',
                _error: 'David is a name.',
            });
        } else if (search === "all") {
            dispatch(searchEvent(filteredEvents));
        } else {
            filteredEvents = filter(filteredEvents, (item) => {
                if (includes(item.name.toUpperCase(), search.toUpperCase()))
                    return item;
            }, search);

            dispatch(searchEvent(filteredEvents));
        }
    })
);



