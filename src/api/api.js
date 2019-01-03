import eventbrite from 'eventbrite';
import TOKEN from './data/token';


const sdk = eventbrite({
    token: TOKEN,
    baseUrl: 'https://www.evbqaapi.com/v3',
});

//1- traer eventos cuando carga
//2- con search, que compare
export const requestToApi = ({
    q = "",
    price = "",
    dates = "current_future",
    tags = [],
}) => {
    sdk.request(
        '/destination/search/',
            {
                method: 'POST',
                body: JSON.stringify({
                    event_search: {
                        q,
                        price,
                        dates,
                        tags,
                    },
                    page_size: 50,
                    'expand.destination_event': [
                        "primary_venue",
                        "image",
                        "ticket_availability",
                    ]
                }),
            }
    ).then(res => {
        //debugger;
    });
};
