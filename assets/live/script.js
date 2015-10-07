// ADJUST THE COUNTDOWN DATETIME

var BROWSER;
var VIEWPORT_WIDTH;
var START_TIME = (new Date(2015, 10, 9, 0, 0, 0, 0)).getTime();
var END_TIME = (new Date(2015, 10, 11, 12, 0, 0, 0)).getTime();
var TOTAL_TIME = END_TIME - START_TIME;
var SCHEDULE_HEIGHT = 4400;
var countdown;

function update_schedule_indicator(){

	var elapsed_time = (new Date()).getTime() - START_TIME;
	$('#schedule-indicator').css({'top': (elapsed_time / TOTAL_TIME) * SCHEDULE_HEIGHT + 48 + 'px', 'opacity': 1});

}

function schedule_callback(state){
	var slide = state.targetSlideNumber;

	if (slide == 1) {
		$('#schedule-guide-left').hide();
	} else {
		$('#schedule-guide-left').show();
	}

	if (slide == 3) {
		$('#schedule-guide-right').hide();
	} else {
		$('#schedule-guide-right').show();
	}
}

// calendar

days = ["FRI", "SAT", "SUN"];
start_hour = 6;
duration = 49;

function createCalendar() {
	var day = 0;
	var period = 0; // 0 PM, 1 AM
	var periods = ["PM", "AM"];
	var current_hour = start_hour;
	createTimeslot(days[day] + " " + current_hour + periods[period]);
	duration--;
	current_hour = current_hour % 12 + 1;
	while (duration) {
		// new period
		if (current_hour == 12) {
			if (period == 0) { // new day
				day++;
				period = 1 - period;
				createTimeslot(days[day] + " " + current_hour + periods[period]);
			} else {
				period = 1 - period;
				createTimeslot(current_hour + periods[period]);
			}
		} else {
			createTimeslot(current_hour + periods[period]);
		}

		duration--;
		current_hour = current_hour % 12 + 1;
	}
}

function createTimeslot(time) {
	$("#schedule-calendar").append($("<div class='schedule-calendar-hour'><div class='hour'>" + time + "</div></div>"));
}


schedule_hour_height = 120;
schedule_card_margin = 34;
schedule_start_hour = 18;
schedule_card_offset = 48;


// string title, string caption, Date time
// "Drake Performance", "Yay!", {day: "Sat", time: "12PM"}

