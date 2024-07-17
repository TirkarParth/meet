// src/__tests__/EventList.test.js

import React from 'react';
import { render } from '@testing-library/react';
import EventList from '../components/EventList';
import mockData from '../mock-data';

describe('<EventList /> component', () => {
  test('has an element with "list" role', () => {
    const EventListComponent = render(<EventList events={mockData} />);
    expect(EventListComponent.queryByRole('list')).toBeInTheDocument();
  });

  test('renders correct number of events', () => {
    const EventListComponent = render(<EventList events={mockData} />);
    expect(EventListComponent.getAllByRole('listitem')).toHaveLength(mockData.length);
  });
});
