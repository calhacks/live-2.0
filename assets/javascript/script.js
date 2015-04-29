$(document).ready(function() {

  var window_height = $(window).height();
  //adjust section height

  $(".nav-menu").click(function() {
    $("#nav-sections").show()
    setTimeout(function() {
      $("#nav-sections").addClass("active")
    }, 50)
  });


  if ($(window).width() > 480) {
    $(window).scroll(switchNav);
    $("body").backstretch("assets/img/crowd.jpg");
    $("#apply").backstretch("assets/img/stars.jpeg");
    $(".section.full").css({"height": window_height});
  } else {
    $(window).scroll(switchNavMobile);
     $("#nav-close, .nav-section").click(function() {
      $("#nav-sections").removeClass("active")
      setTimeout(function() {
        $("#nav-sections").hide()
      }, 300)
    });
  }

  $(document).on("scroll", onScroll);

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
