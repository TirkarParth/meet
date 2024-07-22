const mockData = [
  {
    kind: 'calendar#event',
    etag: '"3181161784712000"',
    id: '4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-05-19T19:17:46.000Z',
    updated: '2020-05-27T12:01:32.356Z',
    summary: 'Learn JavaScript',
    description:
      'Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.',
    location: 'London, UK',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    start: {
      dateTime: '2020-05-19T16:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    end: {
      dateTime: '2020-05-19T17:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    recurringEventId: '4eahs9ghkhrvkld72hogu9ph3e',
    originalStartTime: {
      dateTime: '2020-05-19T16:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    iCalUID: '4eahs9ghkhrvkld72hogu9ph3e@google.com',
    sequence: 0,
    reminders: {
      useDefault: true,
    },
    eventType: 'default',
  },
  {
    "kind": "calendar#event",
    "etag": '"3181161784712001"',
    "id": "5fhvts4jklqowbc03rks7kl9v_20230715T130000Z",
    "status": "confirmed",
    "htmlLink": "https://www.google.com/calendar/event?eid=NXNoeXAzN2xqajdvb3diYzAzdGdvaGZnZmlfMjAyMzA3MTVUMTMwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
    "created": "2023-07-15T14:00:00.000Z",
    "updated": "2023-07-15T14:00:00.000Z",
    "summary": "AI and Machine Learning Workshop",
    "description": "Dive into the world of AI and machine learning with this interactive workshop. Discover how algorithms work and their applications in various industries.",
    "location": "San Francisco, CA",
    "creator": {
      "email": "techguru@techacademy.com",
      "self": true
    },
    "organizer": {
      "email": "techguru@techacademy.com",
      "self": true
    },
    "start": {
      "dateTime": "2023-07-15T09:00:00-07:00",
      "timeZone": "America/Los_Angeles"
    },
    "end": {
      "dateTime": "2023-07-15T12:00:00-07:00",
      "timeZone": "America/Los_Angeles"
    },
    "recurringEventId": "5fhvts4jklqowbc03rks7kl9v",
    "originalStartTime": {
      "dateTime": "2023-07-15T09:00:00-07:00",
      "timeZone": "America/Los_Angeles"
    },
    "iCalUID": "5fhvts4jklqowbc03rks7kl9v@google.com",
    "sequence": 0,
    "reminders": {
      "useDefault": true
    },
    "eventType": "default"
  },
  {
    "kind": "calendar#event",
    "etag": '"3181161784712002"',
    "id": "6jcnv7t9pylxzro44t6mbv75s_20230722T160000Z",
    "status": "confirmed",
    "htmlLink": "https://www.google.com/calendar/event?eid=NmpjbnY3dDlwY3l6enJvNDR0Nm1idjc1c19tMjAyMzA3MjJUMTYwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
    "created": "2023-07-22T17:00:00.000Z",
    "updated": "2023-07-22T17:00:00.000Z",
    "summary": "Digital Marketing Strategies",
    "description": "Learn the latest trends and strategies in digital marketing. This session covers SEO, content marketing, and social media strategies.",
    "location": "New York, NY",
    "creator": {
      "email": "marketingpro@digitalhub.com",
      "self": true
    },
    "organizer": {
      "email": "marketingpro@digitalhub.com",
      "self": true
    },
    "start": {
      "dateTime": "2023-07-22T10:00:00-04:00",
      "timeZone": "America/New_York"
    },
    "end": {
      "dateTime": "2023-07-22T13:00:00-04:00",
      "timeZone": "America/New_York"
    },
    "recurringEventId": "6jcnv7t9pylxzro44t6mbv75s",
    "originalStartTime": {
      "dateTime": "2023-07-22T10:00:00-04:00",
      "timeZone": "America/New_York"
    },
    "iCalUID": "6jcnv7t9pylxzro44t6mbv75s@google.com",
    "sequence": 0,
    "reminders": {
      "useDefault": true
    },
    "eventType": "default"
  },
  {
    "kind": "calendar#event",
    "etag": '"3181161784712003"',
    "id": "7ndpw8sfjqrkgdza45vhlkp8o_20230730T180000Z",
    "status": "confirmed",
    "htmlLink": "https://www.google.com/calendar/event?eid=N25kcHc4c2ZqcmtnbGp6YTQ1dmhsa3A4b19tMjAyMzA3MzBUMTgwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
    "created": "2023-07-30T19:00:00.000Z",
    "updated": "2023-07-30T19:00:00.000Z",
    "summary": "Art and Creativity Symposium",
    "description": "Join us for an inspiring symposium on art and creativity. Engage with artists, attend workshops, and explore various forms of creative expression.",
    "location": "Paris, France",
    "creator": {
      "email": "artlover@creativeworld.com",
      "self": true
    },
    "organizer": {
      "email": "artlover@creativeworld.com",
      "self": true
    },
    "start": {
      "dateTime": "2023-07-30T11:00:00+02:00",
      "timeZone": "Europe/Paris"
    },
    "end": {
      "dateTime": "2023-07-30T14:00:00+02:00",
      "timeZone": "Europe/Paris"
    },
    "recurringEventId": "7ndpw8sfjqrkgdza45vhlkp8o",
    "originalStartTime": {
      "dateTime": "2023-07-30T11:00:00+02:00",
      "timeZone": "Europe/Paris"
    },
    "iCalUID": "7ndpw8sfjqrkgdza45vhlkp8o@google.com",
    "sequence": 0,
    "reminders": {
      "useDefault": true
    },
    "eventType": "default"
  },
  {
    "kind": "calendar#event",
    "etag": '"3181161784712004"',
    "id": "8qrlp9r6cjnvqez76t7fvlq20_20230810T140000Z",
    "status": "confirmed",
    "htmlLink": "https://www.google.com/calendar/event?eid=OHEybHA5cjZjazRvdzZ0N2Z2cS1fc2VhYXJ5YXJfMjAyMzA4MTBUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
    "created": "2023-08-10T15:00:00.000Z",
    "updated": "2023-08-10T15:00:00.000Z",
    "summary": "Cooking with Fresh Ingredients",
    "description": "Explore the art of cooking with fresh, locally sourced ingredients. Participate in hands-on cooking sessions and learn new recipes.",
    "location": "Rome, Italy",
    "creator": {
      "email": "chef@italianfood.com",
      "self": true
    },
    "organizer": {
      "email": "chef@italianfood.com",
      "self": true
    },
    "start": {
      "dateTime": "2023-08-10T10:00:00+02:00",
      "timeZone": "Europe/Rome"
    },
    "end": {
      "dateTime": "2023-08-10T13:00:00+02:00",
      "timeZone": "Europe/Rome"
    },
    "recurringEventId": "8qrlp9r6cjnvqez76t7fvlq20",
    "originalStartTime": {
      "dateTime": "2023-08-10T10:00:00+02:00",
      "timeZone": "Europe/Rome"
    },
    "iCalUID": "8qrlp9r6cjnvqez76t7fvlq20@google.com",
    "sequence": 0,
    "reminders": {
      "useDefault": true
    },
    "eventType": "default"
  },
  {
    "kind": "calendar#event",
    "etag": '"3181161784712005"',
    "id": "9rmtx3lcqpvnbuk74i5wjsb4e_20230825T110000Z",
    "status": "confirmed",
    "htmlLink": "https://www.google.com/calendar/event?eid=OXJtdHgzbGNxcnZubnVrNzRpNXdqc2I0ZV9tMjAyMzA4MjVUMTEwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
    "created": "2023-08-25T12:00:00.000Z",
    "updated": "2023-08-25T12:00:00.000Z",
    "summary": "History of Architecture Lecture",
    "description": "Join us for an enlightening lecture on the history of architecture, covering major architectural styles and their impact on modern design.",
    "location": "Berlin, Germany",
    "creator": {
      "email": "archhist@designschool.com",
      "self": true
    },
    "organizer": {
      "email": "archhist@designschool.com",
      "self": true
    },
    "start": {
      "dateTime": "2023-08-25T13:00:00+02:00",
      "timeZone": "Europe/Berlin"
    },
    "end": {
      "dateTime": "2023-08-25T16:00:00+02:00",
      "timeZone": "Europe/Berlin"
    },
    "recurringEventId": "9rmtx3lcqpvnbuk74i5wjsb4e",
    "originalStartTime": {
      "dateTime": "2023-08-25T13:00:00+02:00",
      "timeZone": "Europe/Berlin"
    },
    "iCalUID": "9rmtx3lcqpvnbuk74i5wjsb4e@google.com",
    "sequence": 0,
    "reminders": {
      "useDefault": true
    },
    "eventType": "default"
  },
  {
    "kind": "calendar#event",
    "etag": '"3181161784712006"',
    "id": "ar5k7qtmrdxoc7lhm6w5bzm8_20230905T150000Z",
    "status": "confirmed",
    "htmlLink": "https://www.google.com/calendar/event?eid=YXI1azdxdG1yZHhvYzdsbG03cGJ6bThfMjAyMzA5MDVUMTUwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
    "created": "2023-09-05T16:00:00.000Z",
    "updated": "2023-09-05T16:00:00.000Z",
    "summary": "Modern Art Exhibition",
    "description": "Experience the latest trends in modern art at this exclusive exhibition. Meet artists and view a diverse collection of artworks.",
    "location": "Tokyo, Japan",
    "creator": {
      "email": "artcurator@artworld.com",
      "self": true
    },
    "organizer": {
      "email": "artcurator@artworld.com",
      "self": true
    },
    "start": {
      "dateTime": "2023-09-05T18:00:00+09:00",
      "timeZone": "Asia/Tokyo"
    },
    "end": {
      "dateTime": "2023-09-05T21:00:00+09:00",
      "timeZone": "Asia/Tokyo"
    },
    "recurringEventId": "ar5k7qtmrdxoc7lhm6w5bzm8",
    "originalStartTime": {
      "dateTime": "2023-09-05T18:00:00+09:00",
      "timeZone": "Asia/Tokyo"
    },
    "iCalUID": "ar5k7qtmrdxoc7lhm6w5bzm8@google.com",
    "sequence": 0,
    "reminders": {
      "useDefault": true
    },
    "eventType": "default"
  },
  {
    "kind": "calendar#event",
    "etag": '"3181161784712007"',
    "id": "bq6p9ytvudfwqen5zslzoh6n_20230918T120000Z",
    "status": "confirmed",
    "htmlLink": "https://www.google.com/calendar/event?eid=YnE2cDledHZ1ZGZxZW45enNseWJoaDZlXzIwMjMwOTE4VDEyMDAwMFoiBmd1bGxzdGFja3dlYgpkZXZAY2FyZWVyZm91bmRyeS5jb20",
    "created": "2023-09-18T13:00:00.000Z",
    "updated": "2023-09-18T13:00:00.000Z",
    "summary": "Sustainable Energy Seminar",
    "description": "Learn about the latest innovations in sustainable energy and how they are shaping the future of our planet.",
    "location": "Sydney, Australia",
    "creator": {
      "email": "energyexpert@greentech.com",
      "self": true
    },
    "organizer": {
      "email": "energyexpert@greentech.com",
      "self": true
    },
    "start": {
      "dateTime": "2023-09-18T22:00:00+10:00",
      "timeZone": "Australia/Sydney"
    },
    "end": {
      "dateTime": "2023-09-18T23:30:00+10:00",
      "timeZone": "Australia/Sydney"
    },
    "recurringEventId": "bq6p9ytvudfwqen5zslzoh6n",
    "originalStartTime": {
      "dateTime": "2023-09-18T22:00:00+10:00",
      "timeZone": "Australia/Sydney"
    },
    "iCalUID": "bq6p9ytvudfwqen5zslzoh6n@google.com",
    "sequence": 0,
    "reminders": {
      "useDefault": true
    },
    "eventType": "default"
  },
  {
    "kind": "calendar#event",
    "etag": '"3181161784712008"',
    "id": "cr7x8mv0hlpzyr2p4d7v3o5n_20230925T120000Z",
    "status": "confirmed",
    "htmlLink": "https://www.google.com/calendar/event?eid=Y3I3eDhtdjBocHp5eXIycDRkdjMwbzVfMjAyMzA5MjVUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
    "created": "2023-09-25T13:00:00.000Z",
    "updated": "2023-09-25T13:00:00.000Z",
    "summary": "Blockchain Technology Overview",
    "description": "Understand the fundamentals of blockchain technology, its applications, and its potential impact on various industries.",
    "location": "Toronto, Canada",
    "creator": {
      "email": "blockchain@techinsights.com",
      "self": true
    },
    "organizer": {
      "email": "blockchain@techinsights.com",
      "self": true
    },
    "start": {
      "dateTime": "2023-09-25T08:00:00-04:00",
      "timeZone": "America/Toronto"
    },
    "end": {
      "dateTime": "2023-09-25T11:00:00-04:00",
      "timeZone": "America/Toronto"
    },
    "recurringEventId": "cr7x8mv0hlpzyr2p4d7v3o5n",
    "originalStartTime": {
      "dateTime": "2023-09-25T08:00:00-04:00",
      "timeZone": "America/Toronto"
    },
    "iCalUID": "cr7x8mv0hlpzyr2p4d7v3o5n@google.com",
    "sequence": 0,
    "reminders": {
      "useDefault": true
    },
    "eventType": "default"
  },
  {
    "kind": "calendar#event",
    "etag": '"3181161784712009"',
    "id": "dsgk8xlbtr6ncohv7zrk0k4e_20231001T090000Z",
    "status": "confirmed",
    "htmlLink": "https://www.google.com/calendar/event?eid=ZHNrOHhscnRrNm5jb2h2N3p0aDhrMDBfMjAyMzEwMDFUMDkwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
    "created": "2023-10-01T10:00:00.000Z",
    "updated": "2023-10-01T10:00:00.000Z",
    "summary": "Startup Funding Strategies",
    "description": "Gain insights into successful startup funding strategies from industry experts. Learn about venture capital, crowdfunding, and more.",
    "location": "Vancouver, Canada",
    "creator": {
      "email": "startupguru@bizventures.com",
      "self": true
    },
    "organizer": {
      "email": "startupguru@bizventures.com",
      "self": true
    },
    "start": {
      "dateTime": "2023-10-01T05:00:00-07:00",
      "timeZone": "America/Vancouver"
    },
    "end": {
      "dateTime": "2023-10-01T08:00:00-07:00",
      "timeZone": "America/Vancouver"
    },
    "recurringEventId": "dsgk8xlbtr6ncohv7zrk0k4e",
    "originalStartTime": {
      "dateTime": "2023-10-01T05:00:00-07:00",
      "timeZone": "America/Vancouver"
    },
    "iCalUID": "dsgk8xlbtr6ncohv7zrk0k4e@google.com",
    "sequence": 0,
    "reminders": {
      "useDefault": true
    },
    "eventType": "default"
  },
  {
    "kind": "calendar#event",
    "etag": '"3181161784712010"',
    "id": "et5j9rwslpkw5hkm6j7t2zqo_20231010T150000Z",
    "status": "confirmed",
    "htmlLink": "https://www.google.com/calendar/event?eid=ZXQ1ajlyd3NscGt3NWhrbTZqN3QyeWFvMF9tMjAyMzEwMTBUMTUwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
    "created": "2023-10-10T16:00:00.000Z",
    "updated": "2023-10-10T16:00:00.000Z",
    "summary": "Health and Wellness Fair",
    "description": "Explore the latest in health and wellness with various exhibitors and speakers. Topics include nutrition, fitness, and mental health.",
    "location": "Dubai, UAE",
    "creator": {
      "email": "wellness@healthtoday.com",
      "self": true
    },
    "organizer": {
      "email": "wellness@healthtoday.com",
      "self": true
    },
    "start": {
      "dateTime": "2023-10-10T18:00:00+04:00",
      "timeZone": "Asia/Dubai"
    },
    "end": {
      "dateTime": "2023-10-10T21:00:00+04:00",
      "timeZone": "Asia/Dubai"
    },
    "recurringEventId": "et5j9rwslpkw5hkm6j7t2zqo",
    "originalStartTime": {
      "dateTime": "2023-10-10T18:00:00+04:00",
      "timeZone": "Asia/Dubai"
    },
    "iCalUID": "et5j9rwslpkw5hkm6j7t2zqo@google.com",
    "sequence": 0,
    "reminders": {
      "useDefault": true
    },
    "eventType": "default"
  },
  {
    "kind": "calendar#event",
    "etag": '"3181161784712011"',
    "id": "fnt4k7m4pqw8c3z9txk6vwlv_20231015T170000Z",
    "status": "confirmed",
    "htmlLink": "https://www.google.com/calendar/event?eid=Zm50NGs3bTdwOGMzem5odDZXb3Y4bF9tMjAyMzEwMTVUMTcwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
    "created": "2023-10-15T18:00:00.000Z",
    "updated": "2023-10-15T18:00:00.000Z",
    "summary": "Tech Innovations Conference",
    "description": "Discover the latest technological innovations and trends at this conference. Network with tech leaders and innovators.",
    "location": "Los Angeles, CA",
    "creator": {
      "email": "techinnovator@techworld.com",
      "self": true
    },
    "organizer": {
      "email": "techinnovator@techworld.com",
      "self": true
    },
    "start": {
      "dateTime": "2023-10-15T10:00:00-07:00",
      "timeZone": "America/Los_Angeles"
    },
    "end": {
      "dateTime": "2023-10-15T13:00:00-07:00",
      "timeZone": "America/Los_Angeles"
    },
    "recurringEventId": "fnt4k7m4pqw8c3z9txk6vwlv",
    "originalStartTime": {
      "dateTime": "2023-10-15T10:00:00-07:00",
      "timeZone": "America/Los_Angeles"
    },
    "iCalUID": "fnt4k7m4pqw8c3z9txk6vwlv@google.com",
    "sequence": 0,
    "reminders": {
      "useDefault": true
    },
    "eventType": "default"
  },
  {
    "kind": "calendar#event",
    "etag": '"3181161784712012"',
    "id": "gq9w8hmc3rjs6vdb9s5xtp8n_20231020T130000Z",
    "status": "confirmed",
    "htmlLink": "https://www.google.com/calendar/event?eid=Z3E5dzhobWMzcmpzNnZkYjlzNWh4dHA4bl9tMjAyMzEwMjBUMjMwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
    "created": "2023-10-20T14:00:00.000Z",
    "updated": "2023-10-20T14:00:00.000Z",
    "summary": "Urban Gardening Tips",
    "description": "Learn how to create and maintain a garden in an urban environment. Get practical advice on plants, soil, and urban garden design.",
    "location": "Hong Kong, China",
    "creator": {
      "email": "gardening@urbanlife.com",
      "self": true
    },
    "organizer": {
      "email": "gardening@urbanlife.com",
      "self": true
    },
    "start": {
      "dateTime": "2023-10-20T21:00:00+08:00",
      "timeZone": "Asia/Hong_Kong"
    },
    "end": {
      "dateTime": "2023-10-20T23:00:00+08:00",
      "timeZone": "Asia/Hong_Kong"
    },
    "recurringEventId": "gq9w8hmc3rjs6vdb9s5xtp8n",
    "originalStartTime": {
      "dateTime": "2023-10-20T21:00:00+08:00",
      "timeZone": "Asia/Hong_Kong"
    },
    "iCalUID": "gq9w8hmc3rjs6vdb9s5xtp8n@google.com",
    "sequence": 0,
    "reminders": {
      "useDefault": true
    },
    "eventType": "default"
  },
  {
    "kind": "calendar#event",
    "etag": '"3181161784712013"',
    "id": "hq8r7k3p5jcowzlv4v5blm2v_20231028T110000Z",
    "status": "confirmed",
    "htmlLink": "https://www.google.com/calendar/event?eid=aHE4cjdrczNwNmxjb3d6bHY1djVfbGFzdF9tMjAyMzEwMjhUMTEwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
    "created": "2023-10-28T12:00:00.000Z",
    "updated": "2023-10-28T12:00:00.000Z",
    "summary": "AI and Machine Learning Symposium",
    "description": "Join experts in AI and machine learning for a symposium on the latest advancements and future directions in these fields.",
    "location": "San Francisco, CA",
    "creator": {
      "email": "ai@techforum.com",
      "self": true
    },
    "organizer": {
      "email": "ai@techforum.com",
      "self": true
    },
    "start": {
      "dateTime": "2023-10-28T04:00:00-07:00",
      "timeZone": "America/Los_Angeles"
    },
    "end": {
      "dateTime": "2023-10-28T07:00:00-07:00",
      "timeZone": "America/Los_Angeles"
    },
    "recurringEventId": "hq8r7k3p5jcowzlv4v5blm2v",
    "originalStartTime": {
      "dateTime": "2023-10-28T04:00:00-07:00",
      "timeZone": "America/Los_Angeles"
    },
    "iCalUID": "hq8r7k3p5jcowzlv4v5blm2v@google.com",
    "sequence": 0,
    "reminders": {
      "useDefault": true
    },
    "eventType": "default"
  },
  {
    kind: 'calendar#event',
    etag: '"3181159875584000"',
    id: '3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-05-19T19:14:30.000Z',
    updated: '2020-05-27T11:45:37.792Z',
    summary: 'React is Fun',
    description:
      'Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ',
    location: 'Berlin, Germany',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    start: {
      dateTime: '2020-05-20T14:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    end: {
      dateTime: '2020-05-20T15:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    recurringEventId: '3qtd6uscq4tsi6gc7nmmtpqlct',
    originalStartTime: {
      dateTime: '2020-05-20T14:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    iCalUID: '3qtd6uscq4tsi6gc7nmmtpqlct@google.com',
    sequence: 0,
    reminders: {
      useDefault: true,
    },
    eventType: 'default',
  },
  {
    kind: 'calendar#event',
    etag: '"3181161784712000"',
    id: '4eahs9ghkhrvkld72hogu9ph3e_20200521T140000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MjFUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-05-19T19:17:46.000Z',
    updated: '2020-05-27T12:01:32.356Z',
    summary: 'Learn JavaScript',
    description:
      'Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.',
    location: 'London, UK',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    start: {
      dateTime: '2020-05-21T16:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    end: {
      dateTime: '2020-05-21T17:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    recurringEventId: '4eahs9ghkhrvkld72hogu9ph3e',
    originalStartTime: {
      dateTime: '2020-05-21T16:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    iCalUID: '4eahs9ghkhrvkld72hogu9ph3e@google.com',
    sequence: 0,
    reminders: {
      useDefault: true,
    },
    eventType: 'default',
  },
  {
    kind: 'calendar#event',
    etag: '"3181159875584000"',
    id: '3qtd6uscq4tsi6gc7nmmtpqlct_20200522T120000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjJUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-05-19T19:14:30.000Z',
    updated: '2020-05-27T11:45:37.792Z',
    summary: 'React is Fun',
    description:
      'Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ',
    location: 'Berlin, Germany',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    start: {
      dateTime: '2020-05-22T14:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    end: {
      dateTime: '2020-05-22T15:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    recurringEventId: '3qtd6uscq4tsi6gc7nmmtpqlct',
    originalStartTime: {
      dateTime: '2020-05-22T14:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    iCalUID: '3qtd6uscq4tsi6gc7nmmtpqlct@google.com',
    sequence: 0,
    reminders: {
      useDefault: true,
    },
    eventType: 'default',
  },
  {
    kind: 'calendar#event',
    etag: '"3181161784712000"',
    id: '4eahs9ghkhrvkld72hogu9ph3e_20200523T140000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MjNUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-05-19T19:17:46.000Z',
    updated: '2020-05-27T12:01:32.356Z',
    summary: 'Learn JavaScript',
    description:
      'Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.',
    location: 'London, UK',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    start: {
      dateTime: '2020-05-23T16:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    end: {
      dateTime: '2020-05-23T17:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    recurringEventId: '4eahs9ghkhrvkld72hogu9ph3e',
    originalStartTime: {
      dateTime: '2020-05-23T16:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    iCalUID: '4eahs9ghkhrvkld72hogu9ph3e@google.com',
    sequence: 0,
    reminders: {
      useDefault: true,
    },
    eventType: 'default',
  },
  {
    kind: 'calendar#event',
    etag: '"3181159875584000"',
    id: '3qtd6uscq4tsi6gc7nmmtpqlct_20200525T120000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjVUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-05-19T19:14:30.000Z',
    updated: '2020-05-27T11:45:37.792Z',
    summary: 'React is Fun',
    description:
      'Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ',
    location: 'Berlin, Germany',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    start: {
      dateTime: '2020-05-25T14:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    end: {
      dateTime: '2020-05-25T15:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    recurringEventId: '3qtd6uscq4tsi6gc7nmmtpqlct',
    originalStartTime: {
      dateTime: '2020-05-25T14:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    iCalUID: '3qtd6uscq4tsi6gc7nmmtpqlct@google.com',
    sequence: 0,
    reminders: {
      useDefault: true,
    },
    eventType: 'default',
  },
  {
    kind: 'calendar#event',
    etag: '"3181161784712000"',
    id: '4eahs9ghkhrvkld72hogu9ph3e_20200526T140000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MjZUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-05-19T19:17:46.000Z',
    updated: '2020-05-27T12:01:32.356Z',
    summary: 'Learn JavaScript',
    description:
      'Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.',
    location: 'London, UK',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    start: {
      dateTime: '2020-05-26T16:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    end: {
      dateTime: '2020-05-26T17:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    recurringEventId: '4eahs9ghkhrvkld72hogu9ph3e',
    originalStartTime: {
      dateTime: '2020-05-26T16:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    iCalUID: '4eahs9ghkhrvkld72hogu9ph3e@google.com',
    sequence: 0,
    reminders: {
      useDefault: true,
    },
    eventType: 'default',
  },
  {
    kind: 'calendar#event',
    etag: '"3181159875584000"',
    id: '3qtd6uscq4tsi6gc7nmmtpqlct_20200527T120000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjdUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-05-19T19:14:30.000Z',
    updated: '2020-05-27T11:45:37.792Z',
    summary: 'React is Fun',
    description:
      'Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ',
    location: 'Berlin, Germany',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    start: {
      dateTime: '2020-05-27T14:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    end: {
      dateTime: '2020-05-27T15:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    recurringEventId: '3qtd6uscq4tsi6gc7nmmtpqlct',
    originalStartTime: {
      dateTime: '2020-05-27T14:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    iCalUID: '3qtd6uscq4tsi6gc7nmmtpqlct@google.com',
    sequence: 0,
    reminders: {
      useDefault: true,
    },
    eventType: 'default',
  },
  {
    kind: 'calendar#event',
    etag: '"3181161784712000"',
    id: '4eahs9ghkhrvkld72hogu9ph3e_20200528T140000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MjhUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-05-19T19:17:46.000Z',
    updated: '2020-05-27T12:01:32.356Z',
    summary: 'Learn JavaScript',
    description:
      'Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.',
    location: 'London, UK',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    start: {
      dateTime: '2020-05-28T16:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    end: {
      dateTime: '2020-05-28T17:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    recurringEventId: '4eahs9ghkhrvkld72hogu9ph3e',
    originalStartTime: {
      dateTime: '2020-05-28T16:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    iCalUID: '4eahs9ghkhrvkld72hogu9ph3e@google.com',
    sequence: 0,
    reminders: {
      useDefault: true,
    },
    eventType: 'default',
  },
  {
    kind: 'calendar#event',
    etag: '"3181159875584000"',
    id: '3qtd6uscq4tsi6gc7nmmtpqlct_20200529T120000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjlUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-05-19T19:14:30.000Z',
    updated: '2020-05-27T11:45:37.792Z',
    summary: 'React is Fun',
    description:
      'Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ',
    location: 'Berlin, Germany',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    start: {
      dateTime: '2020-05-29T14:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    end: {
      dateTime: '2020-05-29T15:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    recurringEventId: '3qtd6uscq4tsi6gc7nmmtpqlct',
    originalStartTime: {
      dateTime: '2020-05-29T14:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    iCalUID: '3qtd6uscq4tsi6gc7nmmtpqlct@google.com',
    sequence: 0,
    reminders: {
      useDefault: true,
    },
    eventType: 'default',
  },
  {
    kind: 'calendar#event',
    etag: '"3181161784712000"',
    id: '4eahs9ghkhrvkld72hogu9ph3e_20200530T140000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MzBUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-05-19T19:17:46.000Z',
    updated: '2020-05-27T12:01:32.356Z',
    summary: 'Learn JavaScript',
    description:
      'Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.',
    location: 'London, UK',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    start: {
      dateTime: '2020-05-30T16:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    end: {
      dateTime: '2020-05-30T17:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    recurringEventId: '4eahs9ghkhrvkld72hogu9ph3e',
    originalStartTime: {
      dateTime: '2020-05-30T16:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    iCalUID: '4eahs9ghkhrvkld72hogu9ph3e@google.com',
    sequence: 0,
    reminders: {
      useDefault: true,
    },
    eventType: 'default',
  },
  {
    kind: 'calendar#event',
    etag: '"3181159875584000"',
    id: '3qtd6uscq4tsi6gc7nmmtpqlct_20200601T120000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA2MDFUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-05-19T19:14:30.000Z',
    updated: '2020-05-27T11:45:37.792Z',
    summary: 'React is Fun',
    description:
      'Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ',
    location: 'Berlin, Germany',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    start: {
      dateTime: '2020-06-01T14:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    end: {
      dateTime: '2020-06-01T15:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    recurringEventId: '3qtd6uscq4tsi6gc7nmmtpqlct',
    originalStartTime: {
      dateTime: '2020-06-01T14:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    iCalUID: '3qtd6uscq4tsi6gc7nmmtpqlct@google.com',
    sequence: 0,
    reminders: {
      useDefault: true,
    },
    eventType: 'default',
  },
  {
    kind: 'calendar#event',
    etag: '"3181161784712000"',
    id: '4eahs9ghkhrvkld72hogu9ph3e_20200602T140000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA2MDJUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-05-19T19:17:46.000Z',
    updated: '2020-05-27T12:01:32.356Z',
    summary: 'Learn JavaScript',
    description:
      'Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.',
    location: 'London, UK',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    start: {
      dateTime: '2020-06-02T16:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    end: {
      dateTime: '2020-06-02T17:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    recurringEventId: '4eahs9ghkhrvkld72hogu9ph3e',
    originalStartTime: {
      dateTime: '2020-06-02T16:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    iCalUID: '4eahs9ghkhrvkld72hogu9ph3e@google.com',
    sequence: 0,
    reminders: {
      useDefault: true,
    },
    eventType: 'default',
  },
  {
    kind: 'calendar#event',
    etag: '"3181159875584000"',
    id: '3qtd6uscq4tsi6gc7nmmtpqlct_20200603T120000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA2MDNUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-05-19T19:14:30.000Z',
    updated: '2020-05-27T11:45:37.792Z',
    summary: 'React is Fun',
    description:
      'Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ',
    location: 'Berlin, Germany',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    start: {
      dateTime: '2020-06-03T14:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    end: {
      dateTime: '2020-06-03T15:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    recurringEventId: '3qtd6uscq4tsi6gc7nmmtpqlct',
    originalStartTime: {
      dateTime: '2020-06-03T14:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    iCalUID: '3qtd6uscq4tsi6gc7nmmtpqlct@google.com',
    sequence: 0,
    reminders: {
      useDefault: true,
    },
    eventType: 'default',
  },
  {
    kind: 'calendar#event',
    etag: '"3181161784712000"',
    id: '4eahs9ghkhrvkld72hogu9ph3e_20200604T140000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA2MDRUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-05-19T19:17:46.000Z',
    updated: '2020-05-27T12:01:32.356Z',
    summary: 'Learn JavaScript',
    description:
      'Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.',
    location: 'London, UK',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    start: {
      dateTime: '2020-06-04T16:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    end: {
      dateTime: '2020-06-04T17:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    recurringEventId: '4eahs9ghkhrvkld72hogu9ph3e',
    originalStartTime: {
      dateTime: '2020-06-04T16:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    iCalUID: '4eahs9ghkhrvkld72hogu9ph3e@google.com',
    sequence: 0,
    reminders: {
      useDefault: true,
    },
    eventType: 'default',
  },
  {
    kind: 'calendar#event',
    etag: '"3181159875584000"',
    id: '3qtd6uscq4tsi6gc7nmmtpqlct_20200605T120000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA2MDVUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-05-19T19:14:30.000Z',
    updated: '2020-05-27T11:45:37.792Z',
    summary: 'React is Fun',
    description:
      'Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ',
    location: 'Berlin, Germany',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    start: {
      dateTime: '2020-06-05T14:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    end: {
      dateTime: '2020-06-05T15:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    recurringEventId: '3qtd6uscq4tsi6gc7nmmtpqlct',
    originalStartTime: {
      dateTime: '2020-06-05T14:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    iCalUID: '3qtd6uscq4tsi6gc7nmmtpqlct@google.com',
    sequence: 0,
    reminders: {
      useDefault: true,
    },
    eventType: 'default',
  },
  {
    kind: 'calendar#event',
    etag: '"3181161784712000"',
    id: '4eahs9ghkhrvkld72hogu9ph3e_20200606T140000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA2MDZUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-05-19T19:17:46.000Z',
    updated: '2020-05-27T12:01:32.356Z',
    summary: 'Learn JavaScript',
    description:
      'Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.',
    location: 'London, UK',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    start: {
      dateTime: '2020-06-06T16:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    end: {
      dateTime: '2020-06-06T17:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    recurringEventId: '4eahs9ghkhrvkld72hogu9ph3e',
    originalStartTime: {
      dateTime: '2020-06-06T16:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    iCalUID: '4eahs9ghkhrvkld72hogu9ph3e@google.com',
    sequence: 0,
    reminders: {
      useDefault: true,
    },
    eventType: 'default',
  },
  {
    kind: 'calendar#event',
    etag: '"3181159875584000"',
    id: '3qtd6uscq4tsi6gc7nmmtpqlct_20200608T120000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA2MDhUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-05-19T19:14:30.000Z',
    updated: '2020-05-27T11:45:37.792Z',
    summary: 'React is Fun',
    description:
      'Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ',
    location: 'Berlin, Germany',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    start: {
      dateTime: '2020-06-08T14:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    end: {
      dateTime: '2020-06-08T15:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    recurringEventId: '3qtd6uscq4tsi6gc7nmmtpqlct',
    originalStartTime: {
      dateTime: '2020-06-08T14:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    iCalUID: '3qtd6uscq4tsi6gc7nmmtpqlct@google.com',
    sequence: 0,
    reminders: {
      useDefault: true,
    },
    eventType: 'default',
  },
  {
    kind: 'calendar#event',
    etag: '"3181161784712000"',
    id: '4eahs9ghkhrvkld72hogu9ph3e_20200609T140000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA2MDlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-05-19T19:17:46.000Z',
    updated: '2020-05-27T12:01:32.356Z',
    summary: 'Learn JavaScript',
    description:
      'Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.',
    location: 'London, UK',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    start: {
      dateTime: '2020-06-09T16:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    end: {
      dateTime: '2020-06-09T17:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    recurringEventId: '4eahs9ghkhrvkld72hogu9ph3e',
    originalStartTime: {
      dateTime: '2020-06-09T16:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    iCalUID: '4eahs9ghkhrvkld72hogu9ph3e@google.com',
    sequence: 0,
    reminders: {
      useDefault: true,
    },
    eventType: 'default',
  },
  {
    kind: 'calendar#event',
    etag: '"3181159875584000"',
    id: '3qtd6uscq4tsi6gc7nmmtpqlct_20200610T120000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA2MTBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-05-19T19:14:30.000Z',
    updated: '2020-05-27T11:45:37.792Z',
    summary: 'React is Fun',
    description:
      'Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ',
    location: 'Berlin, Germany',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    start: {
      dateTime: '2020-06-10T14:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    end: {
      dateTime: '2020-06-10T15:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    recurringEventId: '3qtd6uscq4tsi6gc7nmmtpqlct',
    originalStartTime: {
      dateTime: '2020-06-10T14:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    iCalUID: '3qtd6uscq4tsi6gc7nmmtpqlct@google.com',
    sequence: 0,
    reminders: {
      useDefault: true,
    },
    eventType: 'default',
  },
  {
    kind: 'calendar#event',
    etag: '"3181161784712000"',
    id: '4eahs9ghkhrvkld72hogu9ph3e_20200611T140000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA2MTFUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-05-19T19:17:46.000Z',
    updated: '2020-05-27T12:01:32.356Z',
    summary: 'Learn JavaScript',
    description:
      'Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.',
    location: 'London, UK',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    start: {
      dateTime: '2020-06-11T16:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    end: {
      dateTime: '2020-06-11T17:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    recurringEventId: '4eahs9ghkhrvkld72hogu9ph3e',
    originalStartTime: {
      dateTime: '2020-06-11T16:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    iCalUID: '4eahs9ghkhrvkld72hogu9ph3e@google.com',
    sequence: 0,
    reminders: {
      useDefault: true,
    },
    eventType: 'default',
  },
  {
    kind: 'calendar#event',
    etag: '"3181159875584000"',
    id: '3qtd6uscq4tsi6gc7nmmtpqlct_20200612T120000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA2MTJUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-05-19T19:14:30.000Z',
    updated: '2020-05-27T11:45:37.792Z',
    summary: 'React is Fun',
    description:
      'Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ',
    location: 'Berlin, Germany',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    start: {
      dateTime: '2020-06-12T14:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    end: {
      dateTime: '2020-06-12T15:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    recurringEventId: '3qtd6uscq4tsi6gc7nmmtpqlct',
    originalStartTime: {
      dateTime: '2020-06-12T14:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    iCalUID: '3qtd6uscq4tsi6gc7nmmtpqlct@google.com',
    sequence: 0,
    reminders: {
      useDefault: true,
    },
    eventType: 'default',
  },
  {
    kind: 'calendar#event',
    etag: '"3181161784712000"',
    id: '4eahs9ghkhrvkld72hogu9ph3e_20200613T140000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA2MTNUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-05-19T19:17:46.000Z',
    updated: '2020-05-27T12:01:32.356Z',
    summary: 'Learn JavaScript',
    description:
      'Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.',
    location: 'London, UK',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    start: {
      dateTime: '2020-06-13T16:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    end: {
      dateTime: '2020-06-13T17:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    recurringEventId: '4eahs9ghkhrvkld72hogu9ph3e',
    originalStartTime: {
      dateTime: '2020-06-13T16:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    iCalUID: '4eahs9ghkhrvkld72hogu9ph3e@google.com',
    sequence: 0,
    reminders: {
      useDefault: true,
    },
    eventType: 'default',
  },
  {
    kind: 'calendar#event',
    etag: '"3181159875584000"',
    id: '3qtd6uscq4tsi6gc7nmmtpqlct_20200615T120000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA2MTVUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-05-19T19:14:30.000Z',
    updated: '2020-05-27T11:45:37.792Z',
    summary: 'React is Fun',
    description:
      'Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ',
    location: 'Berlin, Germany',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    start: {
      dateTime: '2020-06-15T14:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    end: {
      dateTime: '2020-06-15T15:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    recurringEventId: '3qtd6uscq4tsi6gc7nmmtpqlct',
    originalStartTime: {
      dateTime: '2020-06-15T14:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    iCalUID: '3qtd6uscq4tsi6gc7nmmtpqlct@google.com',
    sequence: 0,
    reminders: {
      useDefault: true,
    },
    eventType: 'default',
  },
  {
    kind: 'calendar#event',
    etag: '"3181161784712000"',
    id: '4eahs9ghkhrvkld72hogu9ph3e_20200616T140000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA2MTZUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-05-19T19:17:46.000Z',
    updated: '2020-05-27T12:01:32.356Z',
    summary: 'Learn JavaScript',
    description:
      'Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.',
    location: 'London, UK',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    start: {
      dateTime: '2020-06-16T16:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    end: {
      dateTime: '2020-06-16T17:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    recurringEventId: '4eahs9ghkhrvkld72hogu9ph3e',
    originalStartTime: {
      dateTime: '2020-06-16T16:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    iCalUID: '4eahs9ghkhrvkld72hogu9ph3e@google.com',
    sequence: 0,
    reminders: {
      useDefault: true,
    },
    eventType: 'default',
  },
  {
    kind: 'calendar#event',
    etag: '"3181159875584000"',
    id: '3qtd6uscq4tsi6gc7nmmtpqlct_20200617T120000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA2MTdUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-05-19T19:14:30.000Z',
    updated: '2020-05-27T11:45:37.792Z',
    summary: 'React is Fun',
    description:
      'Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ',
    location: 'Berlin, Germany',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    start: {
      dateTime: '2020-06-17T14:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    end: {
      dateTime: '2020-06-17T15:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    recurringEventId: '3qtd6uscq4tsi6gc7nmmtpqlct',
    originalStartTime: {
      dateTime: '2020-06-17T14:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    iCalUID: '3qtd6uscq4tsi6gc7nmmtpqlct@google.com',
    sequence: 0,
    reminders: {
      useDefault: true,
    },
    eventType: 'default',
  },
  {
    kind: 'calendar#event',
    etag: '"3181161784712000"',
    id: '4eahs9ghkhrvkld72hogu9ph3e_20200618T140000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA2MThUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-05-19T19:17:46.000Z',
    updated: '2020-05-27T12:01:32.356Z',
    summary: 'Learn JavaScript',
    description:
      'Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.',
    location: 'London, UK',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    start: {
      dateTime: '2020-06-18T16:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    end: {
      dateTime: '2020-06-18T17:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    recurringEventId: '4eahs9ghkhrvkld72hogu9ph3e',
    originalStartTime: {
      dateTime: '2020-06-18T16:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    iCalUID: '4eahs9ghkhrvkld72hogu9ph3e@google.com',
    sequence: 0,
    reminders: {
      useDefault: true,
    },
    eventType: 'default',
  },
  {
    kind: 'calendar#event',
    etag: '"3181159875584000"',
    id: '3qtd6uscq4tsi6gc7nmmtpqlct_20200619T120000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA2MTlUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-05-19T19:14:30.000Z',
    updated: '2020-05-27T11:45:37.792Z',
    summary: 'React is Fun',
    description:
      'Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ',
    location: 'Berlin, Germany',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    start: {
      dateTime: '2020-06-19T14:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    end: {
      dateTime: '2020-06-19T15:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    recurringEventId: '3qtd6uscq4tsi6gc7nmmtpqlct',
    originalStartTime: {
      dateTime: '2020-06-19T14:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    iCalUID: '3qtd6uscq4tsi6gc7nmmtpqlct@google.com',
    sequence: 0,
    reminders: {
      useDefault: true,
    },
    eventType: 'default',
  },
  {
    kind: 'calendar#event',
    etag: '"3181161784712000"',
    id: '4eahs9ghkhrvkld72hogu9ph3e_20200620T140000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA2MjBUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-05-19T19:17:46.000Z',
    updated: '2020-05-27T12:01:32.356Z',
    summary: 'Learn JavaScript',
    description:
      'Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.',
    location: 'London, UK',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    start: {
      dateTime: '2020-06-20T16:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    end: {
      dateTime: '2020-06-20T17:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    recurringEventId: '4eahs9ghkhrvkld72hogu9ph3e',
    originalStartTime: {
      dateTime: '2020-06-20T16:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    iCalUID: '4eahs9ghkhrvkld72hogu9ph3e@google.com',
    sequence: 0,
    reminders: {
      useDefault: true,
    },
    eventType: 'default',
  },
  {
    kind: 'calendar#event',
    etag: '"3181159875584000"',
    id: '3qtd6uscq4tsi6gc7nmmtpqlct_20200622T120000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA2MjJUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-05-19T19:14:30.000Z',
    updated: '2020-05-27T11:45:37.792Z',
    summary: 'React is Fun',
    description:
      'Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ',
    location: 'Berlin, Germany',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    start: {
      dateTime: '2020-06-22T14:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    end: {
      dateTime: '2020-06-22T15:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    recurringEventId: '3qtd6uscq4tsi6gc7nmmtpqlct',
    originalStartTime: {
      dateTime: '2020-06-22T14:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    iCalUID: '3qtd6uscq4tsi6gc7nmmtpqlct@google.com',
    sequence: 0,
    reminders: {
      useDefault: true,
    },
    eventType: 'default',
  },
  {
    kind: 'calendar#event',
    etag: '"3181161784712000"',
    id: '4eahs9ghkhrvkld72hogu9ph3e_20200623T140000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA2MjNUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-05-19T19:17:46.000Z',
    updated: '2020-05-27T12:01:32.356Z',
    summary: 'Learn JavaScript',
    description:
      'Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.',
    location: 'London, UK',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    start: {
      dateTime: '2020-06-23T16:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    end: {
      dateTime: '2020-06-23T17:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    recurringEventId: '4eahs9ghkhrvkld72hogu9ph3e',
    originalStartTime: {
      dateTime: '2020-06-23T16:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    iCalUID: '4eahs9ghkhrvkld72hogu9ph3e@google.com',
    sequence: 0,
    reminders: {
      useDefault: true,
    },
    eventType: 'default',
  },
  {
    kind: 'calendar#event',
    etag: '"3181159875584000"',
    id: '3qtd6uscq4tsi6gc7nmmtpqlct_20200624T120000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA2MjRUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-05-19T19:14:30.000Z',
    updated: '2020-05-27T11:45:37.792Z',
    summary: 'React is Fun',
    description:
      'Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ',
    location: 'Berlin, Germany',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    start: {
      dateTime: '2020-06-24T14:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    end: {
      dateTime: '2020-06-24T15:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    recurringEventId: '3qtd6uscq4tsi6gc7nmmtpqlct',
    originalStartTime: {
      dateTime: '2020-06-24T14:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    iCalUID: '3qtd6uscq4tsi6gc7nmmtpqlct@google.com',
    sequence: 0,
    reminders: {
      useDefault: true,
    },
    eventType: 'default',
  },
  {
    kind: 'calendar#event',
    etag: '"3181161784712000"',
    id: '4eahs9ghkhrvkld72hogu9ph3e_20200625T140000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA2MjVUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-05-19T19:17:46.000Z',
    updated: '2020-05-27T12:01:32.356Z',
    summary: 'Learn JavaScript',
    description:
      'Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.',
    location: 'London, UK',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true,
    },
    start: {
      dateTime: '2020-06-25T16:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    end: {
      dateTime: '2020-06-25T17:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    recurringEventId: '4eahs9ghkhrvkld72hogu9ph3e',
    originalStartTime: {
      dateTime: '2020-06-25T16:00:00+02:00',
      timeZone: 'Europe/Berlin',
    },
    iCalUID: '4eahs9ghkhrvkld72hogu9ph3e@google.com',
    sequence: 0,
    reminders: {
      useDefault: true,
    },
    eventType: 'default',
  },
];

export default mockData;
