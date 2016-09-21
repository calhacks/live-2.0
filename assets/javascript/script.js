$(document).ready(function() {
  logEmoji();

  //var window_height = $(window).height();
  //adjust section height

  $(".nav-menu").click(function() {
    $("#nav-sections").show();
    setTimeout(function() {
      $("#nav-sections").addClass("active");
    }, 50);
  });

  if ($(window).width() > 480) {
    $(window).scroll(switchNav);
    $("body").backstretch("assets/img/hackathon_background.jpg");
    $(document).on("scroll", onScroll);
    $(".section").click(loadPixelOnMouse);
    $(".faq-card").click(function(e) {e.stopPropagation();});
  } else {
    $("#nav").addClass("active-mobile");
    $("#logo_white").hide();
    $("#logo_orange").show();
    $("#nav-close, .nav-section").click(function() {
      $("#nav-sections").removeClass("active");
      setTimeout(function() {
        $("#nav-sections").hide();
      }, 300);
    });
  }

  $(".drake-me").click(function() {
    var target = $("#drake-here")[0];
    drakeMe(target);
    $(".section").unbind("click", loadPixelOnMouse);
    $(".section").on("click", drakeOnMouse);
    everythingDrake();
  });

  $(".rain-drake").click(function() {
    if (raining_drake) return;

    startRaining(rate_of_rain);
    $(".section").unbind("click", loadPixelOnMouse);
    $(".section").on("click", drakeOnMouse);
    $(".apply-header").text("We <3 you!");
    raining_drake = true;
  });

  //smoothscroll
  $("a[href^='#']").on("click", function(e) {
    if (this.hash && this.hash.length == 1) return;
    e.preventDefault();
    $(document).off("scroll");

    $("a").each(function() {
      $(this).parent().removeClass("active");
    });
    $(this).parent().addClass("active");

    var target = this.hash;
    var menu = target;
    $target = $(target);
    $("html, body").stop().animate({
      "scrollTop": $target.offset().top + 2
    }, 500, "swing", function() {
      window.location.hash = target;
      $(document).on("scroll", onScroll);
    });
  });
});

loadImg(".partner");
loadImg(".sponsor");

var pixels = ["ambulance.svg", "battery-half.svg", "chevron-left.svg",
  "chevron-right.svg", "diamond.svg", "emoticon-confused.svg", "file-text.svg",
  "food.svg", "hand.svg", "location.svg", "palette.svg", "question.svg",
  "ruler-triangle.svg", "stats-down.svg", "tshirt.svg"];

function randomPixel() {
  var rand = Math.floor(Math.random() * pixels.length);
  var path = "assets/img/pixel/" + pixels[rand];
  var html = "<img class='pixel' src='" + path + "'>";
  return $(html);
}

function loadPixels(num, container) {
  var $container = $(container);
  for (var i = 0; i < num; i++) {
    var pixel = randomPixel();
    $container.append(pixel);
    return pixel;
  }
}

function loadPixelOnMouse(e) {
  var $container = $(this);
  var offset = $container.offset();
  var pixel = loadPixels(1, $container);
  pixel.css({
    left: e.pageX - offset.left,
    top: e.pageY - offset.top
  });
}

function loadDrake() {
  var path = "assets/img/drake.png";
  var html = "<img class='drake' src='" + path + "'>";
  return $(html);
}

function drakeOnMouse(e) {
  var $container = $(this);
  var offset = $container.offset();
  var drake = loadDrake();
  $container.append(drake);
  drake.css({
    left: e.pageX - offset.left,
    top: e.pageY - offset.top
  });
}

function everythingDrake() {
  $(".section:not(#footer) img").attr("src", "assets/img/drake.png");
}

function onScroll(event) {
  var scrollPos = $(document).scrollTop();
  $("#nav-sections a").each(function() {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (refElement.position().top <= scrollPos &&
        refElement.position().top + refElement.height() > scrollPos) {
      $("#nav-sections .nav-section").removeClass("active");
      currLink.parent().addClass("active");
    } else {
      currLink.parent().removeClass("active");
    }
  });
}

SC.initialize({
  // jscs:disable requireCamelCaseOrUpperCaseIdentifiers
  // too lazy to hide this server side
  client_id: "5bf5997727498f138cd393324936657c"
  // jscs:enable requireCamelCaseOrUpperCaseIdentifiers
});

var raining_drake = false;
var rate_of_rain = 1000;
var drake_batch = 10;
var rain_offset_x = 50;
var rain_offset_y = -200;
var rain_variance = 300;
var min_drake_size = 30;
var drake_size_variance = 66;
var min_acceleration = 4;
var acceleration_variance = 12;
var drake_death_time = 10000;
var drake_refresh_rate = 200;


function startRaining(wait) {
  rainDrakes(Math.floor(drake_batch * Math.random()));
  setTimeout(function() {
    startRaining(wait)
  }, wait);
}

function rainDrakes(num) {
  while(num) {
    num--;
    rainDrake({
      x: -rain_offset_x + Math.floor(Math.random() * (screen.width + 2 * rain_offset_x)),
      y: rain_offset_y - Math.floor(Math.random() * rain_variance)
    });
  }
}

