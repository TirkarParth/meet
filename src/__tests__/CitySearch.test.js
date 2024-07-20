// src/__tests__/CitySearch.test.js

import React from 'react';
import { render, within, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CitySearch from '../components/CitySearch';
import App from '../App';
import { extractLocations, getEvents } from '../api';
import { act } from 'react-dom/test-utils';

// Enable Jest fake timers
jest.useFakeTimers();

describe('<CitySearch /> component', () => {
  let CitySearchComponent;
  let allLocations;

  beforeEach(async () => {
    const allEvents = await getEvents();
    allLocations = extractLocations(allEvents);
    CitySearchComponent = render(<CitySearch allLocations={allLocations} />);
  });

  test('renders text input', () => {
    const cityTextBox = CitySearchComponent.queryByRole('textbox');
    expect(cityTextBox).toBeInTheDocument();
    expect(cityTextBox).toHaveClass('city');
  });

  test('suggestions list is hidden by default', () => {
    const suggestionList = CitySearchComponent.queryByRole('list');
    expect(suggestionList).not.toBeInTheDocument();
  });

  test('renders a list of suggestions when city textbox gains focus', async () => {
    const cityTextBox = CitySearchComponent.getByRole('textbox');
    fireEvent.focus(cityTextBox);
    const suggestionList = CitySearchComponent.queryByRole('list');
    expect(suggestionList).toBeInTheDocument();
    expect(suggestionList).toHaveClass('suggestions');
  });

  test('updates list of suggestions correctly when user types in city textbox', async () => {
    const cityTextBox = CitySearchComponent.getByRole('textbox');
    fireEvent.change(cityTextBox, { target: { value: 'Berlin' } });

    const suggestions = allLocations ? allLocations.filter((location) => {
      return location.toUpperCase().indexOf(cityTextBox.value.toUpperCase()) > -1;
    }) : [];

    // Print out suggestions and cityTextBox.value for debugging
    console.log('Suggestions:', suggestions);
    console.log('City Text:', cityTextBox.value);

    await waitFor(() => {
      const suggestionListItems = CitySearchComponent.queryAllByRole('listitem');
      console.log('Suggestion List Items:', suggestionListItems);
      expect(suggestionListItems).toHaveLength(suggestions.length);
      for (let i = 0; i < suggestions.length; i += 1) {
        expect(suggestionListItems[i].textContent).toBe(suggestions[i]);
      }
    });
  });
});

describe('<CitySearch /> integration', () => {
    test('renders suggestions list when the app is rendered.', async () => {
        const AppComponent = render(<App />);
        const AppDOM = AppComponent.container.firstChild;
      
        const CitySearchDOM = AppDOM.querySelector('#city-search');
        const cityTextBox = within(CitySearchDOM).queryByRole('textbox');
        await act(async () => {
          await userEvent.click(cityTextBox);
        });
      
        const allEvents = await getEvents();
        const allLocations = extractLocations(allEvents);
      
        console.log('All Locations:', allLocations);
      
        const suggestionListItems = within(CitySearchDOM).queryAllByRole('listitem');
        console.log('Suggestion List Items:', suggestionListItems);
      
        expect(suggestionListItems.length).toBe(allLocations.length + 1); // +1 for "See all cities"
      });      
  
      test('updates event list when a city is selected.', async () => {
        const AppComponent = render(<App />);
        const AppDOM = AppComponent.container.firstChild;
      
        const CitySearchDOM = AppDOM.querySelector('#city-search');
        const cityTextBox = within(CitySearchDOM).queryByRole('textbox');
        await act(async () => {
          await userEvent.click(cityTextBox);
        });
      
        const suggestionListItems = within(CitySearchDOM).queryAllByRole('listitem');
        
        // Print for debugging
        console.log('Suggestion List Items:', suggestionListItems);
      
        if (suggestionListItems.length === 0) {
          throw new Error('No suggestion items found');
        }
      
        await act(async () => {
          await userEvent.click(suggestionListItems[0]); // Select the first suggestion
        });
      
        const EventListDOM = AppDOM.querySelector('#event-list');
        await waitFor(() => {
          const EventListItems = within(EventListDOM).queryAllByRole('listitem');
          expect(EventListItems.length).toBeGreaterThan(0); // Ensure event list updates based on city
        });
      });      
  });
  
