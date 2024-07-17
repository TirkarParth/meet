// src/mock-data.js

const mockData = [
    {
      kind: "calendar#event",
      etag: "etag_value_1",
      id: "1",
      status: "confirmed",
      htmlLink: "https://www.google.com/calendar/event?eid=1",
      summary: "Event 1",
      description: "Description for Event 1",
      location: "Location 1",
      start: {
        dateTime: "2024-07-01T10:00:00-07:00",
        timeZone: "America/Los_Angeles"
      },
      end: {
        dateTime: "2024-07-01T12:00:00-07:00",
        timeZone: "America/Los_Angeles"
      },
      attendees: [
        { email: "attendee1@example.com", responseStatus: "accepted" }
      ]
    },
    {
      kind: "calendar#event",
      etag: "etag_value_2",
      id: "2",
      status: "confirmed",
      htmlLink: "https://www.google.com/calendar/event?eid=2",
      summary: "Event 2",
      description: "Description for Event 2",
      location: "Location 2",
      start: {
        dateTime: "2024-07-02T14:00:00-07:00",
        timeZone: "America/Los_Angeles"
      },
      end: {
        dateTime: "2024-07-02T16:00:00-07:00",
        timeZone: "America/Los_Angeles"
      },
      attendees: [
        { email: "attendee2@example.com", responseStatus: "accepted" }
      ]
    }
  ];
  
  export default mockData;
  