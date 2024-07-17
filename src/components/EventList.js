// src/components/EventList.js

import React from 'react';
import Event from './Event';

const EventList = ({ events, id }) => {
    return (
        <ul id={id} className="event-list" role="list" aria-label="event-list">
            {events.map((event) => (
                <li key={event.id} role="listitem">
                    <Event event={event} />
                </li>
            ))}
        </ul>
    );
};

export default EventList;
