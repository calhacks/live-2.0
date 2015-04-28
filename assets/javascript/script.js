$(document).ready(function() {

  var window_height = $(window).height();
  console.log(window_height)
  //adjust section height
  $(".section.full").css({"height": window_height});

  $("#nav-menu").click(function() {
    $("#nav-sections").show()
    setTimeout(function() {
      $("#nav-sections").addClass("active")
    }, 50)
  });

  $("#nav-close").click(function() {
    $("#nav-sections").removeClass("active")
    setTimeout(function() {
      $("#nav-sections").hide()
    }, 300)
  });

  sponsors = ["a16z.svg", "facebook.svg", "leapmotion.svg", "redbull.svg", "accel.svg", "firebase.svg", "lob.svg", "sendgrid.svg", "aerospike.svg", "fluxcoffee.svg", "lsvp.svg", "sep.svg", "aws.svg", "ford.svg", "mashery.svg", "socialapps.svg", "bee.svg", "foundry.png", "medallia.svg", "stab.svg", "bloomberg.svg", "gap.svg", "meraki.svg", "stackoverflow.svg", "braintree.svg", "gogosqueez.svg", "mgwu.png", "storm8.svg", "cambrian.svg", "google.svg", "microsoft.svg", "teespring.svg", "castlight.svg", "gracenote.svg", "mlh.svg", "texasinstruments.svg", "citris.svg", "hackers.svg", "mongodb.svg", "thalmic.svg", "codeship.svg", "hired.svg", "moxtra.png", "thiel.svg", "conviva.svg", "inventionlab.png", "namecheap.png", "thinksys.svg", "crunchfund.svg", "jump.png", "nest.svg", "typesafe.svg", "dodocase.png", "kairos.svg", "oculus.png", "uber.svg", "draperu.svg", "kloudless.svg", "ordrin.png", "unity.svg", "dropbox.svg", "kpcb.svg", "paloalto.svg", "witai.svg", "ebay.svg", "leadgenius.svg", "quixey.svg", "ziggeo.svg"]

  //too lazy to write html for the 40 sponsors
  var appendSponsor = function(path) {
    var img = $("<img class='sponsor'></img>")
    img.attr("src", "assets/img/sponsors/" + path)
    $("#sponsors-container").append(img)
  }

  var appendSponsors = function(sponsors) {
    for (i in sponsors) {
      appendSponsor(sponsors[i]);
    }
  }

  appendSponsors(sponsors);


});