function rainDrake(starting, size) {
  var size = size ? size : min_drake_size + Math.floor(Math.random() * drake_size_variance);
  var drake = new Drake(starting, size, min_acceleration + Math.random() * acceleration_variance);
  drake.fall();
  setTimeout(function() {
    drake.die()
  }.bind(this), drake_death_time);
  return drake;
}

window.rainDrake = rainDrake;

function Drake(starting, size, acceleration) {
  this.x = starting.x;
  this.y = starting.y;
  this.size = size;
  this.acceleration = acceleration;
  this.velocity_x;
  this.velocity_y;
  this.time = 0;
  this.img;
  this.moving = true;
  this.time_interval = drake_refresh_rate;
  this.create();
}

Drake.prototype.create = function() {
  this.img = $("<img class='spin' src='assets/img/drake.png'>")
    .mouseenter(function() {
      this.turnToSix();
    }.bind(this));
  $("body").append(this.img);
  this.img.css({
    zIndex: Math.floor(Math.random() * 4),
    transition: "0.3s linear",
    width: this.size,
    position: "fixed",
    top: this.y,
    left: this.x
  });
}

Drake.prototype.fall = function() {

  this.img.css({
    top: this.calcY()
  });
  if (this.moving) {
    setTimeout(function() {
      this.fall();
    }.bind(this), this.time_interval);
  }
}

Drake.prototype.calcY = function() {
  this.y += 1/2 * this.acceleration * (this.time * this.time);
  this.time += this.time_interval * 0.001;
  return this.y;
}

Drake.prototype.calcX = function() {
  return this.x += 2;
}

Drake.prototype.decompose = function() {
  var time = this.time + this.time_interval * 2 * 0.001;
  var direction = (Math.random() > .5) ? -1 : 1;
  var variance = Math.floor(Math.random() * 60) * direction;
  var drake = rainDrake({x: this.x + variance, y: this.y}, this.size / 2);
  drake.time = time;
}

Drake.prototype.shrink = function() {
  this.size = this.size / 2;
  this.img.css({
    width: this.size
  })
}

Drake.prototype.turnToSix = function() {
  this.img.attr("src", "assets/img/six.png")
}

Drake.prototype.die = function() {
  this.img.remove();
  this.moving = false;
}

function logSongs(options) {
  SC.get("/tracks", options, function(tracks) {
    tracks.map(function(track) {
      console.log(track.title, track.bpm, track);
    });
  });
}

function drakeMe(target, tooLate) {
  var link = "/tracks";
  var search = "octobersveryown";
  SC.get(link, {
    q: search,
    limit: 25
  }, function(tracks) {
    console.log(target);
    var song = tracks[Math.floor((tracks.length - 1) * Math.random())];
    // jscs:disable requireCamelCaseOrUpperCaseIdentifiers
    SC.oEmbed(song.uri, {auto_play: true}, target);
    // jscs:enable requireCamelCaseOrUpperCaseIdentifiers
  });
}

function loadImg(selector) {
  $(selector).each(function(index, sponsor) {
    var $sponsor = $(sponsor);
    var src = $sponsor.attr("data-src");
    $sponsor.attr("src", src);
  });
}

var switchNav = function() {
  if ($(window).scrollTop() > 15) {
    $("#nav").addClass("active");
    $("#logo_white").hide();
    $("#logo_orange").show();
  } else {
    $("#nav").removeClass("active");
    $("#logo_white").show();
    $("#logo_orange").hide();
  }
};

var switchNavMobile = function() {
  if ($(window).scrollTop() > 15) {
    $("#nav").addClass("active-mobile");
    $("#logo_white").hide();
    $("#logo_orange").show();
  } else {
    $("#nav").removeClass("active-mobile");
    $("#logo_white").show();
    $("#logo_orange").hide();
  }
};

var activateSection = function(section) {
  current = $(".nav-section.active");
  current.removeClass("active");
  $(section).addClass("active");
};

var poem = "%cCal Hacks, a poem %c\n\n" +

  "%cThere once was a wee young lad,\n" +
  "whose brain had gone all sad,\n" +
  "for he didn't ignite his thoughts or his bytes,\n" +
  "and now his friends laugh cause his life isn't rad.\n" +
  "So one dark, stormy night,\n he found, to his delight,\n" +
  "a hackathon so, extravagant, bold,\n" +
  "that he giggled with glee as he hit apply.\n" +
  "And now with his acceptance,\n his friends are filled with reverence,\n" +
  "they pleaded and pleaded, for a chance to compete with,\n" +
  "this lad in Cal Hacks and go undefeated.\n\n" +

  "There once was a bored little lass,\n who wanted to try out SASS,\n" +
  "so she hit apply and overnight,\n" +
  "she found her life filled with delight.\n" +
  "Now everywhere she go,\n she radiates a glow,\n" +
  "cause she's full of ideas of uses and features,\n" +
  "for all types of users and all types of creatures.\n\n" +

  "And now for the final guest,\n a hacker with wonder and zest,\n" +
  "who doesn't deplore a chance to explore,\n" +
  "come join us for 2 days of hacking galore!";

var logEmoji = function() {
  var styles = {
    please: "color: #336699; font-weight: bold",
    emoji: function() {
      return "background-image: url('" +
        "http://emojipedia.org/wp-content/uploads/2013/07/6-winking-face.png" +
        "'); background-size: cover";
    }
  };
  console.log(
    poem,
    styles.please, styles.emoji(), styles.please
  );
};