<<<<<<< HEAD
function createScheduleCard(title, caption, time, event_type) {
	if (getCard(time, event_type)) {
		updateCard(title, caption, time, event_type);
		return;
	}
	var $card = $("<div class='schedule-item' name='" + generateCardHash(time, event_type) +  "'></div>");
=======
function createScheduleCard(title, caption, time) {
	// if (getCard(time)) {
	// 	updateCard(title, caption, time);
	// 	return;
	// }
	var $card = $("<div class='schedule-item' name='" + generateTimeHash(time) +  "'></div>");
>>>>>>> 3e1b12f... test
	var $title = $("<div class='schedule-item-title'></div>").text(title);
	var $hour = $("<div class='schedule-item-time' />").text(getTimeRange(time));
	var $caption = $("<div class='schedule-item-caption'></div>").text(caption);
	var offset = cardOffset(time) + "px";
	var card_height = parseTime(time.duration) * schedule_hour_height - schedule_card_margin;
	$card.append($title).append($hour).append($caption);
	$("body").append($card)
	if ($card.height() > card_height) $card.addClass("shortened")
	$card.css({"top": offset, "height": card_height});
	return $card;
}

function getTimeRange(time) {
	var start = time.start.slice(0, -2);
	var start_hour = parseTime(start);
	var end_hour = start_hour + parseTime(time.duration);
	end_hour = Math.floor(end_hour - 1) % 12 + 1 + ":" + (end_hour % 1) * 60;
	end_hour = end_hour.split(":")[1].length > 1 ? end_hour : end_hour + "0";
	return start + "-" + end_hour
}

function getCard(time, event_type) {
	var $card = $(".schedule-item[name='" + generateCardHash(time, event_type) + "']");
	return $card.length > 0 ? $card : false;
}

<<<<<<< HEAD
function updateCard(title, caption, time, event_type) {
	var $card = getCard(time, event_type);
=======
function updateCard(title, caption, time) {
	console.log(title)
	var $card = getCard(time);
>>>>>>> 3e1b12f... test
	$card.append($("<div class='schedule-item-title'></div>").text(title))
	$card.append($("<div class='schedule-item-caption'></div>").text(caption));
}

function generateCardHash(time, event_type) {
	return time.day + time.start + event_type;
}

function cardOffset(time) {
	var day = time.day.toLowerCase();
	var time = time.start;
	var period = time.slice(-2);
	var period_offset = period == "PM" ? 12 : 0;
	//default friday, which has offset of 0
	var day_offset = 0;
	if (day == "sat") {
		day_offset = 24;
	} else if (day == "sun") {
		day_offset = 48;
	}
	var hours = parseTime(time.slice(0, -2));
	return (hours % 12 + period_offset + day_offset - schedule_start_hour) * schedule_hour_height + schedule_card_offset;
}

function parseTime(time) {
	time = time.split(":");
	var hour = parseInt(time[0]);
	var minutes = time[1] ? parseInt(time[1])/60 : 0;
	return hour + minutes;
}

function createSchedule(schedule) {
	for (var card in schedule) {
		appendCard(schedule[card]);
	}
}

function appendCard(card) {
<<<<<<< HEAD
	var $html_card = createScheduleCard(card.title, card.caption, card.time, card.event_type);
	if (card.offset) {
		$html_card.addClass("offset-" + card.offset);
	}

	if (card.location) {
		$html_card.addClass(card.location);
	}
	var $container = $("#" + card.event_type.split(" ").join("-").toLowerCase());
=======
	var $html_card = createScheduleCard(card.title, card.caption, card.time);
	var $container = $("#event-" + card.event_type.split(" ").join("-").toLowerCase());
	console.log("#event-" + card.event_type.split(" ").join("-").toLowerCase())
>>>>>>> 3e1b12f... test
	if ($container.length < 1) {
		throw "WRONG LOCATION, DIPSHIT!";
	}

	$container.append($html_card);
}

$(document).ready(function(){

	// setInterval(function(){
	// 	update_schedule_indicator();
	// }, 1000);

	countdown = countdown(new Date(2015, 9, 8, 22, 0, 0), function(ts){
		$('#header-countdown-day').text(ts.days);
		$('#header-countdown-hour').text(ts.hours);
		$('#header-countdown-min').text(ts.minutes);
		$('#header-countdown-sec').text(ts.seconds);
	}, countdown.DAYS|countdown.HOURS|countdown.MINUTES|countdown.SECONDS);

	// Browser check
	if ($.browser.webkit) {
		BROWSER = 'webkit';
	} else if ($.browser.mozilla) {
		BROWSER = 'moz';
	} else if ($.broswer.msie) {
		BROWSER = 'ie';
	} else {
		BROWSER = 'undefined';
	}

	VIEWPORT_WIDTH = $(window).width();

	if (VIEWPORT_WIDTH < 960) {
		$('.schedule-content').iosSlider({
			snapToChildren: true,
			desktopClickDrag: true,
			onSlideChange: schedule_callback,
			scrollbar: true,
			scrollbarLocation: 'bottom',
			scrollbarBackground: '#FFFFFF',
			elasticPullResistance: 0.0,
			elasticFrictionCoefficient: 0.3
		});
	}

	$(window).resize(function(){

		var new_width = $(window).width();

		if (VIEWPORT_WIDTH < 960 && new_width < 960) {
			VIEWPORT_WIDTH = new_width;
			return false;
		} else {
			if (new_width < 960) {
				$('.schedule-content').iosSlider({
					snapToChildren: true,
					desktopClickDrag: true,
					scrollbar: true,
					scrollbarLocation: 'bottom',
					scrollbarBackground: '#FFFFFF',
					elasticPullResistance: 0.0,
					elasticFrictionCoefficient: 0.3
				});
			} else {
				$('.schedule-content').iosSlider('destroy');
				$('#schedule-guide-left').hide();
				$('#schedule-guide-right').hide();
			}
			VIEWPORT_WIDTH = new_width;
		}
	});

	$('#schedule-guide-left').click(function(){
		$('.schedule-content').iosSlider('prevSlide');
	});

	$('#schedule-guide-right').click(function(){
		$('.schedule-content').iosSlider('nextSlide');
	});

	// create schedule
	createCalendar();
	createSchedule(schedule);
	$("#schedule").css({
		height: $("#schedule-calendar").height()
	})

});

var events = ["food", "sponsors", "Transportation", "Workshops", "other Activities", "events"];

var slots = [];

var curr_day = "fri";

function parseSchedule(schedule) {
	for (var s in schedule) {
		s = parseSlots(schedule[s]);
		for (var slot in s) {
			slots.push(s[slot]);
		}
	}
}

function parseSlots(s) {
	if (s.day) {
		curr_day = s.day.slice(0,3);
	}
	var day = curr_day;
	var start = s.start;
	var slots = [];
	for (var e in events) {
		var e = events[e];
		if (s[e] && s[e].trim()) {
			slots.push({
				"time": {
					day: day,
					start: start.split(" ")[0] + start.split(" ")[1],
					"duration": "1:00"
				},
				"title": s[e],
				"caption": "",
				"event_type": e
			})
		}
	}

	return slots;
}

function deleteDups(s) {
	var slots = {};
	var slots_unique = [];
	for (var slot in s) {
		var title = s[slot]["title"];
		if (!slots[title]) {
			slots[title] = s[slot]
		} else {
			var duration = slots[title]['time']["duration"];
			duration = (parseInt(duration.split(":")[0]) + 1) + ":" + duration.split(":")[1];
			slots[title]['time']["duration"] = duration;
		}
	}
	for (s in slots) {
		slots_unique.push(slots[s]);
	}

	return slots_unique;
}

function genS() {
	parseSchedule(s)
	return deleteDups(slots);
}



var textFile = null,
makeTextFile = function (text) {
  var data = new Blob([text], {type: 'application/octet-binary'});

  // If we are replacing a previously generated file we need to
  // manually revoke the object URL to avoid memory leaks.
  if (textFile !== null) {
    window.URL.revokeObjectURL(textFile);
  }

  textFile = window.URL.createObjectURL(data);

  // returns a URL you can use as a href
  return textFile;
};



var s = [

  {
    "day":"Friday",
    "start":"6:00:00 PM",
    "Main Timeline":"Setup",
    "food":null,
    "sponsors":"Sponsors Arrive",
    "Transportation":null,
    "Workshops":null,
    "other Activities":null,
    "events":null,
    "FIELD10":null,
    "FIELD11":null,
    "FIELD12":null,
    "FIELD13":null,
    "FIELD14":null,
    "FIELD15":null,
    "FIELD16":null
  },
  {
    "day":null,
    "start":"7:00:00 PM",
    "Main Timeline":"Registration",
    "food":"Dinner for Sponsors",
    "sponsors":null,
    "Transportation":"Busses Arrive",
    "Workshops":null,
    "other Activities":null,
    "events":null,
    "FIELD10":null,
    "FIELD11":null,
    "FIELD12":null,
    "FIELD13":null,
    "FIELD14":null,
    "FIELD15":null,
    "FIELD16":null
  },
  {
    "day":null,
    "start":"8:00:00 PM",
    "Main Timeline":null,
    "food":null,
    "sponsors":"API Expo",
    "Transportation":null,
    "Workshops":null,
    "other Activities":null,
    "events":null,
    "FIELD10":null,
    "FIELD11":null,
    "FIELD12":null,
    "FIELD13":null,
    "FIELD14":null,
    "FIELD15":null,
    "FIELD16":null
  },
  {
    "day":null,
    "start":"9:00:00 PM",
    "Main Timeline":null,
    "food":null,
    "sponsors":null,
    "Transportation":null,
    "Workshops":null,
    "other Activities":null,
    "events":null,
    "FIELD10":null,
    "FIELD11":null,
    "FIELD12":null,
    "FIELD13":null,
    "FIELD14":null,
    "FIELD15":null,
    "FIELD16":null
  },
  {
    "day":null,
    "start":"10:00:00 PM",
    "Main Timeline":"Opening Ceremony",
    "food":null,
    "sponsors":null,
    "Transportation":null,
    "Workshops":null,
    "other Activities":null,
    "events":null,
    "FIELD10":null,
    "FIELD11":null,
    "FIELD12":null,
    "FIELD13":null,
    "FIELD14":null,
    "FIELD15":null,
    "FIELD16":null
  },
  {
    "day":null,
    "start":"11:00:00 PM",
    "Main Timeline":"Hacking Starts",
    "food":null,
    "sponsors":null,
    "Transportation":null,
    "Workshops":null,
    "other Activities":"H@B Workshop",
    "events":"Team Formation",
    "FIELD10":null,
    "FIELD11":null,
    "FIELD12":null,
    "FIELD13":null,
    "FIELD14":null,
    "FIELD15":"Yes(Activity)",
    "FIELD16":null
  },
  {
    "day":"Saturday",
    "start":"12:00:00 AM",
    "Main Timeline":null,
    "food":null,
    "sponsors":null,
    "Transportation":null,
    "Workshops":"WORKSHOP SLOT FREE (12:30-1)",
    "other Activities":"H@B Workshop & Netflix and Build ",
    "events":null,
    "FIELD10":null,
    "FIELD11":null,
    "FIELD12":null,
    "FIELD13":null,
    "FIELD14":"Yes(Activity)",
    "FIELD15":"Yes(Activity)",
    "FIELD16":null
  },
  {
    "day":null,
    "start":"1:00:00 AM",
    "Main Timeline":null,
    "food":null,
    "sponsors":null,
    "Transportation":null,
    "Workshops":"WORKSHOP SLOT FREE (1:30-2)",
    "other Activities":"Netflix and Build ",
    "events":null,
    "FIELD10":null,
    "FIELD11":null,
    "FIELD12":null,
    "FIELD13":null,
    "FIELD14":"Yes(Activity)",
    "FIELD15":null,
    "FIELD16":null
  },
  {
    "day":null,
    "start":"2:00:00 AM",
    "Main Timeline":null,
    "food":null,
    "sponsors":null,
    "Transportation":null,
    "Workshops":null,
    "other Activities":"Netflix and Build ",
    "events":null,
    "FIELD10":null,
    "FIELD11":null,
    "FIELD12":null,
    "FIELD13":null,
    "FIELD14":"Yes(Activity)",
    "FIELD15":null,
    "FIELD16":null
  },
  {
    "day":null,
    "start":"3:00:00 AM",
    "Main Timeline":null,
    "food":"Snack",
    "sponsors":null,
    "Transportation":null,
    "Workshops":null,
    "other Activities":null,
    "events":null,
    "FIELD10":null,
    "FIELD11":null,
    "FIELD12":null,
    "FIELD13":null,
    "FIELD14":null,
    "FIELD15":null,
    "FIELD16":null
  },
  {
    "day":null,
    "start":"4:00:00 AM",
    "Main Timeline":null,
    "food":null,
    "sponsors":null,
    "Transportation":null,
    "Workshops":null,
    "other Activities":null,
    "events":null,
    "FIELD10":null,
    "FIELD11":null,
    "FIELD12":null,
    "FIELD13":null,
    "FIELD14":null,
    "FIELD15":null,
    "FIELD16":null
  },
  {
    "day":null,
    "start":"5:00:00 AM",
    "Main Timeline":null,
    "food":null,
    "sponsors":null,
    "Transportation":null,
    "Workshops":null,
    "other Activities":null,
    "events":null,
    "FIELD10":null,
    "FIELD11":null,
    "FIELD12":null,
    "FIELD13":null,
    "FIELD14":null,
    "FIELD15":null,
    "FIELD16":null
  },
  {
    "day":null,
    "start":"6:00:00 AM",
    "Main Timeline":null,
    "food":null,
    "sponsors":null,
    "Transportation":null,
    "Workshops":null,
    "other Activities":null,
    "events":null,
    "FIELD10":null,
    "FIELD11":null,
    "FIELD12":null,
    "FIELD13":null,
    "FIELD14":null,
    "FIELD15":null,
    "FIELD16":null
  },
  {
    "day":null,
    "start":"7:00:00 AM",
    "Main Timeline":null,
    "food":null,
    "sponsors":null,
    "Transportation":null,
    "Workshops":null,
    "other Activities":null,
    "events":null,
    "FIELD10":null,
    "FIELD11":null,
    "FIELD12":null,
    "FIELD13":null,
    "FIELD14":null,
    "FIELD15":null,
    "FIELD16":null
  },
  {
    "day":null,
    "start":"8:00:00 AM",
    "Main Timeline":null,
    "food":"Breakfast",
    "sponsors":null,
    "Transportation":null,
    "Workshops":null,
    "other Activities":"Meditation",
    "events":null,
    "FIELD10":null,
    "FIELD11":null,
    "FIELD12":null,
    "FIELD13":"Yes (Activity)",
    "FIELD14":null,
    "FIELD15":null,
    "FIELD16":null
  },
  {
    "day":null,
    "start":"9:00:00 AM",
    "Main Timeline":null,
    "food":null,
    "sponsors":null,
    "Transportation":null,
    "Workshops":"Visa Workshop: 9:15-9:45 ",
    "other Activities":null,
    "events":null,
    "FIELD10":null,
    "FIELD11":null,
    "FIELD12":null,
    "FIELD13":"Yes (Workshop)",
    "FIELD14":null,
    "FIELD15":null,
    "FIELD16":null
  },
  {
    "day":null,
    "start":"10:00:00 AM",
    "Main Timeline":null,
    "food":null,
    "sponsors":null,
    "Transportation":null,
    "Workshops":"Aerospike Workshop: 10-10:30; Here: 10:45-11:15",
    "other Activities":null,
    "events":null,
    "FIELD10":null,
    "FIELD11":null,
    "FIELD12":null,
    "FIELD13":"Yes (Workshop)",
    "FIELD14":null,
    "FIELD15":null,
    "FIELD16":null
  },
  {
    "day":null,
    "start":"11:00:00 AM",
    "Main Timeline":null,
    "food":null,
    "sponsors":null,
    "Transportation":null,
    "Workshops":"GM Workshop: 11:30-12",
    "other Activities":"Hacker Rank Code Sprints",
    "events":null,
    "FIELD10":null,
    "FIELD11":null,
    "FIELD12":null,
    "FIELD13":"Yes (Workshop)",
    "FIELD14":"Yes(Activity)",
    "FIELD15":null,
    "FIELD16":null
  },
  {
    "day":null,
    "start":"12:00:00 PM",
    "Main Timeline":null,
    "food":"Lunch",
    "sponsors":null,
    "Transportation":null,
    "Workshops":null,
    "other Activities":"Hacker Rank Code Sprints",
    "events":null,
    "FIELD10":null,
    "FIELD11":null,
    "FIELD12":null,
    "FIELD13":null,
    "FIELD14":"Yes(Activity)",
    "FIELD15":null,
    "FIELD16":null
  },
  {
    "day":null,
    "start":"1:00:00 PM",
    "Main Timeline":null,
    "food":null,
    "sponsors":null,
    "Transportation":null,
    "Workshops":"Capital One Workshop: 1-1:30",
    "other Activities":"Hacker Rank Code Sprints & Smash",
    "events":null,
    "FIELD10":null,
    "FIELD11":null,
    "FIELD12":null,
    "FIELD13":"Yes (Workshop)",
    "FIELD14":"Yes(Activity)",
    "FIELD15":"Yes(Activity)",
    "FIELD16":null
  },
  {
    "day":null,
    "start":"2:00:00 PM",
    "Main Timeline":null,
    "food":null,
    "sponsors":null,
    "Transportation":null,
    "Workshops":"Microsoft Workshop: 2-3 ",
    "other Activities":"Smash",
    "events":"Massages",
    "FIELD10":null,
    "FIELD11":null,
    "FIELD12":null,
    "FIELD13":"Yes(Workshop)",
    "FIELD14":null,
    "FIELD15":"Yes (Activity)",
    "FIELD16":null
  },
  {
    "day":null,
    "start":"3:00:00 PM",
    "Main Timeline":null,
    "food":"Snack",
    "sponsors":null,
    "Transportation":null,
    "Workshops":"Fireeye Workshop: 3:30-4 ",
    "other Activities":"Smash",
    "events":"Massages",
    "FIELD10":null,
    "FIELD11":null,
    "FIELD12":null,
    "FIELD13":"Yes (Workshop)",
    "FIELD14":null,
    "FIELD15":"Yes (Activity)",
    "FIELD16":null
  },
  {
    "day":null,
    "start":"4:00:00 PM",
    "Main Timeline":null,
    "food":null,
    "sponsors":null,
    "Transportation":null,
    "Workshops":"BlackRock Workshop: 4:15-4:45 (Full-text Search with Apache Solr)",
    "other Activities":"Smash",
    "events":"Massages",
    "FIELD10":null,
    "FIELD11":null,
    "FIELD12":null,
    "FIELD13":"Yes (Workshop)",
    "FIELD14":null,
    "FIELD15":"Yes (Activity)",
    "FIELD16":null
  },
  {
    "day":null,
    "start":"5:00:00 PM",
    "Main Timeline":null,
    "food":null,
    "sponsors":null,
    "Transportation":null,
    "Workshops":"Gap Workshop: 5-5:30 (Agile methodologies); Illumio Workshop: 5:45-6:15",
    "other Activities":"Smash",
    "events":"Faster Hacker Event ",
    "FIELD10":null,
    "FIELD11":null,
    "FIELD12":null,
    "FIELD13":"Yes (Workshop)",
    "FIELD14":null,
    "FIELD15":"Yes (Activity)",
    "FIELD16":null
  },
  {
    "day":null,
    "start":"6:00:00 PM",
    "Main Timeline":null,
    "food":null,
    "sponsors":null,
    "Transportation":null,
    "Workshops":"a16z Workshop: 6:30-7",
    "other Activities":"Smash",
    "events":null,
    "FIELD10":null,
    "FIELD11":null,
    "FIELD12":null,
    "FIELD13":"Yes (Workshop)",
    "FIELD14":null,
    "FIELD15":"Yes(Activity)",
    "FIELD16":null
  },
  {
    "day":null,
    "start":"7:00:00 PM",
    "Main Timeline":null,
    "food":"Dinner",
    "sponsors":null,
    "Transportation":null,
    "Workshops":null,
    "other Activities":"Smash",
    "events":null,
    "FIELD10":null,
    "FIELD11":null,
    "FIELD12":null,
    "FIELD13":null,
    "FIELD14":null,
    "FIELD15":"Yes (Activity)",
    "FIELD16":null
  },
  {
    "day":null,
    "start":"8:00:00 PM",
    "Main Timeline":null,
    "food":null,
    "sponsors":null,
    "Transportation":null,
    "Workshops":"Uber Workshop: 8-8:30; Teespring: 8:45-9:15 (Intro to Canvas & SVG)",
    "other Activities":"Netflix and Build and Smash",
    "events":null,
    "FIELD10":null,
    "FIELD11":null,
    "FIELD12":null,
    "FIELD13":"Yes (Workshop)",
    "FIELD14":null,
    "FIELD15":"Yes (Activity)",
    "FIELD16":"Yes(Activity)"
  },
  {
    "day":null,
    "start":"9:00:00 PM",
    "Main Timeline":null,
    "food":null,
    "sponsors":null,
    "Transportation":null,
    "Workshops":"WORKSHOP SLOT FREE (9:30-10)",
    "other Activities":"Big C & Smash",
    "events":" ",
    "FIELD10":null,
    "FIELD11":null,
    "FIELD12":null,
    "FIELD13":"Yes (Workshop)",
    "FIELD14":null,
    "FIELD15":"Yes (Activity)",
    "FIELD16":"Yes(Activity)"
  },
  {
    "day":null,
    "start":"10:00:00 PM",
    "Main Timeline":null,
    "food":null,
    "sponsors":null,
    "Transportation":null,
    "Workshops":null,
    "other Activities":null,
    "events":null,
    "FIELD10":null,
    "FIELD11":null,
    "FIELD12":null,
    "FIELD13":null,
    "FIELD14":null,
    "FIELD15":"Yes (Activity)",
    "FIELD16":"Yes(Activity)"
  },
  {
    "day":null,
    "start":"11:00:00 PM",
    "Main Timeline":null,
    "food":null,
    "sponsors":null,
    "Transportation":null,
    "Workshops":null,
    "other Activities":" Silent Dance Party?",
    "events":null,
    "FIELD10":null,
    "FIELD11":null,
    "FIELD12":null,
    "FIELD13":null,
    "FIELD14":null,
    "FIELD15":"Yes (Activity)",
    "FIELD16":null
  },
  {
    "day":"Sunday",
    "start":"12:00:00 AM",
    "Main Timeline":null,
    "food":"Midnight Snack",
    "sponsors":null,
    "Transportation":null,
    "Workshops":null,
    "other Activities":"Netflix and Build &Silent Dance Party?",
    "events":null,
    "FIELD10":null,
    "FIELD11":null,
    "FIELD12":null,
    "FIELD13":null,
    "FIELD14":"Yes(Activity)",
    "FIELD15":null,
    "FIELD16":null
  },
  {
    "day":null,
    "start":"1:00:00 AM",
    "Main Timeline":null,
    "food":null,
    "sponsors":null,
    "Transportation":null,
    "Workshops":null,
    "other Activities":"Netflix and Build",
    "events":null,
    "FIELD10":null,
    "FIELD11":null,
    "FIELD12":null,
    "FIELD13":null,
    "FIELD14":"Yes(Activity)",
    "FIELD15":null,
    "FIELD16":null
  },
  {
    "day":null,
    "start":"2:00:00 AM",
    "Main Timeline":null,
    "food":null,
    "sponsors":null,
    "Transportation":null,
    "Workshops":null,
    "other Activities":"Netflix and Build ",
    "events":null,
    "FIELD10":null,
    "FIELD11":null,
    "FIELD12":null,
    "FIELD13":null,
    "FIELD14":"Yes(Activity)",
    "FIELD15":null,
    "FIELD16":null
  },
  {
    "day":null,
    "start":"3:00:00 AM",
    "Main Timeline":null,
    "food":null,
    "sponsors":null,
    "Transportation":null,
    "Workshops":null,
    "other Activities":null,
    "events":null,
    "FIELD10":null,
    "FIELD11":null,
    "FIELD12":null,
    "FIELD13":null,
    "FIELD14":null,
    "FIELD15":null,
    "FIELD16":null
  },
  {
    "day":null,
    "start":"4:00:00 AM",
    "Main Timeline":null,
    "food":"Snack",
    "sponsors":null,
    "Transportation":null,
    "Workshops":null,
    "other Activities":null,
    "events":null,
    "FIELD10":null,
    "FIELD11":null,
    "FIELD12":null,
    "FIELD13":null,
    "FIELD14":null,
    "FIELD15":null,
    "FIELD16":null
  },
  {
    "day":null,
    "start":"5:00:00 AM",
    "Main Timeline":null,
    "food":null,
    "sponsors":null,
    "Transportation":null,
    "Workshops":null,
    "other Activities":null,
    "events":null,
    "FIELD10":null,
    "FIELD11":null,
    "FIELD12":null,
    "FIELD13":null,
    "FIELD14":null,
    "FIELD15":null,
    "FIELD16":null
  },
  {
    "day":null,
    "start":"6:00:00 AM",
    "Main Timeline":null,
    "food":null,
    "sponsors":null,
    "Transportation":null,
    "Workshops":null,
    "other Activities":null,
    "events":null,
    "FIELD10":null,
    "FIELD11":null,
    "FIELD12":null,
    "FIELD13":null,
    "FIELD14":null,
    "FIELD15":null,
    "FIELD16":null
  },
  {
    "day":null,
    "start":"7:00:00 AM",
    "Main Timeline":null,
    "food":null,
    "sponsors":null,
    "Transportation":null,
    "Workshops":null,
    "other Activities":null,
    "events":null,
    "FIELD10":null,
    "FIELD11":null,
    "FIELD12":null,
    "FIELD13":null,
    "FIELD14":null,
    "FIELD15":null,
    "FIELD16":null
  },
  {
    "day":null,
    "start":"8:00:00 AM",
    "Main Timeline":null,
    "food":"Breakfast",
    "sponsors":null,
    "Transportation":null,
    "Workshops":null,
    "other Activities":null,
    "events":null,
    "FIELD10":null,
    "FIELD11":null,
    "FIELD12":null,
    "FIELD13":null,
    "FIELD14":null,
    "FIELD15":null,
    "FIELD16":null
  },
  {
    "day":null,
    "start":"9:00:00 AM",
    "Main Timeline":null,
    "food":null,
    "sponsors":null,
    "Transportation":null,
    "Workshops":null,
    "other Activities":null,
    "events":null,
    "FIELD10":null,
    "FIELD11":null,
    "FIELD12":null,
    "FIELD13":null,
    "FIELD14":null,
    "FIELD15":null,
    "FIELD16":null
  },
  {
    "day":null,
    "start":"10:00:00 AM",
    "Main Timeline":"Hacking stops",
    "food":null,
    "sponsors":null,
    "Transportation":null,
    "Workshops":null,
    "other Activities":null,
    "events":null,
    "FIELD10":null,
    "FIELD11":null,
    "FIELD12":null,
    "FIELD13":null,
    "FIELD14":null,
    "FIELD15":null,
    "FIELD16":null
  },
  {
    "day":null,
    "start":"11:00:00 AM",
    "Main Timeline":"Hack Expo",
    "food":null,
    "sponsors":null,
    "Transportation":null,
    "Workshops":null,
    "other Activities":null,
    "events":null,
    "FIELD10":null,
    "FIELD11":null,
    "FIELD12":null,
    "FIELD13":null,
    "FIELD14":null,
    "FIELD15":null,
    "FIELD16":null
  },
  {
    "day":null,
    "start":"12:00:00 PM",
    "Main Timeline":null,
    "food":"Lunch",
    "sponsors":null,
    "Transportation":null,
    "Workshops":null,
    "other Activities":null,
    "events":null,
    "FIELD10":null,
    "FIELD11":null,
    "FIELD12":null,
    "FIELD13":null,
    "FIELD14":null,
    "FIELD15":null,
    "FIELD16":null
  },
  {
    "day":null,
    "start":"1:00:00 PM",
    "Main Timeline":null,
    "food":null,
    "sponsors":"Judging",
    "Transportation":null,
    "Workshops":null,
    "other Activities":null,
    "events":null,
    "FIELD10":null,
    "FIELD11":null,
    "FIELD12":null,
    "FIELD13":null,
    "FIELD14":null,
    "FIELD15":null,
    "FIELD16":null
  },
  {
    "day":null,
    "start":"2:00:00 PM",
    "Main Timeline":"Closing Ceremony",
    "food":null,
    "sponsors":null,
    "Transportation":null,
    "Workshops":null,
    "other Activities":null,
    "events":null,
    "FIELD10":null,
    "FIELD11":null,
    "FIELD12":null,
    "FIELD13":null,
    "FIELD14":null,
    "FIELD15":null,
    "FIELD16":null
  },
  {
    "day":null,
    "start":"3:00:00 PM",
    "Main Timeline":"Closing Ceremony Ends",
    "food":null,
    "sponsors":null,
    "Transportation":null,
    "Workshops":null,
    "other Activities":null,
    "events":null,
    "FIELD10":null,
    "FIELD11":null,
    "FIELD12":null,
    "FIELD13":null,
    "FIELD14":null,
    "FIELD15":null,
    "FIELD16":null
  },
  {
    "day":null,
    "start":"4:00:00 PM",
    "Main Timeline":"Clean-up",
    "food":null,
    "sponsors":null,
    "Transportation":null,
    "Workshops":null,
    "other Activities":null,
    "events":null,
    "FIELD10":null,
    "FIELD11":null,
    "FIELD12":null,
    "FIELD13":null,
    "FIELD14":null,
    "FIELD15":null,
    "FIELD16":null
  },
  {
    "day":null,
    "start":"5:00:00 PM",
    "Main Timeline":null,
    "food":null,
    "sponsors":"Sponsors Depart",
    "Transportation":"Busses Depart",
    "Workshops":null,
    "other Activities":null,
    "events":null,
    "FIELD10":null,
    "FIELD11":null,
    "FIELD12":null,
    "FIELD13":null,
    "FIELD14":null,
    "FIELD15":null,
    "FIELD16":null
  }
]





