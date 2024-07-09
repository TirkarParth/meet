# Project Description

## Usage of serverless functions for Meet App.
Leveraging serverless functions for my meet app will enable dynamic scaling based on demand. This ensures the app remains responsive regardless of traffic levels. Additionally, serverless functions reduce the cost of running and maintaining servers around the clock, as payments are only required when functions are executed. They also facilitate faster development cycles since developers using serverless functions don't need to manage servers or infrastructure.

## Feature 1: Filter Events by City

1. As a user, 
I should be able to see upcoming events from all cities when I haven't searched for a specific city 
so that I am aware of all available events.

2. As a user, 
I should be able to see a list of city suggestions when I search for a city 
so that I can quickly find the city I'm looking for.

3. As a user, 
I should be able to select a city from the suggested list 
so that I can view events specific to that city.

## Scenario 1:
- Given the user hasn't searched for any city
- When they access the app
- Then upcoming events from all cities should be displayed.

## Scenario 2:
- Given the user is typing in the search bar
- When they type at least one character
- Then a list of suggested cities should be displayed.

## Scenario 3:
- Given the user has typed in a city in the search bar
- When they select a city from the suggested list
- Then events for the selected city should be displayed.

## Scenario 4:
- Given the user has previously searched for a city
- When they return to the app
- Then the app should remember the last searched city and display events from that city.

## Scenario 5:
- Given the user has selected a city and is viewing its events
- When they clear the search bar
- Then the app should display events from all cities again.

## Feature 2: Show/Hide Event Details

1. As a user,
I should be able to see event details collapsed by default 
so that the event list remains concise.

2. As a user,
I should be able to expand an event to see its details 
so that I can get more information about the event.

3. As a user,
I should be able to collapse an event to hide its details 
so that I can return to a concise view.

## Scenario 1:
- Given the user is viewing the events list
- When they open the app
- Then event details should be collapsed by default.

## Scenario 2:
- Given the user is viewing an event with collapsed details
- When they click on the event
- Then the event details should expand to show more information.

## Scenario 3:
- Given the user is viewing an event with expanded details
- When they click on the event again
- Then the event details should collapse to hide extra information.

## Scenario 4:
- Given the user has expanded event details
- When they navigate away from the event and return
- Then the event details should remain expanded.

## Scenario 5:
- Given the user is viewing the events list
- When they use a gesture (like swipe) to expand or collapse details
- Then the event details should expand or collapse accordingly.

## Feature 3: Specify Number of Events

1. As a user,
I should be able to see 32 events by default when I haven't specified a number 
so that I have a good number of events to browse.

2. As a user,
I should be able to change the number of events displayed 
so that I can control the amount of information I see.

## Scenario 1:
- Given the user hasn't specified the number of events
- When they access the app
- Then 32 events should be displayed by default.

## Scenario 2:
- Given the user is viewing the events list
- When they change the number of events to be displayed
- Then the events list should update to show the specified number of events.

## Scenario 3:
- Given the user has set a specific number of events to display
- When they navigate away and return to the app
- Then the app should remember and display the previously specified number of events.

## Scenario 4:
- Given the user is viewing the events list
- When they change the number of events to display multiple times
- Then the app should immediately reflect each change in the number of displayed events.

## Feature 4: Use the App When Offline

1. As a user,
I should be able to see cached data when there's no internet connection 
so that I can still access event information.

2. As a user,
I should be able to see an error message when I change search settings without an internet connection 
so that I am informed of the lack of connectivity.

## Scenario 1:
- Given the user has accessed the app before and has cached data
- When they open the app without an internet connection
- Then the app should display cached event data.

## Scenario 2:
- Given the user has changed search settings (city, number of events)
- When there's no internet connection
- Then the app should display an error message indicating the lack of internet connection.

## Scenario 3:
- Given the user has not previously accessed the app
- When they open the app without an internet connection
- Then the app should display a message indicating that no data is available.

## Scenario 4:
- Given the user is offline
- When they try to refresh the event list
- Then the app should display an error message indicating that the refresh is not possible.

## Scenario 5:
- Given the user is offline
- When they try to perform an action requiring internet
- Then the app should queue the action and perform it automatically when the connection is restored.

## Feature 5: Add an App Shortcut to the Home Screen

1. As a user,
I should be able to install the meet app as a shortcut on my device's home screen 
so that I can access the app quickly and easily.

## Scenario 1:
- Given the user is accessing the app on a mobile device
- When they choose to add a shortcut to the home screen
- Then the app should be installed as a shortcut for easy access.

## Scenario 2:
- Given the user has installed the shortcut on the home screen
- When they open the app from the shortcut
- Then the app should open to the main events page.

## Scenario 3:
- Given the user has installed the shortcut on the home screen
- When there is an update to the app
- Then the shortcut should remain functional and open the updated app.

## Feature 6: Display Charts Visualizing Event Details

1. As a user,
I should be able to see a chart displaying the number of upcoming events in each city 
so that I can easily understand the distribution of events.

## Scenario 1:
- Given the user is viewing the events page
- When they navigate to the charts section
- Then a chart should be displayed showing the number of upcoming events in each city.

## Scenario 2:
- Given the user is viewing the events page
- When they navigate to the charts section
- Then they should be able to switch between different types of charts (e.g., bar, pie, line).

## Scenario 3:
- Given the user is viewing the events page
- When they navigate to the charts section
- Then the chart should update dynamically as the user changes the event filter settings.

## Scenario 4:
- Given the user is viewing a chart
- When they tap on a specific city in the chart
- Then the app should display a list of events for that city.

## Scenario 5:
- Given the user is viewing a chart
- When they toggle a data series (e.g., upcoming events vs past events)
- Then the chart should update to reflect the selected data series.
