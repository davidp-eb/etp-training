export const SEARCH = 'SEARCH';
export const RESET = 'RESET';
import {data} from '../data/events'; // llamar endpoint
import { SubmissionError } from 'redux-form';
import reduce from 'lodash/reduce';

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
export const search = () => ({type: SEARCH, events});
export const reset = () => ({type: RESET});

export const localSearchEvents = ({search} = {}) => (dispatch) => (
    Promise.resolve().then(() => {
        if (search === "David") {
            throw new SubmissionError({
                search: 'Please enter the name of the event!!',
                _error: 'David is a name.',
            });
        } else {
            let filteredEvents = events;

            dispatch(a)

        }


    })
);



