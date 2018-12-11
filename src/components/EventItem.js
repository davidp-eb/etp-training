import React from 'react';
import PropTypes from 'prop-types';
// cambiar por eventcard
import MediaCardContent from 'eventbrite_design_system/mediaCardContent/MediaCardContent';

export default class EventItem extends React.PureComponent {
    static propTypes = {
        image: PropTypes.object.isRequired,
    }

    render() {
        const {image, name, address, ticketAvailability, summary} = this.props;
        let freeTicket;

        if (ticketAvailability.is_free) {
            freeTicket = (<div className="events-list__tooltip">
                <span>Free</span>
            </div>);
        }

        return (
            <article className="events-list__item">
                <div className="events-list__item-content">
                    <MediaCardContent
                        type="grid"
                        style="standard"
                        imageStyle="fixed"
                        imageUrl={image.original.url}
                        title={name}
                        flag="Free"
                        shouldShowDivider={true}
                        subContentOne={summary}
                        primaryIconType="heart-chunky"
                        primaryIconStyle="dark"
                        primaryIconTitle="Fav"
                        secondaryIconType="share-ios-chunky"
                        secondaryIconStyle="dark"
                        secondaryIconTitle="Share"
                    />
                </div>
            </article>
        );
    }
}