export const SEARCH = 'SEARCH';
export const RESET = 'RESET';
import {data} from '../data/events'; // mover a actions...llamar endpoint.

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



