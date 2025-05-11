jQuery(document).ready(function ($) {
  console.log("jQuery is loaded");

  AOS.init({
    duration: 600,
    easing: "ease-out",
    once: true,
  });

  if ($(".header").length) {
    var header = $(".header");
    var scrollPosition = $(window).scrollTop();
    var lastScrollTop = 0;

    $(window).scroll(function () {
      scrollPosition = $(window).scrollTop();

      // add class 'scrolled' when scroll position > 50
      if (scrollPosition > 50) {
        header.addClass("header__scrolled");
      } else {
        header.removeClass("header__scrolled");
      }

      // add class header__scroll-down when scrolling down
      if (scrollPosition > 100 && scrollPosition > lastScrollTop) {
        // Scroll kebawah
        header.addClass("header__scroll-down");
      } else {
        // Scroll keatas
        header.removeClass("header__scroll-down");
      }

      lastScrollTop = scrollPosition;
    });
  }

  //burger btn mobile header
  $(".header__btn-md .hamburger").click(function () {
    $(this).toggleClass("is-active");
  });

  //add class when burger btn clicked
  $(".header__btn-md .hamburger").click(function () {
    var bodyElement = $("body");

    if ($(this).hasClass("is-active")) {
      $(".header__menu-md").addClass("opened");
      bodyElement.css("overflow", "hidden");
      $("main, footer").addClass("blurry");
    } else {
      $(".header__menu-md").removeClass("opened");
      bodyElement.css("overflow", "");
      $("main, footer").removeClass("blurry");
    }
  });

  if ($(".footer").length) {
    const currentYear = new Date().getFullYear();
    const yearSpan = $(".footer__copyright .footer__cp-y");

    if (yearSpan.length) {
      yearSpan.text(currentYear);
    }
  }

  //slide - model
  const secModelHome = document.getElementById("model-h");
  if (secModelHome) {
    const modelHome = new Splide(".model-h__slider.splide", {
      type: "loop",
      speed: 500,
      arrows: true,
      easing: "ease-in-out",
      autoplay: true,
      interval: 3000,
      pagination: false,
      gap: "2.5rem",
      perPage: 2,
      perMove: 1,
      breakpoints: {
        768: {
          perPage: 1,
          gap: "1.5rem",
        },
      },
    }).mount();
  }

  //counting
  function animateCounter(element, target, duration = 1500) {
    let start = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        $(element).text(target);
        clearInterval(timer);
      } else {
        $(element).text(Math.floor(start));
      }
    }, 16);
  }
  $(".hero-h__value__number span").each(function () {
    const target = parseInt($(this).text());
    animateCounter(this, target);
  });

  //pin active
  $(".hero-h__pin").on("click", function () {
    $(".hero-h__pin").removeClass("active-pin");
    $(this).addClass("active-pin");
  });
});
