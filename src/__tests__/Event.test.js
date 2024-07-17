// src/__tests__/Event.test.js

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Event from '../components/Event';
import mockData from '../mock-data';

describe('<Event /> component', () => {
  let event;
  beforeEach(() => {
    event = mockData[0]; // Use the first event from the mock data
  });

  test('renders event summary and start time by default (collapsed view)', () => {
    const { getByText } = render(<Event event={event} />);
    expect(getByText(event.summary)).toBeInTheDocument();
    expect(getByText(new Date(event.start.dateTime).toLocaleString())).toBeInTheDocument();
  });

  test('does not render event description, location, and attendees by default (collapsed view)', () => {
    const { queryByText } = render(<Event event={event} />);
    expect(queryByText(event.description)).not.toBeInTheDocument();
    expect(queryByText(event.location)).not.toBeInTheDocument();
    event.attendees.forEach(attendee => {
      expect(queryByText(attendee.email)).not.toBeInTheDocument();
    });
  });

  test('renders event description, location, and attendees when expanded', () => {
    const { getByText } = render(<Event event={event} />);
    fireEvent.click(getByText(event.summary)); // Simulate clicking the event to expand it
    expect(getByText(event.description)).toBeInTheDocument();
    expect(getByText(event.location)).toBeInTheDocument();
    event.attendees.forEach(attendee => {
      expect(getByText(attendee.email)).toBeInTheDocument();
    });
  });

  test('collapses event details when the event is clicked again', () => {
    const { getByText, queryByText } = render(<Event event={event} />);
    fireEvent.click(getByText(event.summary)); // Expand the event
    fireEvent.click(getByText(event.summary)); // Collapse the event
    expect(queryByText(event.description)).not.toBeInTheDocument();
    expect(queryByText(event.location)).not.toBeInTheDocument();
    event.attendees.forEach(attendee => {
      expect(queryByText(attendee.email)).not.toBeInTheDocument();
    });
  });
});
