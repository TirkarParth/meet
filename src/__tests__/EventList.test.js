// src/__tests__/EventList.test.js

import React from 'react';
import { render, within, waitFor } from '@testing-library/react';
import EventList from '../components/EventList';
import mockData from '../mock-data';
import App from '../App';
import { getEvents } from '../api';

// Mock getEvents
jest.mock('../api');
getEvents.mockResolvedValue(mockData);

// Mock MutationObserver
global.MutationObserver = class {
  constructor(callback) {}
  disconnect() {}
  observe(element, initObject) {}
  takeRecords() { return []; }
};

// Unit tests for <EventList /> component
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

// Integration tests for <EventList /> component
describe('<EventList /> integration', () => {
    test('renders a list of events when the app is mounted and rendered', async () => {
      const AppComponent = render(<App />);
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector('#event-list');
  
      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole('listitem');
        expect(EventListItems.length).toBeGreaterThan(0); // Check if the list is not empty
      });
    });
  
    test('renders a list of 32 events by default', async () => {
      const AppComponent = render(<App />);
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector('#event-list');
  
      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole('listitem');
        expect(EventListItems.length).toBe(32); // Check if the list has 32 items by default
      });
    });
  });
