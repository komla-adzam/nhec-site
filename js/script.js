jQuery(function() {
  $("#slider-area").owlCarousel({
    loop: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });

  // Check if element is scrolled into view
  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return elemBottom <= docViewBottom && elemTop >= docViewTop;
  }
  // If element is scrolled into view, fade it in
  $(window).scroll(function() {
    $(".scroll-animations .animated").each(function() {
      if (isScrolledIntoView(this) === true) {
        $(this).addClass("fadeInLeft");
      }
    });
  });

  $(".fadeOut").owlCarousel({
    items: 1,
    animateOut: "fadeOut",
    loop: true,
    margin: 10
  });
  $(".custom1").owlCarousel({
    animateOut: "slideOutDown",
    animateIn: "flipInX",
    items: 1,
    margin: 30,
    stagePadding: 30,
    smartSpeed: 450
  });

  $(".hover-effect").mouseenter(function(event) {
    $(this).addClass("animated shake");
  });

  $(".hover-effect").on(
    "webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd",
    function(event) {
      $(this).removeClass("animated shake");
    }
  );

  $(".hover-icons").mouseenter(function(event) {
    $(this).addClass("animated shake");
  });

  $(".hover-icons").on(
    "webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd",
    function(event) {
      $(this).removeClass("animated shake");
    }
  );

  $("#toggle").click(function() {
    $(this).toggleClass("on");
    $("#resize").toggleClass("active");
  });
});
