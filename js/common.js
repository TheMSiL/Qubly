$(function () {
  new WOW().init();

  //hamburger

  $(".hamburger").click(function () {
    $(this).toggleClass("is-active");

    if ($(this).hasClass("is-active")) {
      $(".mnu_top").slideDown(300);
    } else {
      $(".mnu_top").slideUp(300);
    }
  });

  //hamburger

  //reviews tabs

  $(".nav_rev > div").click(function () {
    const revID = $(this).data("revid");

    $(".nav_rev > div").not(this).removeClass("active");
    $(this).addClass("active");

    $(".item_rev").not(revID).removeClass("active");
    $(revID).addClass("active");
  });

  //reviews tabs

  //anchor

  $("a.anchor").on("click", function (event) {
    const $anchor = $(this);
    $("html, body").stop().animate({
        scrollTop: $($anchor.attr("href")).offset().top - 54,
      },
        {
          duration: 2000,
          specialEasing: {
            width: "linear",
            height: "easeInOutCubic",
          },
        }
      );
    event.preventDefault();
  });

  //anchor
});
