//Location can be: “Field”, “Uni”, “Other”
//Days can be: “fri”, “sat”, “sun”
//start can be: [TIME][PERIOD]  ie “12:00AM”, “12:45PM”
//duration is duration in hours. ie 1 hour would be “1:00”

var schedule = [
{
  title: "Registration Opens!",
  caption: "Near Gate 5",
  time: {day: "fri", start: "7:00PM", duration: "3:00"},
  location: "",
  event_type: "Main timeline"
},

{
  title: "Busses Arive",
  caption: "",
  time: {day: "fri", start: "7:00PM", duration: "3:00"},
  location: "",
  event_type: "Main timeline"
},

{
  title: "Opening Ceromony",
  caption: "",
  time: {day: "fri", start: "10:00PM", duration: "1:00"},
  location: "",
  event_type: "Main timeline"
},

{
  title: "Hacking Starts",
  caption: "Start forming teams!",
  time: {day: "fri", start: "11:00PM", duration: "1:00"},
  location: "",
  event_type: "Main timeline"
},

{
  title: "Snacks",
  caption: "",
  time: {day: "sat", start: "3:00AM", duration: "1:00"},
  location: "",
  event_type: "Main timeline"
},

{
  title: "Breakfast",
  caption: "",
  time: {day: "sat", start: "8:00AM", duration: "1:00"},
  location: "",
  event_type: "Main timeline"
},

{
  title: "Lunch",
  caption: "",
  time: {day: "sat", start: "12:00PM", duration: "1:00"},
  location: "",
  event_type: "Main timeline"
},

{
  title: "Snacks",
  caption: "",
  time: {day: "sat", start: "3:00PM", duration: "1:00"},
  location: "",
  event_type: "Main timeline"
},

{
  title: "Dinner",
  caption: "",
  time: {day: "sat", start: "7:00PM", duration: "1:00"},
  location: "",
  event_type: "Main timeline"
},

{
  title: "Midnight Snack",
  caption: "",
  time: {day: "sun", start: "12:00AM", duration: "1:00"},
  location: "",
  event_type: "Main timeline"
},


{
  title: "Snack",
  caption: "",
  time: {day: "sun", start: "4:00AM", duration: "1:00"},
  location: "",
  event_type: "Main timeline"
},

{
  title: "Breakfast",
  caption: "",
  time: {day: "sun", start: "8:00AM", duration: "1:00"},
  location: "",
  event_type: "Main timeline"
},

{
  title: "Hacking Expo",
  caption: "",
  time: {day: "sun", start: "11:00AM", duration: "3:00"},
  location: "",
  event_type: "Main timeline"
},

{
  title: "Lunch",
  caption: "",
  time: {day: "sun", start: "12:00PM", duration: "1:00"},
  location: "",
  event_type: "Main timeline"
},

{
  title: "Sponsor Judging",
  caption: "",
  time: {day: "sun", start: "2:00PM", duration: "1:00"},
  location: "",
  event_type: "Main timeline"
},

{
  title: "Closing Ceremony",
  caption: "",
  time: {day: "sun", start: "2:00PM", duration: "2:00"},
  location: "",
  event_type: "Main timeline"
},

{
  title: "Busses Depart",
  caption: "",
  time: {day: "sun", start: "5:00PM", duration: "1:00"},
  location: "",
  event_type: "Main timeline"
},

// workshops

{
  title: "Visa Workshop",
  caption: "",
  time: {day: "sat", start: "9:15AM", duration: "0:30"},
  location: "uni",
  event_type: "Workshops"
},

{
  title: "Aerospike Workshop",
  caption: "",
  time: {day: "sat", start: "10:00AM", duration: "0:30"},
  location: "uni",
  event_type: "Workshops"
},

{
  title: "Here Workshop",
  caption: "",
  time: {day: "sat", start: "10:45AM", duration: "0:30"},
  location: "uni",
  event_type: "Workshops"
},

{
  title: "GM Workshop",
  caption: "",
  time: {day: "sat", start: "11:30AM", duration: "0:30"},
  location: "uni",
  event_type: "Workshops"
},

{
  title: "Capital One Workshop",
  caption: "",
  time: {day: "sat", start: "1:00PM", duration: "0:30"},
  location: "uni",
  event_type: "Workshops"
},

{
  title: "Microsoft Workshop",
  caption: "",
  time: {day: "sat", start: "2:00PM", duration: "1:00"},
  location: "uni",
  event_type: "Workshops"
},

{
  title: "Blackrock Workshop",
  caption: "Full-text search with Apache Solr",
  time: {day: "sat", start: "4:15PM", duration: "0:30"},
  location: "uni",
  event_type: "Workshops"
},

{
  title: "Gap Workshop",
  caption: "Agile methodologies",
  time: {day: "sat", start: "5:00PM", duration: "0:30"},
  location: "uni",
  event_type: "Workshops"
},

{
  title: "Illumio Workshop",
  caption: "",
  time: {day: "sat", start: "5:45PM", duration: "0:30"},
  location: "uni",
  event_type: "Workshops"
},

{
  title: "a16z Workshop",
  caption: "",
  time: {day: "sat", start: "6:30PM", duration: "0:30"},
  location: "uni",
  event_type: "Workshops"
},

{
  title: "Fireeye Workshop",
  caption: "",
  time: {day: "sat", start: "7:15PM", duration: "0:30"},
  location: "uni",
  event_type: "Workshops"
},

{
  title: "Uber Workshop",
  caption: "",
  time: {day: "sat", start: "8:00PM", duration: "0:30"},
  location: "uni",
  event_type: "Workshops"
},

{
  title: "Teespring Workshop",
  caption: "Intro to Canvas and SVG",
  time: {day: "sat", start: "8:45PM", duration: "0:30"},
  location: "uni",
  event_type: "Workshops"
},

// Events

{
  title: "H@B Workshop",
  caption: "",
  time: {day: "fri", start: "11:00PM", duration: "2:00"},
  location: "woz",
  event_type: "events"
},

{
  title: "Netflix and Build",
  caption: "",
  time: {day: "sat", start: "12:00AM", duration: "3:00"},
  location: "sdh",
  event_type: "events",
  offset: 1
},

{
  title: "Morning Meditation",
  caption: "",
  time: {day: "sat", start: "8:00AM", duration: "1:00"},
  location: "uni",
  event_type: "events"
},

{
  title: "Hacker Rank Code Sprints",
  caption: "",
  time: {day: "sat", start: "11:00AM", duration: "3:00"},
  location: "sdh",
  event_type: "events"
},

{
  title: "Smash Tournement",
  caption: "",
  time: {day: "sat", start: "1:00PM", duration: "9:00"},
  location: "woz",
  event_type: "events",
  offset: 1
},

{
  title: "Massages",
  caption: "",
  time: {day: "sat", start: "2:00PM", duration: "3:00"},
  location: "uni",
  event_type: "events",
  offset: 2
},

{
  title: "Faster Hacker Event",
  caption: "",
  time: {day: "sat", start: "5:00PM", duration: "1:00"},
  location: "uni",
  event_type: "events",
  offset: 2
},

{
  title: "Netflix and Build",
  caption: "",
  time: {day: "sat", start: "8:00PM", duration: "1:00"},
  location: "uni",
  event_type: "events",
  offset: 2
},

{
  title: "Big C Hike",
  caption: "",
  time: {day: "sat", start: "9:00PM", duration: "1:00"},
  location: "uni",
  event_type: "events",
  offset: 2
},

{
  title: "Netflix and Build",
  caption: "",
  time: {day: "sun", start: "12:00AM", duration: "3:00"},
  location: "sdh",
  event_type: "events"
},



]

