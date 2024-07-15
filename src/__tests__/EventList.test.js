// src/__tests__/EventList.test.js

import React from 'react'; // Add this line
import { render } from '@testing-library/react';
import EventList from '../components/EventList';

describe('<EventList /> component', () => {
  test('has an element with "list" role', () => {
    const EventListComponent = render(<EventList />);
    expect(EventListComponent.queryByRole("list")).toBeInTheDocument();
  });

  test('renders correct number of events', () => {
    const events = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
    const EventListComponent = render(<EventList events={events} />);
    
    // Query for all listitem roles and check their count
    const listItems = EventListComponent.getAllByRole("listitem");
    expect(listItems).toHaveLength(events.length);
  });
});
