$(document).ready(function () {
  $(".wrapper").slick({
    // centerMode: true,
    speed: 1200,
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    adaptiveHeight: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="icons/arrows/left.svg"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="icons/arrows/right.svg"></button>',
  });
});
