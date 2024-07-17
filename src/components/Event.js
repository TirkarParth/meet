// src/components/Event.js

import React, { useState } from 'react';

const Event = ({ event }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="event">
      <h2 onClick={handleToggle}>{event.summary}</h2>
      {event.start && event.start.dateTime && (
        <p>{new Date(event.start.dateTime).toLocaleString()}</p>
      )}
      {isExpanded && (
        <div>
          <p>{event.description}</p>
          <p>{event.location}</p>
          <ul>
            {event.attendees.map((attendee) => (
              <li key={attendee.email}>{attendee.email}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Event;
