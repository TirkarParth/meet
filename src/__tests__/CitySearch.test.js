// src/__tests__/CitySearch.test.js

import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import CitySearch from '../components/CitySearch';
import { getEvents, extractLocations } from '../api';

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
