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
    //$("body").backstretch("assets/img/crowd.jpg");
    $("body").backstretch("assets/img/hackathon_background.jpg");
    //$(".section.full").css({"height": window_height});
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

loadSponsors()

var pixels = ["ambulance.svg", "battery-half.svg", "chevron-left.svg", "chevron-right.svg", "diamond.svg", "emoticon-confused.svg", "file-text.svg", "food.svg", "hand.svg", "location.svg", "palette.svg", "question.svg", "ruler-triangle.svg", "stats-down.svg", "tshirt.svg"];

function randomPixel() {
  var rand = Math.floor(Math.random() * pixels.length);
  var path = "assets/img/pixel/" + pixels[rand];
  // var html = '<svg viewBox="0 0 32 32"> <use xlink:href="' + path + '"></use></svg>'
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
  waitBeforeLoad = true
  var $container = $(this);
  var offset = $container.offset()
  var pixel = loadPixels(1, $container)
  pixel.css({
    left: e.pageX - offset.left,
    top: e.pageY - offset.top
  })
  // setTimeout(function() {
  //   pixel.remove()
  // }, 1000)
}

window.loadPixels = loadPixels

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

function loadSponsors() {
  $('.sponsor').each(function(index, sponsor) {
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

var logEmoji = function() {
  var styles = {
    please: "color: #336699; font-weight: bold",
    emoji: function() {
      return "background-image: url('http://emojipedia.org/wp-content/uploads/2013/07/6-winking-face.png'); background-size: cover";
    }
  };
  console.log(
    "%cWelcome to Cal Hacks! %c  ",
    styles.please, styles.emoji()
  );
}
