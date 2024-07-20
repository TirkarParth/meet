// src/App.js

import React, { useState, useEffect } from "react";
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import { getEvents, extractLocations } from './api';
import './App.css';

const App = () => {
  const [events, setEvents] = useState([]);
  const [locations, setLocations] = useState([]);
  const [numberOfEvents, setNumberOfEvents] = useState(32);

  const fetchData = async () => {
    const allEvents = await getEvents();
    setEvents(allEvents.slice(0, numberOfEvents));
    setLocations(extractLocations(allEvents));
  };

  useEffect(() => {
    fetchData();
  }, [numberOfEvents]);

  const handleNumberOfEventsChange = (number) => {
    setNumberOfEvents(number);
  };

  return (
    <div className="App">
      <CitySearch allLocations={locations} id="city-search" />
      <NumberOfEvents 
        id="number-of-events"
        numberOfEvents={numberOfEvents} 
        onNumberOfEventsChange={handleNumberOfEventsChange} 
      />
      <EventList id="event-list" events={events} />
    </div>
  );
}

export default App;
