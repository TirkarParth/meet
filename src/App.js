import React, { useEffect, useState, useCallback } from 'react';
import './App.css';
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import { extractLocations, getEvents } from './api';

function App() {
  const [events, setEvents] = useState([]);
  const [currentNOE] = useState(32); // Removed setCurrentNOE since it's unused
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState('See all cities');

  const fetchData = useCallback(async () => {
    const allEvents = await getEvents();
    const filteredEvents = currentCity === "See all cities"
      ? allEvents
      : allEvents.filter(event => event.location === currentCity);
    setEvents(filteredEvents.slice(0, currentNOE));
    setAllLocations(extractLocations(allEvents));
  }, [currentCity, currentNOE]); // Add currentNOE to the dependency array

  useEffect(() => {
    fetchData();
  }, [currentCity, fetchData]); // Add fetchData to the dependency array

  return (
    <div className="App">
      <CitySearch allLocations={allLocations} setCurrentCity={setCurrentCity} />
      <NumberOfEvents />
      <EventList events={events} />
    </div>
  );
}

export default App;
