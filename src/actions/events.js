import {data} from '../data/events'; // llamar endpoint
import { SubmissionError } from 'redux-form';
import {filter, includes} from 'lodash';
import eventbrite from 'eventbrite';

export const SEARCH = 'SEARCH';
export const RESET = 'RESET';



const events = data.events.map(({
    id,
    image,
    name,
    primary_venue_with_places,
    ticket_availability,
    summary,
    tags,
}) => {
    return {
        id,
        image,
        name,
        primary_venue_with_places,
        ticket_availability,
        summary,
        tags,
    }
});
// token LDPDOG3T7OWGAKNQKBFN (personal token)
// add api calls.
export const searchEvent = (payload = events) => ({type: SEARCH, payload});
export const reset = () => ({type: RESET});

//definir otra funcion que
export const apiSearchEvents = () => ({type: SEARCH, payload});
export const apiSearchEventsQuery = ({search}) => (dispatch) => (
    ""
);

export const localSearchEvents = ({search = '', category = ''} = {}) => (dispatch) => (
    Promise.resolve().then(() => {
        let filteredEvents = events;

        if (search === "David") {
            throw new SubmissionError({
                search: 'Please enter the name of the event!!',
                _error: 'David is a person name.',
            });
        } else if (search === "all") {
            dispatch(searchEvent(filteredEvents));
        } else {

            filteredEvents = filter(filteredEvents, (item) => {
                if (includes(item.name.toUpperCase(), search.toUpperCase()) ||
                    includes(item.summary.toUpperCase(), search.toUpperCase()))
                    return item;
            }, search);

            filteredEvents = filter(filteredEvents, (item) => {
                const tags = item.tags.map(({tag}) => (tag));

                if (includes(tags, category))
                    return item;

            }, category);

            dispatch(searchEvent(filteredEvents));
        }
    })
);



