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

function createScheduleCard(title, caption, time, event_type, location) {
	if (getCard(time, event_type)) {
		updateCard(title, caption, time, event_type);
		return;
	}
	var $card = $("<div class='schedule-item' name='" + generateCardHash(time, event_type) +  "'></div>");
	var $title = $("<div class='schedule-item-title'></div>").text(title);
	var $hour = $("<div class='schedule-item-subtitle' />").text(getTimeRange(time) + getLocation(location));
	var $caption = $("<div class='schedule-item-caption'></div>").text(caption);
	var offset = cardOffset(time) + "px";
	var card_height = parseTime(time.duration) * schedule_hour_height - schedule_card_margin;
	$card.append($title).append($hour)
	if (caption) $card.append($caption);
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

function getLocation(location) {
	if (!location) {
		return " @ Cal Memorial Stadium";
	}

	if (location == "woz") {
		return " @ Wozniak Lounge, Soda Hall";
	} else if (location == "sdh") {
		return " @ Sutardja Dai Hall";
	} else if (location == "uni") {
		return " @ Cal Memorial Stadium";
	}

	return "";
}

function getCard(time, event_type) {
	var $card = $(".schedule-item[name='" + generateCardHash(time, event_type) + "']");
	return $card.length > 0 ? $card : false;
}

function updateCard(title, caption, time, event_type) {
	var $card = getCard(time, event_type);
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
	var $html_card = createScheduleCard(card.title, card.caption, card.time, card.event_type, card.location);
	if (card.offset) {
		$html_card.addClass("offset-" + card.offset);
	}

	if (card.location) {
		$html_card.addClass(card.location);
	}
	var $container = $("#" + card.event_type.split(" ").join("-").toLowerCase());
	if ($container.length < 1) {
		throw "WRONG LOCATION, DIPSHIT!";
	}

	$container.append($html_card);
}

$(document).ready(function(){

	// setInterval(function(){
	// 	update_schedule_indicator();
	// }, 1000);

	countdown = countdown(new Date(2015, 9, 9, 21, 0, 0), function(ts){
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
