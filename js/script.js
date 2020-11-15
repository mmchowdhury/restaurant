$(document).ready(function () {

  // Hide collapsible navbar on click
  $(".navbar-nav li a").on("click", function () {
    if (!$(this).hasClass("dropdown-toggle")) {
      $(".navbar-collapse").collapse("hide");
    }
  });

  // Navbar dropdown bg
  $(".navbar-light .navbar-toggler").on("click", function () {
    $(".navbar").toggleClass("menu-bg");
    $(".navbar").css("transition", ".4s ease");
  });

  $(".navbar-nav .nav-link").on("click", function () {
    $(".navbar").removeClass("menu-bg");
    $(".navbar").css("transition", ".4s ease");
  });

  // Smooth scrolling
  $(".nav-item a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      const hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });

  // Scroll Up
  $(window).scroll(function () {
    if ($(this).scrollTop() > 40) {
      $(".scroll-up").fadeIn();
    } else {
      $(".scroll-up").fadeOut();
    }
  });

  $(".scroll-up").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 800);
  });

  // Sticky menu
  $(window).scroll(function () {
    var scrolling = $(this).scrollTop();
    if (scrolling > 700) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
  });

  // Get the current year for the copyright
  $("#year").text(new Date().getFullYear());

});


