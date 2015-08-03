$(document).ready(function() {

  logEmoji();

  //var window_height = $(window).height();
  //adjust section height

  $(".nav-menu").click(function() {
    $("#nav-sections").show()
    setTimeout(function() {
      $("#nav-sections").addClass("active")
    }, 50)
  });


  if ($(window).width() > 480) {
    $(window).scroll(switchNav);
    $("body").backstretch("assets/img/hackathon_background.jpg");
    $(document).on("scroll", onScroll);
    $(".section").click(loadPixelOnMouse)
  } else {
    $("#nav").addClass("active-mobile");
    $("#logo_white").hide();
    $("#logo_orange").show();
     $("#nav-close, .nav-section").click(function() {
      $("#nav-sections").removeClass("active")
      setTimeout(function() {
        $("#nav-sections").hide()
      }, 300)
    });
  }

  $(".drake-me").click(function() {
    var target = $('#drake-here')[0]
    drakeMe(target)
    $(".section").unbind('click', loadPixelOnMouse)
    $(".section").click(drakeOnMouse)
    everythingDrake()
  })


  //smoothscroll
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $(document).off("scroll");

    $('a').each(function () {
        $(this).parent().removeClass('active');
    })
    $(this).parent().addClass('active');

    var target = this.hash,
        menu = target;
    $target = $(target);
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top+2
    }, 500, 'swing', function () {
        window.location.hash = target;
        $(document).on("scroll", onScroll);
    });
  });
});

loadImg('.partner')
loadImg('.sponsor')

var pixels = ["ambulance.svg", "battery-half.svg", "chevron-left.svg", "chevron-right.svg", "diamond.svg", "emoticon-confused.svg", "file-text.svg", "food.svg", "hand.svg", "location.svg", "palette.svg", "question.svg", "ruler-triangle.svg", "stats-down.svg", "tshirt.svg"];

function randomPixel() {
  var rand = Math.floor(Math.random() * pixels.length);
  var path = "assets/img/pixel/" + pixels[rand];
  var html = '<img class="pixel" src="' + path + '" />'
  return $(html)
}

function loadPixels(num, container) {
  var $container = $(container)
  for (var i = 0; i < num; i++) {
    var pixel = randomPixel()
    $container.append(pixel);
    return pixel
  }
}


function loadPixelOnMouse(e) {
  var $container = $(this);
  var offset = $container.offset()
  var pixel = loadPixels(1, $container)
  pixel.css({
    left: e.pageX - offset.left,
    top: e.pageY - offset.top
  })
}

function loadDrake() {
  var path = "assets/img/drake.png"
  var html = '<img class="drake" src="' + path + '" />'
  return $(html)
}

function drakeOnMouse(e) {
  var $container = $(this);
  var offset = $container.offset()
  var drake = loadDrake()
  $container.append(drake)
  drake.css({
    left: e.pageX - offset.left,
    top: e.pageY - offset.top
  })
}

function everythingDrake() {
  $(".section:not(#footer) img").attr('src', "assets/img/drake.png")
}


function onScroll(event){
  var scrollPos = $(document).scrollTop();
  $('#nav-sections a').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
          $('#nav-sections .nav-section').removeClass("active");
          currLink.parent().addClass("active");
      }
      else{
          currLink.parent().removeClass("active");
      }
  });
}

SC.initialize({
  // too lazy to hide this server side
  client_id: "5bf5997727498f138cd393324936657c",
});

function logSongs(options) {
  SC.get('/tracks', options, function(tracks) {
    tracks.map(function(track) {
      console.log(track.title, track.bpm, track)
    })
  })
}

function drakeMe(target, too_late) {
  var link = '/tracks'
  var search = 'octobersveryown'
  SC.get(link, {
    q: search,
    limit: 25
  }, function(tracks) {
    console.log(target)
    var song = tracks[Math.floor((tracks.length - 1) * Math.random())]
    SC.oEmbed(song.uri, { auto_play: true }, target)
  })
}

function loadImg(selector) {
  $(selector).each(function(index, sponsor) {
    var $sponsor = $(sponsor)
    var src = $sponsor.attr('data-src')
    $sponsor.attr('src', src)
  })
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
}

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
}

var activateSection = function(section) {
  current = $(".nav-section.active");
  current.removeClass("active");
  $(section).addClass("active")
}

var poem = "%cCal Hacks, a poem %c  \n\n%cThere once was a wee young lad,\nwhose brain had gone all sad,\nfor he didn't ignite his thoughts or his bytes,\nand now his friends laugh cause his life isn't rad.\nSo one dark, stormy night,\nhe found, to his delight,\na hackathon so, extravagant, bold,\nthat he giggled with glee as he hit apply.\nAnd now with his acceptance,\nhis friends are filled with reverence,\nthey pleaded and pleaded, for a chance to compete with,\nthis lad in Cal Hacks and go undefeated.\n\nThere once was a bored little lass,\nwho wanted to try out SASS,\nso she hit apply and overnight,\nshe found her life filled with delight.\nNow everywhere she go,\nShe radiates a glow,\ncause she's full of ideas of uses and features,\nfor all types of users and all types of creatures.\n\nAnd now for the final guest,\na hacker with wonder and zest,\nwho doesn't deplore a chance to explore,\ncome join us for 2 days of hacking galore!"

var logEmoji = function() {
  var styles = {
    please: "color: #336699; font-weight: bold",
    emoji: function() {
      return "background-image: url('http://emojipedia.org/wp-content/uploads/2013/07/6-winking-face.png'); background-size: cover";
    }
  };
  console.log(
    poem,
    styles.please, styles.emoji(), styles.please
  );
}
